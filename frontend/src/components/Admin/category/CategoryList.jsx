import React, {useState,useEffect} from 'react'
import Sidebar from '../Dashboard/Sidebar'
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  craeteCategory,
  clearErrors,
  deleteCategory,
} from "../../../redux/actions/categoryAction";
import { Link, useNavigate } from "react-router-dom";
import { DELETE_CATEGORY_RESET } from "../../../constants/categoryConstants";
import swal from 'sweetalert';
import "./CategoryList.css";

function CategoryList() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { loading, error, categoryList } = useSelector((state) => state.allCategories);
  const { error: deleteError, isDeleted, message } = useSelector((state) => state.category);
  console.log(categoryList,"kkkkkkkkkkk");

  useEffect(() => {
    if (error) {
     // alert.error(error.message);
      dispatch(clearErrors())
    }
    if (deleteError) {
     // alert.error(deleteError.message);
      dispatch(clearErrors())
    }

    if (isDeleted) {
     // alert.success(message);
      dispatch({ type: DELETE_CATEGORY_RESET });


    }

    dispatch(getAllCategories(" "))
  }, [dispatch, error, alert, deleteError, isDeleted, navigate])


  // const renderCategories =(categories) => {
  //   console.log(categories,"//////");
  //   let categoryArray = [];

  //   for (let category of categories) {
  //     categoryArray.push(
  //       <li key={category?.name} >
  //         {category?.name} <span onClick={() => actionHandler(category?._id, category?.name)}></span>
  //         {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
  //       </li>
  //     )
  //   }
  //   return categoryArray
  // };

  const actionHandler = (id, name) => {
    swal("What do you want to do?", {
      buttons: {
        Edit: true,
        Delete: true,
        cancel: true,
      },
    })
      .then((value) => {
        switch (value) {

          case "Delete":
            swal({
              title: "Are you sure?",
              text: `Once deleted, you will not be able to recover this ${name} Category !`,
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
              .then((willDelete) => {
                if (willDelete) {
                  dispatch(deleteCategory(id))
                } else {

                }
              });

            break;

          // case "Edit":
          //   navigate(`/admin/category/${id}`);
          //   break;

          default:

        }
      });
  }

  return (

    <>
      
      <div className="container dashboard parent md:h-screen md:grid md:grid-cols-6 flex flex-row ">
        <section className="sidebar md:col-span-1 "> <Sidebar /></section>

        <div className="overflow-x-auto relative  sm:rounded-lg ">
          <h1 className='flex justify-center font-bold mt-10 text-[40px]'>All Categories</h1>
          <table className="w-full mt-20 text-sm text-left text-gray-500 dark:text-gray-400 border-l-0">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                  Category name
                </th>
                <th scope="col" className="py-3 px-6">
                  Image
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {categoryList && categoryList.map(category => (
                <tr key={category._id} className="border-b border-gray-200 dark:border-gray-700">
                  <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    {category?.name}
                  </td>
                  <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                    <img
                      className=" mt-4 w-10 h-10 object-cover rounded"
                      src={category?.image?.url}
                      alt=""
                    />
                  </td>
                  <td>
                    <button className='m-5' onClick={() => actionHandler(category?._id, category?.name)}>Delete</button>
                  </td>
                </tr>
                
             ))}
              

            </tbody>
          </table>
        </div>
{/* 
        <div className="categoryListContainer">
          <h1 id="categoryListHeading">ALL CATEGORIES</h1>
          <div>
            <ul>
              {renderCategories(categoryList && categoryList)}
            </ul>
          </div> */}

          {/* <div>
            <ul>
              {renderCategories(categoryList&&categoryList)}
            </ul>
           </div> */}



        {/* </div> */}
      </div>
    </>
  )
}

export default CategoryList