
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../Dashboard/Sidebar";
import {
  getAllGalleryImages,
  createGalleryImage,
  clearErrors,
  deleteGalleryImages,
} from "../../../redux/actions/galleryImageAction";
import { Link, useNavigate } from "react-router-dom";
import { DELETE_GALLERYIMG_RESET } from "../../../constants/galleryImageConstants";
import swal from "sweetalert";

function GalleryImageList() {
   const dispatch = useDispatch();
  const navigate = useNavigate();
    const { loading, error, galleryImageList } = useSelector(
      (state) => state.allGalleryImages
    );
    const {
      error: deleteError,
      isDeleted,
      message,
    } = useSelector((state) => state.galleryImages);
  console.log(galleryImageList, "kkkkkkkkkkk");
  
 useEffect(() => {
   if (error) {
     // alert.error(error.message);
     dispatch(clearErrors());
   }
   if (deleteError) {
     // alert.error(deleteError.message);
     dispatch(clearErrors());
   }

   if (isDeleted) {
     // alert.success(message);
     dispatch({ type: DELETE_GALLERYIMG_RESET });
   }

   dispatch(getAllGalleryImages(" "));
 }, [dispatch, error, alert, deleteError, isDeleted, navigate]);

   const actionHandler = (id, name) => {
     swal("What do you want to do?", {
       buttons: {
         Edit: true,
         Delete: true,
         cancel: true,
       },
     }).then((value) => {
       switch (value) {
         case "Delete":
           swal({
             title: "Are you sure?",
             text: `Once deleted, you will not be able to recover this image !`,
             icon: "warning",
             buttons: true,
             dangerMode: true,
           }).then((willDelete) => {
             if (willDelete) {
               dispatch(deleteGalleryImages(id));
             } else {
             }
           });

           break;

        //  case "Edit":
        //    navigate(`/admin/category/${id}`);
        //    break;

         default:
       }
     });
   };

  return (
    <>
      <div className="container dashboard parent md:h-screen md:grid md:grid-cols-6 ">
        <section class="sidebar md:col-span-1 ">
          <Sidebar />
        </section>

        <div class="overflow-x-auto relative shadow-md sm:rounded-lg ">
          <h1 className="flex justify-center font-bold mt-20 text-[40px]">
            Gallery Images
          </h1>
          <table class="w-full mt-20 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                  Images
                </th>

                <th scope="col" class="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {galleryImageList &&
                galleryImageList.map((galleryImage) => (
                  <tr key={galleryImage._id} class="border-b border-gray-200 dark:border-gray-700">
                    <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                      <img
                        className=" mt-4 w-10 h-10 object-cover rounded"
                        src={galleryImage?.image?.url}
                        alt=""
                      />
                    </td>
                    <td>
                      <button onClick={() => actionHandler(galleryImage?._id)} className="m-5">Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default GalleryImageList;
