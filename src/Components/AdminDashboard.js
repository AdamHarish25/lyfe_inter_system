/* eslint-disable jsx-a11y/anchor-is-valid */
import Icons from "./Icons";

export default function AdminDashboard({ visibility }) {

    var today = new Date()
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function clock() {
        var hour = today.getHours();
        var min = today.getMinutes();

        var dateRaw = today.getDate();
        var month = monthNames[today.getMonth()];
        var year = today.getFullYear();

        var AmPm = hour >= 12 ? "PM" : "AM";

        hour = hour % 12;

        hour = hour ? hour : 12;

        min = min < 10 ? '0' + min : min;

        var time = hour + ':' + min + " " + AmPm

        var date = dateRaw + ' ' + month + ' ' + year;

        var result = time + " at " + date;

        return result;
    }

    setInterval(clock, 1000);




    var clockDisplay = clock().toString();

    return (
        <div className={`${visibility} w-screen h-screen py-10 pr-10 bg-[#f5e4d7] grid-cols-SL gap-5`}>
            <div id="Sidebar" className="w-60 inset-y-0 p-3">
                <h1 className="text-center text-4xl font-JakartaSans font-medium tracking-wider my-10">
                    L Y F E
                </h1>
                <ul className='list-none space-y-5'>
                    <li>
                        <a href="#" className="w-full h-auto px-5 py-3 rounded-lg bg-[#DB9936] text-white flex space-x-2">
                            {Icons.Dashboard}
                            <span className="font-Poppins">
                                Dashboard
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="w-full h-auto px-5 py-3 rounded-lg text-gray-400 flex space-x-2 font-semibold hover:bg-[#DB9936] hover:text-white transform duration-200 hover:font-normal">
                            {Icons.user}
                            <span className="font-Poppins">
                                Employee
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="w-full h-auto px-5 py-3 rounded-lg text-gray-400 flex space-x-2 font-semibold hover:bg-[#DB9936] hover:text-white transform duration-200 hover:font-normal">
                            {Icons.chart}
                            <span className="font-Poppins">
                                Customer
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="w-full h-auto px-5 py-3 rounded-lg text-gray-400 flex space-x-2 font-semibold hover:bg-[#DB9936] hover:text-white transform duration-200 hover:font-normal">
                            {Icons.suit_case}
                            <span className="font-Poppins">
                                Vendor
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="w-full h-full bg-white rounded-2xl p-7">
                <div className="w-full h-auto flex justify-between items-center">
                    <div className="h-full text-start w-56">
                        <h1 className="text-lg font-Poppins font-semibold mb-2">Dashboard Overview</h1>
                        <h3 className="flex space-x-2 font-Poppins text-gray-400 font-semibold">{clockDisplay}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
