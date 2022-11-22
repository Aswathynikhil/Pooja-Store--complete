import React, { useEffect } from "react";
// import img from "../image/decor7.jpg";
import { RiDeleteBin6Fill } from "react-icons/ri";
// import NavBar from "../components/Navbarnew";
// import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import {
    addItemsToCart,
    clearErrors,
    myCartItems,
} from "../../redux/actions/cartAction";
import { Link, useNavigate } from "react-router-dom";
import {
    ADD_TO_CART_RESET,
    DELETE_CART_RESET,
} from "../../constants/cartConstants";
import {
    deleteWishlistItem,
    getWishlistItems,
} from "../../redux/actions/wishlistAction";
import { DELETE_WISHLIST_RESET } from "../../constants/wishListConstants";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const Wishlist = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuthenticated, user } = useSelector((state) => state.user);
    const {
        wishlistItems,
        loading,
        error: myWishlistError,
    } = useSelector((state) => state.myWishlist);
    const {
        message: cartMsg,
        success,
        error: cartError,
    } = useSelector((state) => state.cart);
    const { message, isDeleted, error } = useSelector(
        (state) => state.deleteWishlist
    );

    useEffect(() => {
        if (error) {
            //alert.error(error.message);
            dispatch(clearErrors());
        }
        if (cartError) {
            //alert.error(cartError.message);
            dispatch(clearErrors());
        }
        if (isDeleted) {
            //alert.success(message);
            dispatch({ type: DELETE_WISHLIST_RESET });
        }
        if (success) {
            // alert.success(cartMsg);
            dispatch({ type: ADD_TO_CART_RESET });
        }

        dispatch(getWishlistItems(" "));
    }, [dispatch, success, error, alert, message, isDeleted, cartMsg]);

    const increaseQuantity = (id, quantity, stock) => {
        if (stock <= quantity) return alert.info("The stock has run out");
        let newQty = quantity + 1;
        dispatch(addItemsToCart(id, newQty));
    };

    const decreaseQuantity = (id, quantity) => {
        if (1 >= quantity) return;
        let newQty = quantity - 1;
        dispatch(addItemsToCart(id, newQty));
    };

    const checkoutHandler = () => {
        if (!isAuthenticated || isAuthenticated === false) {
            navigate("/login");
        } else {
            if (user.verified.phone === true) {
                navigate("/user/shipping");
            } else {
                navigate("/user/verify/phone");
            }
        }
    };

    const addItemsToCartHandler = (id, stock, quantity = 1) => {
        if (isAuthenticated) {
            if (stock <= 0) return alert.info("The stock has run out");
            dispatch(addItemsToCart(id, quantity));
            dispatch(deleteWishlistItem(id));
        } else {
            alert.info("Please Login");
        }
    };
    const removeCartitemHandler = (id) => {
        dispatch(deleteWishlistItem(id));


    }
    return (
        <>
            {/* <NavBar /> */}
            {((wishlistItems && wishlistItems.length === 0) || (!wishlistItems)) ? (
                <div>
                    <h1>No Product in your wishlist</h1>
                </div>
            ) : (
                <div className="container grid grid-cols-12 items-start gap-6 pb-16 pt-6 ml-14">

                    {/* wishlist */}

                    {wishlistItems &&
                        wishlistItems?.map((item, index) => (

                            <div className="col-span-9 space-y-4 pt-16 ">
                                {/* single wishlist */}
                                <div className="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
                                    <div className="w-28 flex-shrink-0">
                                        <img src={item?.images[0]?.url} alt="" className="w-full" />
                                    </div>
                                    <div className="w-1/3">
                                        <h2 className="text-gray-800 text-xl font-midum uppercase">
                                            {item?.name}
                                        </h2>
                                        {item.stock == 0 ?
                                            (
                                                <p className="text-gray-500 text-sm">
                                                    Availablity:<span className="text-red-600">Out of Stock</span>
                                                </p>
                                            ) : (
                                                <p className='text-gray-500 text-sm'>Availablity:<span className='text-green-600'>In Stock</span></p>
                                            )}
                                    </div>
                                    {item.discount ?
                                        (
                                            <div className="text-primary text-lg font-semibold">₹{item.discountAmount}</div>

                                        )
                                        :
                                        (
                                            <div className="text-primary text-lg font-semibold">₹{item.mrp}</div>

                                        )}
                                    {item.stock == 0 ?
                                        (
                                            <button className="button-primary  gap-1 flex flex-ro uppercase cursor-not-allowed"
                                                onClick={() => addItemsToCartHandler(item._id, item.stock)}
                                            >
                                                <AiOutlineShoppingCart className="mt-1" />
                                                Add to Cart</button>
                                        )
                                        :
                                        (
                                            <button className="button-primary  gap-1 flex flex-ro uppercase"
                                                onClick={() => addItemsToCartHandler(item._id, item.stock)}
                                            ><AiOutlineShoppingCart className="mt-1" />
                                                Add to Cart</button>
                                        )}

                                    <div className="text-gray-600 cursor-pointer">
                                        {/* <i className="fas fa-trash"></i> */}
                                        <RiDeleteBin6Fill onClick={() => removeCartitemHandler(item._id)} />
                                    </div>
                                </div>
                            </div>
                        ))}

                </div>
            )}

            <div className="pt-16 mt-16"></div>
            {/* <Footer /> */}
        </>
    );
};

export default Wishlist;