import { useState } from "react";
import { Link } from "react-router-dom"

const SidebarMenu = ({ item }) => {

    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    var sideMenuStyle = "w-full h-auto px-5 py-3 rounded-lg text-gray-400 flex space-x-2 font-semibold hover:bg-[#DB9936] hover:text-white transform duration-200 hover:font-normal font-Poppins";

    var dropDownStyle = "w-full h-auto px-5 py-3 rounded-lg text-gray-400 flex space-x-2 font-semibold hover:bg-[#DB9936] hover:text-white transform duration-200 hover:font-normal font-Poppins my-5 ml-3"

    return (
        <>
            <Link to={item.path} onClick={item.subNav && showSubnav} id="SidebarMenu" className={sideMenuStyle}>
                <div>
                    {item.Icon}
                    <span>
                        {item.title}
                    </span>
                </div>
                <div>
                    {item.subNav && subnav ? item.IconOpened : item.subNav ? item.IconClosed : null}
                </div>
            </Link>
            {
                subnav && item.subNav.map((items, index) => {
                    return (
                        <Link to={items.path} key={index} className={dropDownStyle}>
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