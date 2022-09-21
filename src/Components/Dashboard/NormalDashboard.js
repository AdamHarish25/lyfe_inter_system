/* eslint-disable jsx-a11y/anchor-is-valid */
import CircularBar from "../CircularBar/CircularBar"
import AwardedEmployees from "../EmployeeNew/AwardedEmployees"
import Icons from "../Icons"


export function NormalDashboard({ visiblity }) {
    var listsLimit = 5;


    return <div id="normal_dashboard" className={visiblity}>
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
                        {(AwardedEmployees.length > listsLimit) ? AwardedEmployees.slice(listsLimit - 5, listsLimit).map((employee, index) => {
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
                        }) : AwardedEmployees.map((employee, index) => {
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