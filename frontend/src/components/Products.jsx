




// import React, { useState, useEffect } from "react";
// import { FaThList } from "react-icons/fa";
// import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
// import Sidebar from "../components/SidebarUser";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts, clearErrors } from "../redux/actions/productAction";
// import { Link, useNavigate } from "react-router-dom";
// import Counter from "./Counter";
// import { ADD_TO_CART_RESET } from "../constants/cartConstants";
// import { addItemsToCart } from "../redux/actions/cartAction";
// import { ADD_TO_WISHLIST_RESET } from "../constants/wishListConstants";
// import { addItemsToWishlist } from "../redux/actions/wishlistAction";


// const Products = () => {

//     // console.log('product',product);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     // const [quantity,setQuantity] = useState(0)

//     const { loading: wishLoading, error: wishErr, message, success } = useSelector((state) => state.newWishlist);
//     const { isAuthenticated } = useSelector((state) => state.user);
//     const { loading, error, products } = useSelector((state) => state.products);
//     const { message: cartMsg, success: newCart, error: cartError } = useSelector((state) => state.cart);

//     // const { loading,error,message,success } = useSelector((state) => state.newWishlist);
//     // const { isAuthenticated } = useSelector((state) => state.user);
//     // const { message:cartMsg,success:newCart,error:cartError } = useSelector((state) => state.cart);

//     console.log('userProduct', products)
//     // useEffect(() => {
//     //   if (error) {
//     //     dispatch(clearErrors());
//     //   }
//     //   dispatch(getProducts());
//     // }, [dispatch, error, navigate]);
//     // const [tag,setTag] = useState(false)
//     // const trending = true;
//     const addToWishlistHandler = (id) => {
//         console.log('wish id', id)
//         if (isAuthenticated) {
//             if (id.stock <= 0) return console.log("The stock has run out")
//             // alert.info("The stock has run out");
//             dispatch(addItemsToWishlist(id))

//         }
//         // else {
//         //   alert.info("Please Login");
//         // }

//     };
//     const addItemsToCartHandler = (id, quantity) => {
//         if (isAuthenticated) {
//             console.log("the stock has run out ")
//             if (quantity == 0) {
//                 quantity = 1
//                 dispatch(addItemsToCart(id, quantity));
//             }
//             // alert.info("The stock has run out");
//             dispatch(addItemsToCart(id, quantity));
//         }
//         //  else {
//         //   alert.info("Please Login");
//         // }
//     };
//     useEffect(() => {
//         if (error) {
//             // alert.error(error.message);
//             dispatch(clearErrors());
//         }
//         if (cartError) {
//             // alert.error(cartError.message);
//             dispatch(clearErrors());
//         }
//         if (success) {
//             // alert.success(message);
//             dispatch({ type: ADD_TO_WISHLIST_RESET })
//         }
//         if (newCart) {
//             // alert.success(cartMsg);
//             dispatch({ type: ADD_TO_CART_RESET })
//         }
//         dispatch(getProducts());

//     }, [dispatch, error, success, message, newCart])
//     // const increaseQuantity = (id, quantity=0, stock) => {
//     //   if (stock <= quantity) return
//     //   // alert.info("The stock has run out");
//     //   let newQty = quantity + 1;
//     //   dispatch(addItemsToCart(id, newQty));
//     // };

//     // const decreaseQuantity = (id, quantity) => {
//     //   if (1 >= quantity) return;
//     //   let newQty = quantity - 1;
//     //   dispatch(addItemsToCart(id, newQty));
//     // };

//     return (
//         <>
//             {/* <div className="container dashboard parent md:h-screen md:grid md:grid-cols-6 flex flex-row ">
//         <section className="sidebar md:col-span-1 "> <Sidebar /></section> */}
//             <div className="col-span-3 mt-14  mb-14">
//                 {/* <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 "> */}
//                 {/* Product Grid */}
//                 {/* <div className="grid grid-cols-4 gap-6"> */}
//                 <div className=" grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-1
//                 ">
//                     {/* single product */}
//                     {products &&
//                         products.map((product) => (
//                             <div className="card h-[21rem]">
//                                 <div className="bg-white shadow rounded overflow-hidden group    ">
//                                     {/* product image */}
//                                     <div className="relative">
//                                         <div>
//                                             <img
//                                                 src={product?.images[0].url}
//                                                 alt=""
//                                                 className="w-50 h-50 max-h-32 ml-20	"
//                                             />
//                                         </div>

