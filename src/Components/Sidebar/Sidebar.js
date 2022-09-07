/* eslint-disable jsx-a11y/anchor-is-valid */
import { SidebarData } from "./SidebarData";
import SidebarMenu from "./SidebarMenu";


const Sidebar = () => {

    return <div id="Sidebar" className="w-60 inset-y-0 p-3 transform">
        <h1 className="text-center text-4xl font-JakartaSans font-medium tracking-wider my-10">
            L Y F E
        </h1>
        <ul className='list-none space-y-5'>
            {SidebarData.map((item, index) => {
                return <li key={index}><SidebarMenu item={item} key={index} /></li>
            })}
        </ul>
    </div>
}

export default Sidebar