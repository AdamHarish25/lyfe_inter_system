/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const SidebarMenu = ({ item, index }) => {

    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);


    var sideMenuStyle = "w-full h-auto px-5 py-3 rounded-lg text-gray-400 flex space-x-2 font-semibold hover:bg-[#DB9936] hover:text-white transform duration-200 hover:font-normal font-Poppins";

    var dropDownStyle = "w-full h-auto px-5 py-3 rounded-lg text-gray-400 flex space-x-2 font-semibold hover:bg-[#DB9936] hover:text-white transform duration-200 hover:font-normal font-Poppins my-5 ml-3";


    return (
        <>
            <Link key={index} to={item.path} onClick={item.subNav && showSubnav} id="SidebarMenu" className={`${sideMenuStyle} ${window.location.pathname === item.path ? item.color : "text-gray-500 bg-transparent"}`}>
                <div>
                    {item.Icon}
                    {item.title}
                </div>
                <div>
                    {item.subNav && subnav ? "" : item.subNav ? "" : null}
                </div>
            </Link>
            {
                subnav && item.subNav.map((items, index) => {
                    return (
                        <Link to={items.path} key={index} className={`${dropDownStyle} ${window.location.pathname === items.path ? items.color : "text-gray-500 bg-transparent"}`}>
                            {items.Icon}
                            <span>
                                {items.title}
                            </span>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default SidebarMenu