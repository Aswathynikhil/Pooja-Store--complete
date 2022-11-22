import React, { useState, useEffect } from "react";
import "./AddGalleryImage.css";
import Sidebar from "../Dashboard/Sidebar";
import { useAlert } from "react-alert";
// import { BiCategoryAlt } from 'react-icons/bi'
// import { AiOutlineBranches } from 'react-icons/ai'

import {
  createGalleryImage,
  getAllGalleryImages,
  deleteGalleryImages,
  clearErrors,
} from "../../../redux/actions/galleryImageAction";
import { NEW_GALLERYIMG_RESET } from "../../../constants/galleryImageConstants";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function AddGalleryImage() {
    const dispatch = useDispatch();
    //const alert = useAlert();
  const navigate = useNavigate();
  
   const { loading, error, success, message } = useSelector(
     (state) => state.newGalleryImage
   );
  const { galleryimages } = useSelector((state) => state.allGalleryImages);
  console.log(galleryimages,"llllllll");
useEffect(() => {
  if (error) {
    //alert.error(error.message);
    dispatch(clearErrors());
  }
  if (success) {
    //  alert.success(message);
    navigate("/gallery_images");
    dispatch({ type: NEW_GALLERYIMG_RESET });
  }
  dispatch(getAllGalleryImages());
}, [dispatch, alert, error, success, navigate, message]);

const [image, setImage] = useState(
  "https://res.cloudinary.com/doya08pdl/image/upload/v1661379244/galleryImg/eulivilfagoufudqjc9q.png"
);
const [imagePreview, setImagePreview] = useState("/Profile.png");

const createGalleryImageSubmitHandler = (e) => {
  e.preventDefault();

  const myForm = new FormData();
  myForm.set("image", image);

  dispatch(createGalleryImage(myForm));
};
const galleryDataChange = (e) => {
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
          <section class="sidebar md:col-span-1">
            {" "}
            <Sidebar />
          </section>

          <div className=" newProductContainer  ">
            <form
              action=""
              className="createCategoryForm   "
              encType="multipart/form-data"
              onSubmit={createGalleryImageSubmitHandler}
            >
              <h1 className="mb-3 font-serif font-bold text-lg">
                Add Gallery Image
              </h1>

              <div id="categoryImage" className="m-2 ">
                <img src={imagePreview} alt="Avatar Priview" />
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={galleryDataChange}
                />
              </div>
              <div className="bg-orange-900 w-full h-[50px] border-r-5 flex justify-center text-white rounded-md m-2">
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
  );
}

export default AddGalleryImage;
