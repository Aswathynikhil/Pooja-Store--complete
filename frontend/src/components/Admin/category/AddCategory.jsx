
// import React, { useState, useEffect } from "react";
// import { useAlert } from "react-alert";
// import {
//     getAllCategories,
//     craeteCategory,
//     clearErrors,
// } from "../../../redux/actions/categoryAction";
// import { NEW_CATEGORY_RESET } from "../../../constants/categoryConstants";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import "./AddCategory.css";
// import Sidebar from "../Dashboard/Sidebar"


// function AddCategory() {
//     const dispatch = useDispatch();
//     //const alert = useAlert();
//     const navigate = useNavigate();

//     const { loading, error, success, message } = useSelector((state) => state.newCategory);
//     const { categoryList } = useSelector((state) => state.allCategories);

//     const [name, setName] = useState("");
//     const [parentId, setParentId] = useState("");

//     useEffect(() => {
//         if (error) {
//             //alert.error(error.message);
//             dispatch(clearErrors());
//         }
//         if (success) {
//             //  alert.success(message);
//             navigate("/categoryList");
//             dispatch({ type: NEW_CATEGORY_RESET });
//         }
//         dispatch(getAllCategories());
//     }, [dispatch, alert, error, success, navigate, message]);



//     const [image, setImage] = useState("https://res.cloudinary.com/doya08pdl/image/upload/v1661379244/category/eulivilfagoufudqjc9q.png");
//     const [imagePreview, setImagePreview] = useState("/Profile.png");

//     const createCategorySubmitHandler = (e) => {
//         e.preventDefault();

//         const myForm = new FormData();
//         myForm.set("name", name);
//         myForm.set("parentId", parentId);
//         myForm.set("image", image);

//         dispatch(craeteCategory(myForm))
//     };
//     const categoryDataChange = (e) => {
//         if (e.target.name === "image") {
//             const reader = new FileReader();

//             reader.onload = () => {
//                 if (reader.readyState === 2) {
//                     setImagePreview(reader.result);
//                     setImage(reader.result);
//                 }
//             };
//             reader.readAsDataURL(e.target.files[0]);
//         }
//         // else {
//         //     setUser({ ...user, [e.target.name]: e.target.value });
//         // }
//     };


//     const createCategoryList = (categories, options = []) => {
//         if (categories) {
//             for (let category of categories) {
//                 options.push({ value: category._id, name: category.name, image: category.image });
//                 if (category && category.children.length > 0) {
//                     createCategoryList(category.children, options);
//                 }
//             }
//             return options;
//         }

//     };

//     return (
//         <div>
//             <>
//                 {/* <div className="container sm: w-screen"> */}
//                 {/* <MetaData
//                           title={`${"Create Product -Admin"} -- ${process.env.REACT_APP_SITE_NAME
//                               }`}
//                       /> */}
//                 <div className="container dashboard parent md:h-screen md:grid md:grid-cols-6">
//                     <section className="sidebar md:col-span-1"> <Sidebar /></section>


//                     <div className="container newProductContainer ">
//                         <form
//                             action=""
//                             className="createCategoryForm  "
//                             encType="multipart/form-data"
//                             onSubmit={createCategorySubmitHandler}
//                         >
//                             <h1 className='mb-3 font-serif font-bold text-lg'>Create Category</h1>
//                             <div >
//                                 {/* <BiCategoryAlt /> */}
//                                 <input
//                                     className=' mb-2'
//                                     type="text"
//                                     placeholder="Category Name"
//                                     required
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                 />
//                             </div>

//                             <div>
//                                 {/* <AiOutlineBranches /> */}
//                                 <select onChange={(e) => setParentId(e.target.value)}>
//                                     <select className=''>
//                                         <option value="">Choose Parent Category</option>

//                                         {categoryList && createCategoryList(categoryList).map(
//                                             (option) =>
//                                                 <option key={option.value} value={option.value}>
//                                                     {option.name}
//                                                 </option>

//                                         )}
//                                     </select>
//                                 </select>
//                             </div>
//                             <div id="categoryImage" className='m-2 '>
//                                 <img src={imagePreview} alt="Avatar Priview" />
//                                 <input
//                                     type="file"
//                                     name="image"
//                                     accept="image/*"
//                                     onChange={categoryDataChange}
//                                 />
//                             </div>

//                             <div className='bg-orange-900 w-full h-[50px] border-r-5 flex justify-center text-white rounded-md m-2'>
//                                 <button
//                                     id="createCategoryBtn"
//                                     type="submit"
//                                 // disabled={loading ? true : false}
//                                 >
//                                     Create
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                     {/* </div> */}

//                 </div>
//             </>
//         </div>
//     )
// }

// export default AddCategory






import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import {
    getAllCategories,
    craeteCategory,
    clearErrors,
} from "../../../redux/actions/categoryAction";
import { NEW_CATEGORY_RESET } from "../../../constants/categoryConstants";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./AddCategory.css";
import Sidebar from "../Dashboard/Sidebar"
import imageIcon from '../../../image/imageIcon.png'

function AddCategory() {
    const dispatch = useDispatch();
    //const alert = useAlert();
    const navigate = useNavigate();

    const { loading, error, success, message } = useSelector((state) => state.newCategory);
    const { categoryList } = useSelector((state) => state.allCategories);

    const [name, setName] = useState("");
    const [parentId, setParentId] = useState("");

    useEffect(() => {
        if (error) {
            //alert.error(error.message);
            dispatch(clearErrors());
        }
        if (success) {
            //  alert.success(message);
            navigate("/categoryList ");
            dispatch({ type: NEW_CATEGORY_RESET });
        }
        dispatch(getAllCategories());
    }, [dispatch, error, success, navigate, message]);



    const [image, setImage] = useState("https://res.cloudinary.com/doya08pdl/image/upload/v1661379244/category/eulivilfagoufudqjc9q.png");
    const [imagePreview, setImagePreview] = useState(imageIcon);

    const createCategorySubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();
        myForm.set("name", name);
        myForm.set("parentId", parentId);
        myForm.set("image", image);

        dispatch(craeteCategory(myForm))
    };
    const categoryDataChange = (e) => {
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


    const createCategoryList = (categories, options = []) => {
        if (categories) {
            for (let category of categories) {
                options.push({ value: category._id, name: category.name, image: category.image });
                if (category && category.children.length > 0) {
                    createCategoryList(category.children, options);
                }
            }
            return options;
        }

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
                    <section className="sidebar md:col-span-1"> <Sidebar /></section>


                    <div className="container newProductContainer ">
                        <form
                            action=""
                            className="createCategoryForm  "
                            encType="multipart/form-data"
                            onSubmit={createCategorySubmitHandler}
                        >
                            <h1 className='mb-3 font-serif font-bold text-lg'>Create Category</h1>
                            <div >
                                {/* <BiCategoryAlt /> */}
                                <input
                                    className=' mb-2'
                                    type="text"
                                    placeholder="Category Name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div>
                                {/* <AiOutlineBranches /> */}
                                <select onChange={(e) => setParentId(e.target.value)}>
                                    {/* <select className=''> */}
                                    <option value="">Choose Parent Category</option>

                                    {categoryList && createCategoryList(categoryList).map(
                                        (option) =>
                                            <option key={option.value} value={option.value}>
                                                {option.name}
                                            </option>

                                    )}
                                    {/* </select> */}
                                </select>
                            </div>
                            <div id="categoryImage" className='m-2 '>
                                <img src={imagePreview} alt="Avatar Priview" />
                                <input
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    onChange={categoryDataChange}
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

export default AddCategory