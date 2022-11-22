import React, { useState, useEffect } from "react";
import "./AddBanner.css";
import Sidebar from "../Dashboard/Sidebar"
// import { BiCategoryAlt } from 'react-icons/bi'
// import { AiOutlineBranches } from 'react-icons/ai'

import {
    createBanner,
    getAllBanners,
    clearErrors
} from "../../../redux/actions/bannerAction";
import { NEW_BANNER_RESET } from "../../../constants/bannerConstants";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function AddBanner() {

    const dispatch = useDispatch();
    //const alert = useAlert();
    const navigate = useNavigate();

    const { loading, error, success, message } = useSelector(
        (state) => state.newBannerImage
    );
    const { bannerimages } = useSelector((state) => state.allBannerImages);
    console.log(bannerimages, "llllllll");
    useEffect(() => {
        if (error) {
            //alert.error(error.message);
            dispatch(clearErrors());
        }
        if (success) {
            //  alert.success(message);
            navigate("/banner_images");
            dispatch({ type: NEW_BANNER_RESET });
        }
        dispatch(getAllBanners());
    }, [dispatch, alert, error, success, navigate, message]);

    const [image, setImage] = useState(
        "https://res.cloudinary.com/doya08pdl/image/upload/v1661379244/banner/eulivilfagoufudqjc9q.png"
    );
    const [imagePreview, setImagePreview] = useState("/Profile.png");

    const createBannerImageSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();
        myForm.set("image", image);

        dispatch(createBanner(myForm));
    };
    const bannerDataChange = (e) => {
        if (e.target.name === "image") {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagePreview(reader.result);
                    setImage(reader.result);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
        // else {
        //     setUser({ ...user, [e.target.name]: e.target.value });
        // }
    };

 
    return (
        <div>
            <>
                {/* <div className="container sm: w-screen"> */}
                {/* <MetaData
                          title={`${"Create Product -Admin"} -- ${process.env.REACT_APP_SITE_NAME
                              }`}
                      /> */}
                <div className="container dashboard parent md:h-screen md:grid md:grid-cols-6">
                    <section class="sidebar md:col-span-1"> <Sidebar /></section>
            
                <div className="container newProductContainer ">
                    <form
                        action=""
                        className="createCategoryForm  "
                        encType="multipart/form-data"
                         onSubmit={createBannerImageSubmitHandler}
                    >
                        <h1 className='mb-3 font-serif font-bold text-lg'>Add Banner Image</h1>

                       
                            <div id="categoryImage" className='m-2 '>
                                <img src={imagePreview} alt="Avatar Priview" />
                                <input
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    onChange={bannerDataChange}
                                />
                        </div>

                        <div className='bg-orange-900 w-full h-[50px] border-r-5 flex justify-center text-white rounded-md m-2'>
                            <button
                            id="createCategoryBtn"
                            type="submit"
                            // disabled={loading ? true : false}
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>
                {/* </div> */}

                </div>
            </>
        </div>
    )
}

export default AddBanner