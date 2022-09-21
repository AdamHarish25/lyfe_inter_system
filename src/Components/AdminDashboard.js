/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Dashboard } from "./Dashboard/Dashboard";
import Sidebar from "./Sidebar/Sidebar";
import { Route, Routes } from 'react-router-dom'
import Clock from "react-live-clock";
import { SidebarData } from "./Sidebar/SidebarData";
import AddEmployee from "./EmployeeLists/AddEmployee";
import EmployeeList from "./EmployeeNew/EmployeeList";
import AddEmployees from "./EmployeeNew/AddEmployee";
import EditEmployee from "./EmployeeNew/EditEmployee";





export default function AdminDashboard({ visibility }) {

    return (
        <div className={`${visibility} w-auto h-auto xl:h-screenXL py-5 pr-5 bg-[#f5e4d7] grid-cols-SL gap-5`}>
            <Sidebar />

            <div className="w-full h-full bg-white rounded-2xl p-10 font-AzoSans">
                <div className="w-full h-auto flex justify-between items-center mb-5">
                    <div className="h-full text-start w-72">
                        {SidebarData.map((item, index) => {
                            for (let i = 0; i < index + 1; i++) {
                                if (window.location.pathname === item.path) {
                                    return <h1 key={index} className="text-lg mb-2">{item.titleOver}</h1>
                                }
                            }
                        })}
                        <h3 className="flex space-x-2 text-gray-400 font-semibold">
                            <span><Clock ticking={true} format={'h:mm A'} /> at <Clock ticking={true} format={'DD MMMM YYYY'} /></span></h3>
                    </div>
                    <div id="profileSect" className="h-auto w-auto relative group font-SegoeUi">
                        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="User's profile pic" className="cursor-pointer rounded-full h-10 w-10" title="User's Profile"></img>
                        <div className={`h-[400px] w-52 p-5 absolute z-50 shadow-md right-2/4 bg-[#F6EFE9] rounded-xl invisible group-hover:visible transform duration-300 ease-in-out opacity-0 group-hover:opacity-100`}>
                            <div className="w-full h-auto">Profile</div>
                            <div className="my-3 text-center space-y-1 py-2">
                                <div className="w-full h-auto flex justify-center">
                                    <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Profile" className="h-16 w-16 rounded-full" />
                                </div>
                                <p className="text-lg">Peter Robins</p>
                                <p className="text-sm font-medium text-blue-600">Admin</p>
                            </div>
                            <div className="my-4 text-center space-y-1">
                                <p className="text-gray-400 text-xs">
                                    Total Points
                                </p>
                                <p className="text-xl font-medium">152,543 pts</p>
                            </div>
                            <div className="w-full h-auto my-5 px-5 space-y-1">
                                <button className="w-full block h-10 bg-[#ECA148] text-white rounded-lg text-xs">
                                    Edit Profile
                                </button>
                                <button className="w-full block h-10 bg-[#ECA148] text-white rounded-lg text-xs">
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Routes>
                        <Route path="/" exact element={<Dashboard />} />
                        <Route path="/Dashboard" element={<Dashboard />} />
                        <Route path="/Employees" element={<EmployeeList />} />
                        <Route path="/Employees/EmployeeLists" element={<EmployeeList />} />
                        <Route path="/Employees/AddEmployee" element={<AddEmployees />} />
                        <Route path="add" element={<AddEmployees />} />
                        <Route path="edit/:id" element={<EditEmployee />} />
                        {/* <Route path="/" element={<EmployeeList />} />
                        <Route path="add" element={<AddEmployees />} />
                        <Route path="edit/:id" element={<EditEmployee />} /> */}
                    </Routes>
                </div>
            </div>
        </div>
    );
}