//                                         <div className="absolute inset-0  grid gri  items-center justify-end  ">

//                                             {/* <div className="flex items-center "> */}
//                                             {/* <span className="badge rotate-90">New</span> */}
//                                             {/* <div className="mb-1 ml-14 h-6">
//                         <span className=" pl-0.5   bg-black "></span>
//                       </div> */}
//                                             {product.productType === 'New' ? (
//                                                 <>
//                                                     <div className="mb-1 ml-14 h-6">
//                                                         <span className=" pl-0.5   bg-black "></span>
//                                                     </div>
//                                                     <span className="badge rotate-90 mb-12 ml-8">{product?.productType}</span>
//                                                     <button
//                                                         onClick={() => addToWishlistHandler(product?._id)}
//                                                         className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center bg-red-500 "
//                                                     >
//                                                         <AiOutlineHeart />
//                                                     </button>
//                                                 </>


//                                             ) : (product.productType === 'Trending' ? (
//                                                 <>
//                                                     <div className="mb-3 ml-14 h-6">
//                                                         <span className=" pl-0.5   bg-black "></span>
//                                                     </div>
//                                                     <span className="badge rotate-90 mb-12 ml-6">
//                                                         {product?.productType}
//                                                     </span>
//                                                     <button
//                                                         onClick={() => addToWishlistHandler(product?._id)}
//                                                         className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center bg-red-500 "
//                                                     >
//                                                         <AiOutlineHeart />
//                                                     </button>
//                                                 </>

//                                             )
//                                                 :
//                                                 (
//                                                     <button
//                                                         onClick={() => addToWishlistHandler(product?._id)}
//                                                         className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center bg-red-500 mr-12 mt-auto"
//                                                     >
//                                                         <AiOutlineHeart />
//                                                     </button>
//                                                 )
//                                             )}

//                                             {/* </div> */}
//                                             {/* <a
//                     href=""
//                     className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
//                   >
//                     <AiOutlineShoppingCart />
//                   </a> */}
//                                             {/* <a
//                         href=""
//                         className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center bg-red-500 mt-auto"
//                       >
//                         <AiOutlineHeart />
//                       </a> */}
//                                         </div>

//                                     </div>

//                                     {/* After image */}
//                                     <div className="p-5 flex-col gap-3">
//                                         {/* badge */}
//                                         {/* <div className="flex items-center gap-2">
//                   <span className="badge rotate-90">New</span>
//                   <span className="badge rotate-90">Trending</span>
//                 </div> */}
//                                         {/* product details */}
//                                         <div className="px-4 py-3 ">
//                                             {/* <span className="text-gray-400 uppercase text-sm">Brand</span> */}
//                                             {/* <h2 className="product-title">product name</h2> */}
//                                             {/* <Link to ={"/product"}> */}

//                                             <p className="product-title text-lg font-bold block truncate capitalize">
//                                                 {product?.name}
//                                             </p>
//                                             {/* </Link> */}
//                                             {product.qtyType === 'Kg' ?
//                                                 (
//                                                     <select className="w-44 rounded-sm text-sm text-gray-600 px-1 py-1 border ">
//                                                         <option>Select Option</option>
//                                                         <option>1 Kg - {(product.discountAmount) }</option>
//                                                         <option>2 Kg - {(product.discountAmount)*2 }</option>
//                                                         <option>3 Kg - {(product.discountAmount)*3}</option>
//                                                     </select>
//                                                 ) :
//                                                 (product.qtyType === 'Ltr' ?
//                                                     (
//                                                         <select className="w-44 rounded-sm text-sm text-gray-600 px-1 py-1 border ">
//                                                             <option>Select Option</option>
//                                                             <option>1 Ltr - {product.discountAmount}</option>
//                                                             <option>2 Ltr - {(product.discountAmount*2)}</option>
//                                                             <option>3 Ltr - {(product.discountAmount)*3}</option>
//                                                         </select>
//                                                     )
//                                                     :
//                                                     (product.qtyType === 'gm' ?
//                                                         (
//                                                             <select className="w-44 rounded-sm text-sm text-gray-600 px-1 py-1 border ">
//                                                                 <option>Select Option</option>
//                                                                 <option>100 gm - {(product.discountAmount)/10}</option>
//                                                                 <option>250 gm - {(product.discountAmount)/4}</option>
//                                                                 <option>500 gm - {(product.discountAmount)/2}</option>
//                                                             </select>
//                                                         )
//                                                         :
//                                                         (
//                                                             <select className="w-44 rounded-sm text-sm text-gray-600 px-1 py-1 border cursor-not-allowed ">
//                                                                 <option>No Options</option>
//                                                             </select>

