/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Icons from '../Icons';
import Table from '../Table/table';
import employeeDetails from './EmployeeData'

export const EmployeeLists = ({ visibility, name, number, email, id, joinDate, status }) => {

    const [search, setSearch] = useState("");

    const [employee, setEmployee] = useState([]);
    const [input, setInput] = useState({ name, number, email, id, joinDate, status });
    console.log("input", input);

    useEffect(() => {
        employeeDetails.allEmployee().then((response) => setEmployee(response.data));
    }, []);



    const handleChange = (e) => {
        setInput((prev) => ([{
            ...input,
            [e.target.name || e.target.email || e.target.number || e.target.id || e.target.joinDate]: e.target.value,
        }]));
    };

    const filteredEmployees = employee.filter((employee) => {
        return (
            employee.name.toLowerCase().includes(search.toLowerCase()) ||
            employee.email.toLowerCase().includes(search.toLowerCase()) ||
            employee.number.toLowerCase().includes(search.toLowerCase()) ||
            employee.joinDate.toLowerCase().includes(search.toLowerCase())
        )
    }); 


    return (
        <div className='w-auto h-auto'>
            <div className='w-auto h-auto space-x-10 flex'>
                <div className="border-2 border-[#D9E1E7] px-4 rounded-xl flex justify-between items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => setSearch(e.target.value)}
                        className="outline-none"
                    />
                    <div className='cursor-pointer' onClick={(e) => setSearch(e.target.value)}>
                        {Icons.magnifierGlass("text-[#99B2C6]")}
                    </div>
                </div>

                <button className='w-40 h-10 rounded-xl bg-[#F1F4F9] flex justify-evenly items-center text-sm'>
                    Position
                    {Icons.downArrow("text-gray-700")}
                </button>
            </div>
            <div className='max-w-4xl h-100 my-10 xl:max-w-6xl'>

            </div>
        </div>)
}