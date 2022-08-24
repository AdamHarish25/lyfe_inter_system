/* eslint-disable jsx-a11y/anchor-is-valid */
import Icons from "./Icons";
import Clock from "react-live-clock";

export default function AdminDashboard({ visibility }) {

    return (
        <div className={`${visibility} w-screen h-auto xl:h-screen py-10 pr-10 bg-[#f5e4d7] grid-cols-SL gap-5`}>
            <div id="Sidebar" className="w-60 inset-y-0 p-3">
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
            <div id="Dashboard" className="w-full h-full bg-white rounded-2xl p-7">
                <div className="w-full h-auto flex justify-between items-center">
                    <div className="h-full text-start w-56">
                        <h1 className="text-lg font-Poppins font-semibold mb-2">Dashboard Overview</h1>
                        <h3 className="flex space-x-2 font-Poppins text-gray-400 font-semibold">
                            <span><Clock ticking={true} format={'h:mm A'} /> at <Clock ticking={true} format={'DD MMMM YYYY'} /></span></h3>
                    </div>
                    <div id="profilePic" className="h-10 w-10 rounded-full">
                        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="User's profile pic" className="object-cover object-center cursor-pointer rounded-full" title="User's Profile"></img>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-1 xl:grid-cols-SL gap-5 w-auto xl:w-full h-auto py-7 xl:py-5">
                        <div className="w-auto px-5 h-auto grid grid-row-2 gap-5">
                            <div className="w-auto h-auto grid grid-cols-2 xl:grid-cols-SL gap-5">
                                <div className="h-auto w-auto xl:w-64 xl:h-40 bg-[#F6EFE9] rounded-xl p-5">
                                    {Icons.creditCard("text-[#DB9936]")}
                                    <ul className="list-none space-y-2 py-5 font-Poppins">
                                        <li className="text-[#809FB8] text-xs">TOTAL INCOME</li>
                                        <li className="text-xl font-medium">Rp 23,000,090.00</li>
                                    </ul>
                                </div>
                                <div className="h-auto w-auto xl:w-64 xl:h-40 bg-[#F6EFE9] rounded-xl p-5">
                                    {Icons.shoppingCart("text-[#DB9936]")}
                                    <ul className="list-none space-y-2 py-5 font-Poppins">
                                        <li className="text-[#809FB8] text-xs">TOTAL OUTCOME</li>
                                        <li className="text-xl font-medium">Rp 14,000,850.00</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="w-full h-auto grid grid-cols-3 gap-5">
                                <div className="h-auto w-auto xl:w-48 2xl:w-64 xl:h-40 bg-[#F6EFE9] rounded-xl p-5">
                                    {Icons.user("text-[#809FB8]")}
                                    <ul className="list-none space-y-2 py-5 font-Poppins">
                                        <li className="text-[#809FB8] text-xs">
                                            TOTAL EMPLOYEE
                                        </li>
                                        <li className="text-xl font-medium">
                                            158
                                        </li>
                                    </ul>
                                </div>
                                <div className="h-auto w-auto xl:w-48 2xl:w-64 xl:h-40 bg-[#F6EFE9] rounded-xl p-5">
                                    {Icons.chart("text-[#809FB8]")}
                                    <ul className="list-none space-y-2 py-5 font-Poppins">
                                        <li className="text-[#809FB8] text-xs">
                                            TOTAL CUSTOMER
                                        </li>
                                        <li className="text-xl font-medium">
                                            250
                                        </li>
                                    </ul>
                                </div>
                                <div className="h-auto w-auto xl:w-48 2xl:w-64 xl:h-40 bg-[#F6EFE9] rounded-xl p-5">
                                    {Icons.suit_case("text-[#809FB8]")}
                                    <ul className="list-none space-y-2 py-5 font-Poppins">
                                        <li className="text-[#809FB8] text-xs">
                                            TOTAL VENDOR
                                        </li>
                                        <li className="text-xl font-medium">
                                            250
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="w-full h-auto px-5 xl:px-0">
                            <div className="w-auto xl:w-full h-full bg-[#F6EFE9] rounded-xl p-5">
                                <div className="w-full h-auto font-Poppins text-center font-semibold">
                                    Employee of the Year
                                </div>
                                <ul className="list-none mt-5 h-auto w-full space-y-4 font-Poppins overflow-auto">
                                    <li>
                                        <div className="w-full h-auto flex space-x-10 xl:space-x-5 items-center text-sm xl:text-xs justify-center">
                                            <img className="h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=441&q=80" alt="Employees Profile Pic" title="Employees Profile Picture" />
                                            <h1 className="flex">Sarah Kidman</h1>
                                            <p className="text-[#DB9936] ">
                                                50.000 pts
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="w-full h-auto flex space-x-10 xl:space-x-5 items-center text-sm xl:text-xs justify-center">
                                            <img className="h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=441&q=80" alt="Employees Profile Pic" title="Employees Profile Picture" />
                                            <h1 className="flex">Sarah Kidman</h1>
                                            <p className="text-[#DB9936] ">
                                                42.000 pts
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="w-full h-auto flex space-x-10 xl:space-x-5 items-center text-sm xl:text-xs justify-center">
                                            <img className="h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=441&q=80" alt="Employees Profile Pic" title="Employees Profile Picture" />
                                            <h1 className="flex">Sarah Kidman</h1>
                                            <p className="text-[#DB9936] ">
                                                39.000 pts
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="w-full h-auto flex space-x-10 xl:space-x-5 items-center text-sm xl:text-xs justify-center">
                                            <img className="h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=441&q=80" alt="Employees Profile Pic" title="Employees Profile Picture" />
                                            <h1 className="flex">Sarah Kidman</h1>
                                            <p className="text-[#DB9936] ">
                                                27.000 pts
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="w-full h-auto flex space-x-10 xl:space-x-5 items-center text-sm xl:text-xs justify-center">
                                            <img className="h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=441&q=80" alt="Employees Profile Pic" title="Employees Profile Picture" />
                                            <h1 className="flex">Sarah Kidman</h1>
                                            <p className="text-[#DB9936] ">
                                                19.000 pts
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
