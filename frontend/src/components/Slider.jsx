import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBanners } from "../redux/actions/bannerAction";
import { Link, useNavigate } from "react-router-dom";
import "./Slider.css";
import { Sliderdata } from './Sliderdata';
const Slider = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { loading, error, bannerList } = useSelector((state) => state.allBannerImages);
    const { error: deleteError, isDeleted, message } = useSelector((state) => state.bannerImages);
    console.log(bannerList, "kkkkkkkkkkk");


    useEffect(() => {

        dispatch(getAllBanners(" "))
    }, [dispatch])


    // Styles
    const slideStyle = "slide flex items-center justify-center h-[100%]";

    //States
    const [slides] = useState(Sliderdata);
    const [activeSlide, setActiveSlide] = useState(0);

    const prevSlide = () => {
        if (activeSlide === 0) {
            setActiveSlide(slides.length - 1);
        } else {
            setActiveSlide(activeSlide - 1);
        }
    };
    const nextSlide = () => {
        if (activeSlide === slides.length - 1) {
            setActiveSlide(0);
        } else {
            setActiveSlide(activeSlide + 1);
        }
    };
    return (
        <div className="slider h-[540px] bg-white flex items-center ml-10  mr-5 ">
            {/* left Arrow */}
            <div className='rounded-full bg-grey flex justify-center items-center absolute shadow-md hover:cursor-pointer z-10 ' onClick={prevSlide}>
                <BiLeftArrow className="text-gray-700 " style={{ fontSize: "30px" }} />
                
            </div>

            {/* Slide */}

            {bannerList && bannerList.map((banner,index) => {
                if (index === activeSlide) {
                    return (
                        <div key={banner._id} className={`wrapper flex w-[100%] h-[450px] items-center justify-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative  sm:w-[100%] md:w-[100%] ` + banner.background}>
                            <div className={slideStyle}>
                                <div className="flex-1 flex justify-center items-center h-[100%]">
                                    <img
                                        className=' h-[100%] sm:w-[100%] md:w-[100%]'
                                        src={banner?.image?.url}
                                        alt="man"
                                    />
                                </div>
                            </div>
                        </div>
                    );
                }
            })}
            {/* Right Arrow */}

            <div className='rounded-full bg-grey flex justify-center items-center absolute right-5 shadow-md hover:cursor-pointer z-10' onClick={nextSlide}>
                <BiRightArrow className="text-gray-700" style={{ fontSize: "30px"  }} />
               
            </div>
        </div>
    );
};

export default Slider;