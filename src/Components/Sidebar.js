/* eslint-disable jsx-a11y/anchor-is-valid */
import Icons from "./Icons";


export function Sidebar() {
    return <div id="Sidebar" className="w-60 inset-y-0 p-3">
        <h1 className="text-center text-4xl font-JakartaSans font-medium tracking-wider my-10">
            L Y F E
        </h1>
        <ul className='list-none space-y-5'>
            <li>
                <a href="#" className="w-full h-auto px-5 py-3 rounded-lg bg-[#DB9936] text-white flex space-x-2">
                    {Icons.Dashboard()}
                    <span className="font-Poppins">
                        Dashboard
                    </span>
                </a>
            </li>
            <li>
                <a href="#" className="w-full h-auto px-5 py-3 rounded-lg text-gray-400 flex space-x-2 font-semibold hover:bg-[#DB9936] hover:text-white transform duration-200 hover:font-normal">
                    {Icons.user()}
                    <span className="font-Poppins">
                        Employee
                    </span>
                </a>
            </li>
            <li>
                <a href="#" className="w-full h-auto px-5 py-3 rounded-lg text-gray-400 flex space-x-2 font-semibold hover:bg-[#DB9936] hover:text-white transform duration-200 hover:font-normal">
                    {Icons.chart()}
                    <span className="font-Poppins">
                        Customer
                    </span>
                </a>
            </li>
            <li>
                <a href="#" className="w-full h-auto px-5 py-3 rounded-lg text-gray-400 flex space-x-2 font-semibold hover:bg-[#DB9936] hover:text-white transform duration-200 hover:font-normal">
                    {Icons.suit_case()}
                    <span className="font-Poppins">
                        Vendor
                    </span>
                </a>
            </li>
        </ul>
    </div>
}