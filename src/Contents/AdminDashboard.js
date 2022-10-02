/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Routes, useNavigate } from 'react-router-dom'
import Clock from "react-live-clock";
import { locationRoutes } from "./Components/Routes";



export default function AdminDashboard({ visibility }) {

    var autoReload = useNavigate(0);

    var title, containerHeight, innerContainerStyle;

    const pathName = window.location.pathname;


    if (pathName === "/") {
        title = "Dashboard Overview";
        containerHeight = "h-fit";
        innerContainerStyle = "";
    } else if (pathName === "/Employee/EmployeeLists") {
        title = "/Employees/ListEmployee"
        containerHeight = "h-[165vh]"
        innerContainerStyle = "flex justify-center items-start";
    } else if (pathName === "/Employee/AddorEditEmployee") {
        title = "/Employees/AddNewEmployee"
        containerHeight = "h-screenXL"
        innerContainerStyle = "flex justify-center items-center xl:items-start";
    } else if (pathName === "/Customer") {
        title = "/Customer"
        containerHeight = "h-screenXL"
        innerContainerStyle = "";
    } else if (pathName === "/Vendor") {
        title = "/Vendor"
        containerHeight = "h-screenXL"
        innerContainerStyle = "";
    } else {
        title = "/Employees/EditEmployee"
        containerHeight = "h-screenXL"
        innerContainerStyle = "flex justify-center items-center xl:items-start";
    }

    const className = {
        container: `${visibility} ${containerHeight} w-auto xl:h-screenXL overflow-y-hidden py-5 pr-5 bg-[#f5e4d7] grid-cols-SL gap-5`,
        compContainer: "w-full h-auto bg-white rounded-2xl p-10 font-AzoSans",
        headerContainer: "w-full h-auto flex justify-between items-center mb-5",
        titleContainer: "h-full text-start w-72 space-y-1",
        title: "font-Poppins text-lg",
        liveClock: "flex space-x-2 text-gray-400 font-semibold",
        profileContainer: "h-auto w-auto relative group font-SegoeUi",
        profPicSmall: "cursor-pointer rounded-full h-10 w-10",
        popUpProfile: "h-[400px] w-52 p-5 absolute z-50 shadow-md right-2/4 bg-[#F6EFE9] rounded-xl invisible group-hover:visible transform duration-300 ease-in-out opacity-0 group-hover:opacity-100",
        profileTitle: "w-full h-auto",
        userInfoContainer: "my-3 text-center space-y-1 py-2",
        profPicContainer: "w-full h-auto flex justify-center",
        profPicBig: "h-16 w-16 rounded-full",
        usersName: "text-lg",
        usersRole: "text-sm font-medium text-blue-600",
        usersPointContainer: "my-4 text-center space-y-1",
        titleUsersPoint: "text-gray-400 text-xs",
        usersPoint: "text-xl font-medium",
        buttonsContainer: "w-full h-auto my-5 px-5 space-y-1",
        editProfButton: "w-full block h-10 bg-[#ECA148] text-white rounded-lg text-xs",
        logOutProfButton: "w-full block h-10 bg-[#ECA148] text-white rounded-lg text-xs",
        routesContainer: `w-full h-full ${innerContainerStyle}`,
    }


    return (
        <div className={className.container}>
            <Sidebar />

            <div className={className.compContainer}>
                <div className={className.headerContainer}>
                    <div className={className.titleContainer}>
                        <h1 className={className.title}>
                            {title}
                        </h1>
                        <h3 className={className.liveClock}>
                            <span><Clock ticking={true} format={'h:mm A'} /> at <Clock ticking={true} format={'DD MMMM YYYY'} /></span>
                        </h3>
                    </div>
                    <div id="profileSect" className={className.profileContainer}>

                        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            alt="User's profile pic"
                            className={className.profPicSmall}
                            title="User's Profile"
                        />


                        <div className={className.popUpProfile}>
                            <div className={className.profileTitle}>Profile</div>
                            <div className={className.userInfoContainer}>
                                <div className={className.profPicContainer}>
                                    <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                        alt="Profile"
                                        className={className.profPicBig}
                                    />
                                </div>
                                <p className={className.usersName}>Peter Robins</p>
                                <p className={className.usersRole}>Admin</p>
                            </div>
                            <div className={className.usersPointContainer}>
                                <p className={className.titleUsersPoint}>
                                    Total Points
                                </p>
                                <p className={className.usersPoint}>152,543 pts</p>
                            </div>
                            <div className={className.buttonsContainer}>
                                <button className={className.editProfButton}>
                                    Edit Profile
                                </button>
                                <button className={className.logOutProfButton}>
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={className.routesContainer}>
                    <Routes>
                        {locationRoutes.map((routes, index) => {
                            return <Route key={index} path={routes.path} element={routes.element} />
                        })}
                    </Routes>
                </div>
            </div>
        </div >
    );
}