//                                                         )
//                                                     )

                                                    

                                                  
//                                                 )}
//                                             {/* {product.productType ?
//                     (
//                       <select className="w-44 rounded-sm text-sm text-gray-600 px-1 py-1 border ">
//                         <option>Select Option</option>
//                         <option>250 {product?.productType} - {(product.price)/4}</option>
//                         <option>500 {product?.productType} - {(product.price)/2}</option>
//                         <option>1 {product?.productType} - {(product.price)}</option>
//                       </select>
//                     )
//                   :
//                   ("")} */}
//                                             {/* <select className="w-44 rounded-sm text-sm text-gray-600 px-1 py-1 border ">
//                         <option>Select Option</option>
//                         <option>Select</option>
//                       </select> */}
//                                             {product.discount ? (
//                                                 <div className="flex items-center">
//                                                     <p className="text-lg font-semibold my-3">
//                                                         ₹{product?.discountAmount}
//                                                     </p>
//                                                     <del>
//                                                         <p className="text-sm text-gray-600 ml-2">MRP ₹{product?.mrp}</p>
//                                                     </del>
//                                                     <span className="discount-percent ml-2">Save {product?.discount}%</span>
//                                                 </div>
//                                             ) : (
//                                                 <div className="flex items-center">
//                                                     <p className="text-lg font-semibold my-3">
//                                                         ₹{product?.mrp}
//                                                     </p>
//                                                     {/* <del>
//     <p className="text-sm text-gray-600 ml-2">MRP ₹{product?.price}</p>
//   </del>
//   <span className="discount-percent ml-2">Save {product?.discount}%</span> */}
//                                                 </div>
//                                             )}
//                                             {/* add to cart button */}

//                                             <div className="flex flex-row justify-between">
//                                                 {/* <label className="border-gray-400 text-gray-400 text-sm  rounded-md bg-gray-200"htmlFor="">qty</label> */}

//                                                 {/* <input value={product?.quantity} className="w-12 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="qty" type="number" /> */}
//                                                 {/* <Counter/> */}
//                                                 {/* <div className="ml-1 shadow-md flex">
//         <div className='bg-gray-500 border-gray-300 text-gray-900 w-3 flex items-center justify-center cursor-pointer rounded-l-md'
//         onClick={() =>
//           decreaseQuantity(product.product, product.quantity)
//         }>
//             -
//         </div>
//         {/* <div className='w-8 flex item-center justify-center border-[1px] border-gray-300'>
//             {counter < 0 ? 0 : counter}
//         </div>
//         <input type="number" value={product.quantity} readOnly className='w-8 flex item-center justify-center border-[1px] border-gray-300'/>

//         <div className='bg-gray-500 border-gray-300 text-gray-900 w-3 flex items-center justify-center cursor-pointer rounded-r-md'
//            onClick={() =>
//             increaseQuantity(
//               product.product,
//               product.quantity,
//               product.stock
//             )
//           }>
//             +
//         </div>
//     </div> */}

//                                                 <button className="button-primary  gap-1 flex flex-row uppercase"
//                                                     onClick={() => addItemsToCartHandler(product?._id)}>
//                                                     <AiOutlineShoppingCart className="mt-1" />
//                                                     Add to cart
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* </div> */}
//                                 </div>
//                             </div>
//                         ))}
//                 </div>
//                 {/* <select  className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"></select> */}
//             </div>
//             {/* </div> */}
//         </>
//     );
// };

