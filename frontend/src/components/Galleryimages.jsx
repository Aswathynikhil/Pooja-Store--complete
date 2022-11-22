
import React, { useState } from "react";

const Galleryimages = ({ item }) => {

  const [hoverEffects, setHoverEffects] = useState(' opacity-0')

  const iconStyle = 'h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer'

  function handleHoverEnter() {
    setHoverEffects(' opacity-1 bg-[rgba(0,0,0,0.2)]')
  }

  function handleHoverExit() {
    setHoverEffects(' opacity-0')
  }
  return (
    <div className="flex items-center justify-center   w-full md:w-1/2 lg:w-1/3 pl-4 pr-45 mb-5 lg:pl-2 lg:pr-2 mt-5 " >
      <img className="h-full w-full p-10" src={item} alt="images" />
      {/* <div className={`flex items-center justify-center absolute w-[100%] h-[100%] ease-in duration-100` + hoverEffects}>
      </div> */}
    </div>
  );
};

export default Galleryimages;