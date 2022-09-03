/* eslint-disable jsx-a11y/anchor-is-valid */
import { Dashboard } from "./Dashboard/Dashboard";
import { Sidebar } from "./Sidebar";



export default function AdminDashboard({ visibility }) {


    return (
        <div className={`${visibility} w-auto h-auto py-5 pr-5 bg-[#f5e4d7] grid-cols-SL gap-5`}>

            <Sidebar />

            <Dashboard />

        </div>
    );
}