// export default Products




import React, { useState, useEffect } from "react";
import { FaThList } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Sidebar from "../components/SidebarUser";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, clearErrors } from "../redux/actions/productAction";
import { Link, useNavigate } from "react-router-dom";
import Counter from "./Counter";
import { ADD_TO_CART_RESET } from "../constants/cartConstants";
import { addItemsToCart } from "../redux/actions/cartAction";
import { ADD_TO_WISHLIST_RESET } from "../constants/wishListConstants";
import { addItemsToWishlist } from "../redux/actions/wishlistAction";
import { MdKeyboardArrowDown } from "react-icons/md";


const Products = () => {

    // console.log('product',product);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const [quantity,setQuantity] = useState(0)

    const { loading: wishLoading, error: wishErr, message, success } = useSelector((state) => state.newWishlist);
    const { isAuthenticated } = useSelector((state) => state.user);
    const { loading, error, products } = useSelector((state) => state.products);
    const { message: cartMsg, success: newCart, error: cartError } = useSelector((state) => state.cart);


    const [selectedAmount, setSelectedAmount] = useState()
    // const { loading,error,message,success } = useSelector((state) => state.newWishlist);
    // const { isAuthenticated } = useSelector((state) => state.user);
    // const { message:cartMsg,success:newCart,error:cartError } = useSelector((state) => state.cart);

    console.log('userProduct', products)
    // useEffect(() => {
    //   if (error) {
    //     dispatch(clearErrors());
    //   }
    //   dispatch(getProducts());
    // }, [dispatch, error, navigate]);
    // const [tag,setTag] = useState(false)
    // const trending = true;
    const addToWishlistHandler = (id) => {
        console.log('wish id', id)
        if (isAuthenticated) {
            if (id.stock <= 0) return console.log("The stock has run out")
            // alert.info("The stock has run out");
            dispatch(addItemsToWishlist(id))

        }
        // else {
        //   alert.info("Please Login");
        // }

    };
    const addItemsToCartHandler = (id, quantity = 1) => {
        if (isAuthenticated) {
            console.log("the stock has run out ")
            // if (quantity == 0) {
            //     quantity = 1
            //     dispatch(addItemsToCart(id, quantity));
            // }
            // alert.info("The stock has run out");
            if (selectedAmount) {
                dispatch(addItemsToCart(id, selectedAmount, quantity))
            }
            dispatch(addItemsToCart(id, quantity));
        }
        //  else {
        //   alert.info("Please Login");
        // }
    };
    useEffect(() => {
        if (error) {
            // alert.error(error.message);
            dispatch(clearErrors());
        }
        if (cartError) {
            // alert.error(cartError.message);
            dispatch(clearErrors());
        }
        if (success) {
            // alert.success(message);
            dispatch({ type: ADD_TO_WISHLIST_RESET })
        }
        if (newCart) {
            // alert.success(cartMsg);
            dispatch({ type: ADD_TO_CART_RESET })
        }
        dispatch(getProducts());

    }, [dispatch, error, success, message, newCart])
    // const increaseQuantity = (id, quantity=0, stock) => {
    //   if (stock <= quantity) return 
    //   // alert.info("The stock has run out");
    //   let newQty = quantity + 1;
    //   dispatch(addItemsToCart(id, newQty));
    // };

    // const decreaseQuantity = (id, quantity) => {
    //   if (1 >= quantity) return;
    //   let newQty = quantity - 1;
    //   dispatch(addItemsToCart(id, newQty));
    // };

    return (
        <>
            {/* <div className="container dashboard parent md:h-screen md:grid md:grid-cols-6 flex flex-row ">
        <section className="sidebar md:col-span-1 "> <Sidebar /></section> */}
            <div className="col-span-3 mt-14  mb-14">
                {/* <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 "> */}
                {/* Product Grid */}
                {/* <div className="grid grid-cols-4 gap-6"> */}
                <div className=" grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-1
                ">
                    {/* single product */}
                    {products &&
                        products.map((product) => (
                            <div className="card h-[21rem]">
                                <div className="bg-white shadow rounded overflow-hidden group    ">
                                    {/* product image */}
                                    <div className="relative">
                                        <div>
                                            <img
                                                src={product?.images[0].url}
                                                alt=""
                                                className="w-50 h-50 max-h-32 ml-20	"
                                            />
                                        </div>

                                        <div className="absolute inset-0  grid gri  items-center justify-end  ">

                                            {/* <div className="flex items-center "> */}
                                            {/* <span className="badge rotate-90">New</span> */}
                                            {/* <div className="mb-1 ml-14 h-6">
                        <span className=" pl-0.5   bg-black "></span>
                      </div> */}
                                            {product.productType === 'New' ? (
                                                <>
                                                    <div className="mb-1 ml-14 h-6">
                                                        <span className=" pl-0.5   bg-black "></span>
                                                    </div>
                                                    <span className="badge rotate-90 mb-12 ml-8">{product?.productType}</span>
                                                    <button
                                                        onClick={() => addToWishlistHandler(product?._id)}
                                                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center bg-red-500 "
                                                    >
                                                        <AiOutlineHeart />
                                                    </button>
                                                </>


                                            ) : (product.productType === 'Trending' ? (
                                                <>
                                                    <div className="mb-3 ml-14 h-6">
                                                        <span className=" pl-0.5   bg-black "></span>
                                                    </div>
                                                    <span className="badge rotate-90 mb-12 ml-6">
                                                        {product?.productType}
                                                    </span>
                                                    <button
                                                        onClick={() => addToWishlistHandler(product?._id)}
                                                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center bg-red-500 "
                                                    >
                                                        <AiOutlineHeart />
                                                    </button>
                                                </>

                                            )
                                                :
                                                (
                                                    <button
                                                        onClick={() => addToWishlistHandler(product?._id)}
                                                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center bg-red-500 mr-12 mt-auto"
                                                    >
                                                        <AiOutlineHeart />
                                                    </button>
                                                )
                                            )}

                                            {/* </div> */}
                                            {/* <a
                    href=""
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <AiOutlineShoppingCart />
                  </a> */}
                                            {/* <a
                        href=""
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center bg-red-500 mt-auto"
                      >
                        <AiOutlineHeart />
                      </a> */}
                                        </div>

                                    </div>

                                    {/* After image */}
                                    <div className="p-5 flex-col gap-3">
                                        {/* badge */}
                                        {/* <div className="flex items-center gap-2">
                  <span className="badge rotate-90">New</span>
                  <span className="badge rotate-90">Trending</span>
                </div> */}
                                        {/* product details */}
                                        <div className="px-4 py-3 ">
                                            {/* <span className="text-gray-400 uppercase text-sm">Brand</span> */}
                                            {/* <h2 className="product-title">product name</h2> */}
                                            {/* <Link to ={"/product"}> */}

                                            <p className="product-title text-lg font-bold block truncate capitalize">
                                                {product?.name}
                                            </p>
                                            {/* </Link> */}
                                            {product.qtyType === 'Kg' ?
                                                (
                                                    <select
                                                        onChange={(e) => setSelectedAmount(e.target.value)}
                                                        value={selectedAmount}
                                                        className="w-44 rounded-sm text-sm text-gray-600 px-1 py-1 border ">
                                                        <option>Select Option</option>
                                                        <option value={product.discountAmount}>1 Kg - {(product.discountAmount)}</option>
                                                        <option value={product.discountAmount * 2}>2 Kg - {(product.discountAmount) * 2}</option>
                                                        <option value={product.discountAmount * 3}>3 Kg - {(product.discountAmount) * 3}</option>
                                                    </select>
                                                ) :
                                                (product.qtyType === 'Ltr' ?
                                                    (
                                                        <select
                                                            onChange={(e) => setSelectedAmount(e.target.value)}
                                                            value={selectedAmount}
                                                            className="w-44 rounded-sm text-sm text-gray-600 px-1 py-1 border ">
                                                            <option>Select Option</option>
                                                            <option value={product.discountAmount}>1 Ltr - {product.discountAmount}</option>
                                                            <option value={product.discountAmount * 2}>2 Ltr - {(product.discountAmount * 2)}</option>
                                                            <option value={product.discountAmount * 3}>3 Ltr - {(product.discountAmount) * 3}</option>
                                                        </select>
                                                    )
                                                    :
                                                    (product.qtyType === 'gm' ?
                                                        (
                                                            <select
                                                                onChange={(e) => setSelectedAmount(e.target.value)}
                                                                value={selectedAmount}
                                                                className="w-44 rounded-sm text-sm text-gray-600 px-1 py-1 border ">
                                                                <option>Select Option</option>
                                                                <option value={product.discountAmount / 10}>100 gm - {(product.discountAmount) / 10}</option>
                                                                <option value={product.discountAmount / 4}>250 gm - {(product.discountAmount) / 4}</option>
                                                                <option value={product.discountAmount / 2}>500 gm - {(product.discountAmount) / 2}</option>
                                                            </select>
                                                        )
                                                        :
                                                        (
                                                            <label className="w-44 rounded-sm text-sm text-gray-600 px-1 py-1 border cursor-not-allowed flex">
                                                                {/* <option>No Options</option> */}
                                                                No Options <MdKeyboardArrowDown className="flex ml-14 mt-2" />
                                                            </label>

                                                        )
                                                    )




                                                )}
                                            {/* {product.productType ?
                    (
                      <select className="w-44 rounded-sm text-sm text-gray-600 px-1 py-1 border ">
                        <option>Select Option</option>
                        <option>250 {product?.productType} - {(product.price)/4}</option>
                        <option>500 {product?.productType} - {(product.price)/2}</option>
                        <option>1 {product?.productType} - {(product.price)}</option>
                      </select>
                    )
                  :
                  ("")} */}
                                            {/* <select className="w-44 rounded-sm text-sm text-gray-600 px-1 py-1 border ">
                        <option>Select Option</option>
                        <option>Select</option>
                      </select> */}
                                            {product.discount ? (
                                                <div className="flex items-center">
                                                    <p className="text-lg font-semibold my-3">
                                                        ₹{product?.discountAmount}
                                                    </p>
                                                    <del>
                                                        <p className="text-sm text-gray-600 ml-2">MRP ₹{product?.mrp}</p>
                                                    </del>
                                                    <span className="discount-percent ml-2">Save {product?.discount}%</span>
                                                </div>
                                            ) : (
                                                <div className="flex items-center">
                                                    <p className="text-lg font-semibold my-3">
                                                        ₹{product?.mrp}
                                                    </p>
                                                    {/* <del>
    <p className="text-sm text-gray-600 ml-2">MRP ₹{product?.price}</p>
  </del>
  <span className="discount-percent ml-2">Save {product?.discount}%</span> */}
                                                </div>
                                            )}
                                            {/* add to cart button */}

                                            <div className="flex flex-row justify-between">
                                                {/* <label className="border-gray-400 text-gray-400 text-sm  rounded-md bg-gray-200"htmlFor="">qty</label> */}

                                                {/* <input value={product?.quantity} className="w-12 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="qty" type="number" /> */}
                                                {/* <Counter/> */}
                                                {/* <div className="ml-1 shadow-md flex">
        <div className='bg-gray-500 border-gray-300 text-gray-900 w-3 flex items-center justify-center cursor-pointer rounded-l-md'
        onClick={() =>
          decreaseQuantity(product.product, product.quantity)
        }>
            -
        </div>
        {/* <div className='w-8 flex item-center justify-center border-[1px] border-gray-300'>
            {counter < 0 ? 0 : counter}
        </div> 
        <input type="number" value={product.quantity} readOnly className='w-8 flex item-center justify-center border-[1px] border-gray-300'/>

        <div className='bg-gray-500 border-gray-300 text-gray-900 w-3 flex items-center justify-center cursor-pointer rounded-r-md'
           onClick={() =>
            increaseQuantity(
              product.product,
              product.quantity,
              product.stock
            )
          }>
            +
        </div>
    </div> */}

                                                <button className="button-primary  gap-1 flex flex-row uppercase"
                                                    onClick={() => addItemsToCartHandler(product?._id)}>
                                                    <AiOutlineShoppingCart className="mt-1" />
                                                    Add to cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </div>
                            </div>
                        ))}
                </div>
                {/* <select  className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"></select> */}
            </div>
            {/* </div> */}
        </>
    );
};

export default Products