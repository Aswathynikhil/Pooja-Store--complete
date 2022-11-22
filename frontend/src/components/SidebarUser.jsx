


import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiBorderAll, BiFoodTag, BiCategoryAlt } from "react-icons/bi";
import {
    MdOutlineRoomService,
    MdProductionQuantityLimits,
} from "react-icons/md";
import "./SidebarUser.css";
import { FaStarOfDavid } from "react-icons/fa";
import { getAllCategories, clearErrors } from "../redux/actions/categoryAction";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import button from "../assets/button.png"
import Products from "./Products";
import { getProducts, clearErrorsP } from "../redux/actions/productAction";
import Product from "./Product";



const Sidebaruser = () => {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate()
  //   const { loading, error, categoryList } = useSelector((state) => state.allCategories);
  //   const [open, setOpen] = useState(true);
  //   const [categoryDtl, setCategoryDtl] = useState('')
  

  // const [category, setCategory] = useState("");

  //   console.log("sidebar", categoryList)
  //   useEffect(() => {
  //       if (error) {
  //           dispatch(clearErrors())
  //       }
  //       dispatch(getAllCategories(" "))
  //     dispatch(getProducts(""));
  //   }, [dispatch, error, navigate, category]);
  //   useEffect(() => {
  //       // const categoryDelt = ((e)=>{
  //       console.log('sidebar category', categoryDtl);
  //       //   })
  //   }, [categoryDtl])


  const { keyword } = useParams();
  const dispatch = useDispatch();
 //const alert = useAlert();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 250000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const {
    loading,
    products,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const { categoryList } = useSelector((state) => state.allCategories);
  console.log(categoryList,"jjjjjjjjjj")

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    if (error) {
      alert.error(error.message);
      dispatch(clearErrors());
    }

    dispatch(getAllCategories());
    dispatch(getProducts(category));
  }, [dispatch, currentPage, price, category, ratings, error, alert]);

  let count = filteredProductsCount;



    //Product

    // const { loadingP, errorP, products } = useSelector((state) => state.products);
    // console.log('userProduct',products)
    //   useEffect(() => {
    //     if (errorP) {
    //       dispatch(clearErrors());
    //     }
    //     dispatch(getProducts());
    //   }, [dispatch, errorP, navigate]);
  
  
  const renderCategories = (categories) => {
    let categoryArray = [];

    for (let category of categories) {
      categoryArray.push(
        <li key={category.name} className="cursor-pointer"  >
          {category.parentId ? (
            <a href={category.name} onClick={() => setCategory(category.name)}>{category.name}</a>
          ) : (
            <span onClick={() => setCategory(category.name)} >{category.name}</span>
          )}

          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }
    return categoryArray;
  };

  const allproductsHandler = () => {
    window.location.reload();
    navigate("/product");
  };


    return (
        <>
            <div className="h-screen flex item-end justify-end px-4 pb-6">
                <button className=" relative z-30 lg:hidden peer top-0 h-14 w-14 rounded-full bg-slate-700 hover:bg-slate-800 focus:bg-slate-700 transition mb-[660px]">
                    <span className="text-white">
                        <GiHamburgerMenu className="w-6 m-auto" />
                    </span>
                </button>
                <div className="z-20 fixed top-0-left-92 lg:left-0 h-screen w-9/12 lg:w-72 bg-white shadow-2xl peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                    <nav role="navigation" className="p-6">
                        {/* <div className="flex item-center gap-4 pb-4">
              <h2 className="text-3xl textslate-700 font-bold">Department</h2>
            </div> */}
              <div className=" categoryContainer mt-4 mx-4 relative overflow-y-auto overflow-x-hidden h-[85vh">
                            {/* <span className="uppercase px-4 text-gray-500">Categories</span> */}
                            {/* <ul className="space-y-4 mb-12 px-4 mt-8">
                                {categoryList && categoryList.map(category => (
                                    <li>
                                        <a
                                            href=""
                                        
                                            className="flex gap-4 text-gray-60 hover:text-gray-800 transition"
                                        >
                                         
                                            {category?.name}
                                        </a>
                                    </li>
                                ))}
                            </ul> */}
                


                <ul >
                  <li className="category-linkAll cursor-pointer " onClick={allproductsHandler}>All Categories</li>
                 
                  {categoryList && categoryList.length > 0
                    ? renderCategories(categoryList)
                      : null}
      
                </ul>


                
                          
                        </div>
                    </nav>
                </div>
            </div>
            <Products />
            {/* <Product/> */}
        </>
    );
};

export default Sidebaruser;