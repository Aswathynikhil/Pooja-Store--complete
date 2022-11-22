// import React from "react";



// import { AiFillCaretDown } from "react-icons/ai";
// import { FcExpand } from "react-icons/fc";
// import { MdImportExport } from "react-icons/md";
// import { MdDashboardCustomize, MdProductionQuantityLimits } from "react-icons/md";






import React, { useState } from "react";
import button from "../../../assets/button.png"
 import { Link } from "react-router-dom";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Products", src: "product", route:"/admin/products_list" },
        { title: "Add Products", src:"add-product", route:"/add_product" },
        { title: "Category ", src: "category", gap: true, route:"/categoryList" },
        { title: "Add Category", src: "add_category", route:"/add_category" },
        { title: "Gallery Images", src: "image", gap: true, route:"/gallery_images"},
        { title: "Add Gallery Images ", src: "add-image", route: "/add_galleryImage" },
        { title: "Banner Images", src: "image", gap: true, route: "/banner_images" },
        { title: "Add Banner Images ", src: "add-image", route: "/add_banner" },
        { title: "Users", src: "user", route: "/users" },
        { title: "Order List", src: "order", route: "/orderlist" },
    ];

    return (
        <div className="flex">
            <div
                className={` ${open ? "w-40" : "w-20 "
                    } bg-white h-screen p-5  pt-8 relative duration-300`}
            >
                <img
                    src={button}

                    //src={"./src/image/category.png"}
                    className={`absolute cursor-pointer -right-3 top-9 w-7
           border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                {/* <div className="flex gap-x-4 items-center">
                    <img
                        src="./src/assets/logo.png"
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                            }`}
                    />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Designer
                    </h1>
                </div> */}
                <ul className="pt-6 w-[250px]">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                                } `}
                        >
                           
                            <img
                                src={require(`../../../assets/${Menu.src}.png`)}
                                // src={require(`../../../image/${Menu.src}.png`)}
                                className="h-6 w-6 fill-white"
                            />
                           
                                <a href={Menu.route} className={`${!open && "hidden"} origin-left duration-200 font-bold `}>
                                {Menu.title}
                            </a>
                           
                        </li>
                    ))}
                </ul>
            </div>
            <div className="h-screen flex-1 p-7 bg-white border-n">
                <h1 className="text-2xl font-semibold ">Dashboard</h1>
            </div>
        </div>
    );
};
export default Sidebar;




