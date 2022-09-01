import CircularBar from "../CircularBar"
import EmployeeLists from "../EmployeeLists"
import Icons from "../Icons"
import Clock from "react-live-clock";


export function NormalDashboard({ visiblity }) {
    var listsLimit = 5;


    return <div id="normal_dashboard" className={visiblity}>
        <div className="w-full h-auto flex justify-between items-center">
            <div className="h-full text-start w-60">
                <h1 className="text-lg mb-2">Dashboard Overview</h1>
                <h3 className="flex space-x-2 text-gray-400 font-semibold">
                    <span><Clock ticking={true} format={'h:mm A'} /> at <Clock ticking={true} format={'DD MMMM YYYY'} /></span></h3>
            </div>
            <div id="profileSect" className="h-auto w-auto relative group font-SegoeUi">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="User's profile pic" className="cursor-pointer rounded-full h-10 w-10" title="User's Profile"></img>
                <div className={`h-96 w-52 p-5 absolute shadow-md right-2/4 bg-[#F6EFE9] rounded-xl invisible group-hover:visible transform duration-300 ease-in-out opacity-0 group-hover:opacity-100`}>
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
                        <button className="w-full h-10 bg-[#ECA148] text-white rounded-lg text-xs">
                            Edit Profile
                        </button>
                        <button className="w-full h-10 bg-[#ECA148] text-white rounded-lg text-xs">
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className="grid grid-cols-SL gap-5 w-full h-auto py-5">
                <div className="w-auto px-5 h-auto grid grid-row-2 gap-5">
                    <div className="w-auto h-auto grid grid-cols-SL gap-5">
                        <div className="w-64 h-40 bg-[#F6EFE9] rounded-xl p-5">
                            {Icons.creditCard("text-[#DB9936]")}
                            <ul className="list-none space-y-2 py-5">
                                <li className="text-[#809FB8] text-xs">TOTAL INCOME</li>
                                <li className="text-xl font-medium">Rp 23,000,090.00</li>
                            </ul>
                        </div>
                        <div className="w-64 h-40 bg-[#F6EFE9] rounded-xl p-5">
                            {Icons.shoppingCart("text-[#DB9936]")}
                            <ul className="list-none space-y-2 py-5">
                                <li className="text-[#809FB8] text-xs">TOTAL OUTCOME</li>
                                <li className="text-xl font-medium">Rp 14,000,850.00</li>
                            </ul>
                        </div>

                    </div>
                    <div className="w-full h-auto grid grid-cols-3 gap-5">
                        <div className="w-48 2xl:w-64 h-40 bg-[#F6EFE9] rounded-xl p-5">
                            {Icons.user("text-[#809FB8]")}
                            <ul className="list-none space-y-2 py-5">
                                <li className="text-[#809FB8] text-xs">
                                    TOTAL EMPLOYEE
                                </li>
                                <li className="text-xl font-medium">
                                    158
                                </li>
                            </ul>
                        </div>
                        <div className="w-48 2xl:w-64 h-40 bg-[#F6EFE9] rounded-xl p-5">
                            {Icons.chart("text-[#809FB8]")}
                            <ul className="list-none space-y-2 py-5">
                                <li className="text-[#809FB8] text-xs">
                                    TOTAL CUSTOMER
                                </li>
                                <li className="text-xl font-medium">
                                    250
                                </li>
                            </ul>
                        </div>
                        <div className="w-48 2xl:w-64 h-40 bg-[#F6EFE9] rounded-xl p-5">
                            {Icons.suit_case("text-[#809FB8]")}
                            <ul className="list-none space-y-2 py-5">
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

                <div className="w-full h-auto px-0">
                    <div className={`w-full h-full bg-[#F6EFE9] rounded-xl p-5`}>
                        <div className="w-full h-auto text-center font-semibold">
                            Employee of the Year
                        </div>
                        {(EmployeeLists.length > listsLimit) ? EmployeeLists.slice(listsLimit - 5, listsLimit).map((employee, index) => {
                            return <ul className="list-none mt-5 w-full space-y-4">
                                <li>
                                    <div className="w-full h-auto flex items-center text-base justify-around">
                                        <img className="h-9 w-9 rounded-full" src={employee.picture} key={index} alt="Employees Profile Pic" title="Employees Profile Picture" />
                                        <h1 key={index}>{employee.name}</h1>
                                        <p key={index} className="text-[#DB9936] ">
                                            {employee.points} pts
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        }) : EmployeeLists.map((employee, index) => {
                            return <ul className="list-none mt-5 w-full space-y-4">
                                <li>
                                    <div className="w-full h-auto flex items-center text-base justify-around">
                                        <img className="h-9 w-9 rounded-full" src={employee.picture} key={index} alt="Employees Profile Pic" title="Employees Profile Picture" />
                                        <h1 key={index}>{employee.name}</h1>
                                        <p key={index} className="text-[#DB9936] ">
                                            {employee.points} pts
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        })}
                    </div>
                </div>
            </div>

            <div className="w-full h-full grid grid-cols-2 place-items-center gap-10 my-20">
                <div className="w-full h-full rounded-md bg-[#3A36DB] text-white p-7 space-y-10">
                    <div className="w-full flex justify-between items-center">
                        <p>Revenue goal for the this year</p>
                        <a href="#">
                            {Icons.ellipsisHorizontal("text-[#AFADFC]", "h-10 w-10")}
                        </a>
                    </div>
                    <div className="w-full h-auto flex justify-around">
                        <div className="space-y-5">
                            <h1 className="text-2xl 2xl:text-3xl font-light">
                                Rp 150,000,000.00
                            </h1>
                            <div>
                                <p className="text-xs font-light">
                                    You reached
                                </p>
                                <p className="text-xs font-medium">
                                    Rp 65,000,000.00 / Rp 150,000,000.00
                                </p>
                            </div>
                        </div>
                        <div className="w-40 h-40">
                            <CircularBar size={130} indicatorColor="#ffffff" trackColor="#ffffff50" labelColor="#ffffff" progress={68} spinnerMode={false} indicatorWidth={14} />
                        </div>
                    </div>
                </div>

                <div className="w-full h-full rounded-md bg-[#DB7B36] text-white p-7 space-y-10">
                    <div className="w-full flex justify-between items-center">
                        <p>Project goal for the this year</p>
                        <a href="#">
                            {Icons.ellipsisHorizontal("text-[#ECA148]", "h-10 w-10")}
                        </a>
                    </div>
                    <div className="w-full h-auto flex justify-around">
                        <div className="space-y-5">
                            <h1 className="text-2xl 2xl:text-3xl font-light">
                                10
                            </h1>
                            <div>
                                <p className="text-xs font-light">
                                    You reached
                                </p>
                                <p className="text-xs font-medium">
                                    6 / 10
                                </p>
                            </div>
                        </div>
                        <div className="w-40 h-40">
                            <CircularBar size={130} indicatorColor="#ffffff" trackColor="#ffffff50" labelColor="#ffffff" progress={68} spinnerMode={false} indicatorWidth={14} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
}