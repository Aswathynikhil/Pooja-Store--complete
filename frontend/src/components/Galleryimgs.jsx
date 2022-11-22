import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllGalleryImages,

} from "../redux/actions/galleryImageAction";
import { ApiTopImages } from '../components/Images';
import Galleryimages from './Galleryimages';
const Galleryimgs = () => {
    const dispatch = useDispatch();

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

        dispatch(getAllGalleryImages(" "));
    }, [dispatch]);

    return (
        <>
        <div className=''>
            <div className="">
                <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold flex items-center justify-center mb-5  ">
                    Image Gallery
                </h1>
           </div>
           <div className='p-10 flex flex-wrap'>
           
         
        
            { galleryImageList &&
                        galleryImageList.map((galleryImage) => (
                            <Galleryimages item={galleryImage?.image?.url} key={galleryImage._id} />
                        ))}
        
            </div>
            </div>
        </>
    );
};

export default Galleryimgs;