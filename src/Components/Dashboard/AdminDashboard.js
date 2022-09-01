/* eslint-disable jsx-a11y/anchor-is-valid */
import { Dashboard } from "./Dashboard";
import { DashSidebar } from "./DashSidebar";



export default function AdminDashboard({ visibility }) {


    return (
        <div className={`${visibility} w-screen h-auto 2xl:h-screenLg py-5 pr-10 bg-[#f5e4d7] grid-cols-SL gap-5`}>

            <DashSidebar />

            <Dashboard />

        </div>
    );
}
