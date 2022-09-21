import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Icons from "../Icons";
import Pagination from "../Pagination/Pagination";
import './styles.scss';

let PageSize = 10;

const EmployeeList = () => {
    const [employees, setEmployee] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        getEmployee();
    }, []);

    const getEmployee = async () => {
        const response = await axios.get("http://localhost:7000/Employee");
        setEmployee(response.data);
    };


    const deleteEmployee = async (id) => {
        try {
            await axios.delete(`http://localhost:7000/Employee/${id}`);
            getEmployee();
        } catch (error) {
            console.log(error);
        }
    };

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return employees.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, employees]);

    return (
        <div className="w-full h-auto">
            <div className="my-5 space-y-5">
                <div className="flex w-auto h-auto space-x-10">
                    <Link to="add" className="px-5 py-2 bg-green-500 rounded-xl">
                        Add New
                    </Link>
                    <div className="border-2 border-[#D9E1E7] px-4 rounded-xl flex justify-between items-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="outline-none"
                        />
                        <div className='cursor-pointer' >
                            {Icons.magnifierGlass("text-[#99B2C6]")}
                        </div>
                    </div>
                </div>
                <table className="w-full h-auto">
                    <thead>
                        <tr className="border-b-gray-500 border-b">
                            <th>Name</th>
                            <th>Employee Id</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="space-y-3">
                        {
                            employees.map((user, index) => (
                                <tr key={user._id} className="border-b-gray-300 border-b space-y-6 space-x-9">
                                    <td>{user.name}</td>
                                    <td>#{index + 1}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <div className={`px-5 py-2 ${user.status.toLowerCase() === "Active".toLowerCase() ? "bg-green-400" : "bg-red-500"} text-white rounded-xl`}>
                                            {user.status}
                                        </div>
                                    </td>
                                    <td className="grid">
                                        <Link
                                            to={`edit/${user._id}`}
                                            className="px-5 py-2 bg-blue-400 rounded-xl text-center text-white font-Poppins"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => deleteEmployee(user._id)}
                                            className="px-5 py-2 bg-red-500 rounded-xl text-white font-Poppins"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))

                        }
                    </tbody>
                </table>
                <Pagination className="pagination-bar" currentPage={currentPage} totalCount={employees.length} pageSize={PageSize} onPageChange={page => setCurrentPage(page)} />
            </div>
        </div>
    );
};

export default EmployeeList;