import React from "react";

const Footer = () => {
    const socialStyle = 'm-3 rounded-full cursor-pointer p-2 text-white';
    return (

        <div className=" p-2 bg-black grid grid-cols-1 ">
            <div className="flex-1 flex justify-center flex-wrap p-2">
                <h1 className="text-green-800">All Rights Reserved</h1>
            </div>
            <div className="flex flex-row  justify-center  ">
                <div className="p-5 text-white">Terms and Conditions</div>
                <div className="p-5 text-white">Refund Policy</div>
                <div className="p-5 text-white">Cancellation Policy</div>

            </div>
            
                <div><hr className="flex justify-items-center absolute mb-5 h-px w-10px  bg-white" /></div>
                
   
          
          
         

            <div>
                <h1 className=" text-green-800 flex justify-center">Dword Core Pvt Ltd ®</h1>
            </div>

        </div>
    );
};

export default Footer;