import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
    getAllCategories,
 
} from "../redux/actions/categoryAction";
import { Link, useNavigate } from "react-router-dom";
import { DELETE_CATEGORY_RESET } from "../constants/categoryConstants";
import swal from 'sweetalert';
import { ApiCategories } from '../components/ApiCategories';

function Categorycard() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    // const cat = useSelector((state) => state.user);
    // // console.log(state, "state");
    // const { isAuthenticated } = cat.user;
    const { loading, error, categoryList } = useSelector((state) => state.allCategories);
    const { error: deleteError, isDeleted, message } = useSelector((state) => state.category);
    console.log(categoryList, "kkkkkkkkkkk");

    const { isAuthenticated } = useSelector((state) => state.user);
     console.log(isAuthenticated,"lllllll");
    useEffect(() => {

        dispatch(getAllCategories(" "))
    }, [dispatch])

    const categorySubmitHandler = () => {
        if (isAuthenticated) {
            navigate('/product')
        }
        else {
            navigate('/register');
        }
    }

    

    return (
    <div className='container mx-auto'>
          <div className=" ml-auto mr-auto flex flex-wrap items-start justify-center p-20">
              <div className="w-full pl-5 lg:pl-2 mb-4 ">
                  <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold flex items-center justify-center ">
                      Categories
                  </h1>
              </div>
                {/* {ApiCategories.map((category, index) => ( */}
                {categoryList && categoryList.map(category => (
                    <div key={category._id } className="flex items-center justify-center  w-full md:w-1/2 lg:w-1/3  mb-5 lg:pl-2 lg:pr-2 mt-5 ">
                      <div className="bg-white rounded-lg m-h-64  transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                          <figure className="mb-2">
                                <img onClick={ categorySubmitHandler} src={category?.image?.url} alt="" className="h-64 w-64 ml-auto mr-auto" />
                          </figure>
                          <div className="rounded-lg p-4 bg-black flex flex-col">
                              <div>
                                  <h5 className="text-white text-2xl font-bold leading-none text-center">
                                        {category?.name}
                                  </h5>
                                 
                              </div>
                          
                          </div>
                      </div>
                  </div>))}
              
               </div>
        
    </div>
  )
}

export default Categorycard