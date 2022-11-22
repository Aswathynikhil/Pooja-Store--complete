import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../Dashboard/Sidebar";
import {
    getAllBanners,
    deleteBannerImage,
    clearErrors
} from "../../../redux/actions/bannerAction"
import { Link, useNavigate } from "react-router-dom";
import { DELETE_BANNER_RESET } from "../../../constants/bannerConstants";
import swal from "sweetalert";
function BannerImageList() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, bannerList } = useSelector(
        (state) => state.allBannerImages
    );
    const {
        error: deleteError,
        isDeleted,
        message,
    } = useSelector((state) => state.bannerImages);
    console.log(bannerList, "kkkkkkkkkkk");

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
            dispatch({ type: DELETE_BANNER_RESET });
        }

        dispatch(getAllBanners(" "));
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
                        text: `Once deleted, you will not be able to recover this image!`,
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    }).then((willDelete) => {
                        if (willDelete) {
                            dispatch(deleteBannerImage(id));
                        } else {
                        }
                    });

                    break;

                // case "Edit":
                //     navigate(`/admin/category/${id}`);
                //     break;

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

                <div class="overflow-x-auto relative  sm:rounded-lg ">
                    <h1 className="flex justify-center font-bold mt-20 text-[40px]">
                        Banner Images
                    </h1>
                    <table class="w-full mt-20 text-sm text-left text-gray-500 dark:text-gray-400 border-l-0">
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
                            {bannerList && bannerList.map((banner)=>(
                            <tr key={banner._id} class="border-b border-gray-200 dark:border-gray-700">
                                    <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                                        <img
                                            className=" mt-4 w-10 h-10 object-cover rounded"
                                            src={banner?.image?.url}
                                            alt=""
                                        />
                                    </td>
                                <td>
                                        <button onClick={() => actionHandler(banner?._id)} className="m-5">Delete</button>
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="  "></div>
            </div>
        </>
    );
}

export default BannerImageList;
