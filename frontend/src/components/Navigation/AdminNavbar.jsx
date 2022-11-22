


import React, { useState } from 'react'
import Button from '../Button';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from '../../image/logo.png'
import { AiOutlineSearch } from "react-icons/ai";
import { logout } from "../../redux/actions/userAction";

const AdminNavbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let Links = [
        // { name: "Cart", link: "/" },
        { name: "Dashboard", link: "/admin/dashboard" },
        { name: "Profile", link: "/account" },
        // { name: "Logout", link: "/logout" },

    ];
    let [open, setOpen] = useState(false);

    function logoutAdmin() {
        dispatch(logout());
        navigate("/")
        // alert.success("Logout Successfully");
    }
    return (

        <nav className='shadow-md w-full  sticky top-0 left-0 z-50 max-sm md:max-md md:mr-0 '>
            <div className='md:flex items-center justify-between bg-orange-100 py-4 md:px-10 px-7 '>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
                text-gray-800'>

                    <a href="">
                        <img className="h-[60px] w-[60px] ml-15px" src={logo} alt={logo} />

                    </a>
                </div>
                <div className=" flex justify-center max-w-md items-center  lg:w-full">
                    <div className=" flex border-[2px] border-solid border-gray-300 rounded-md items-center h-[40px] w-full  ml-2   lg:w-full">
                        < AiOutlineSearch className=" text-gray-500 text-xl  ml-2 " />
                        <input type='text' className="border-none bg-orange-100 outline-none ml-3  lg:w-full " placeholder="Search" />

                    </div>
                </div>

                <div>
                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>

                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-orange-100 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top:8rem ' : 'top-[-490px]'}`}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 font-semibold'>
                                    <div className='bg-orange-300 w-[120px] h-10 text-center rounded-lg pt-1  '>
                                        <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500 '>{link.name}</a>
                                    </div>
                                </li>
                            ))
                        } <div className='bg-orange-300 w-[100px] h-10 text-center rounded-lg pt-1 ml-2 '>
                            <button
                                onClick={() => logoutAdmin()}
                                type="button"

                            >
                                {/* <BiLogOut
                                className="-ml-1 mr-2 h-5 w-5"
                                aria-hidden="true"
                            /> */}
                                <span className='md:ml-5 text-xl md:my-0 my-7 font-semibold'>Logout</span>
                            </button>
                        </div>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default AdminNavbar