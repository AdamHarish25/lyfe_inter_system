/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Icons from "../Icons";
import { Link } from "react-router-dom";
import { useRef } from "react";


const EmployeeList = () => {
    const [employees, setEmployee] = useState([]);
    const [search, setSearch] = useState("");
    const [dropdownVal, setDropdownVal] = useState("Position");
    const [openDropdown, setOpenDropdown] = useState(false);
    const dropdown = useRef(null);

    useEffect(() => {
        getEmployee();
    }, []);


    const className = {
        container: `h-256 w-[680px] lg:w-[750px] xl:w-full overflow-y-hidden overflow-x-auto py-0 xl:py-10 relative`,

        headerContainer: "w-fit xl:w-full h-auto px-0 xl:px-6 flex justify-end sticky xl:absolute top-2 inset-x-0",

        searchBarContainer: "w-60 h-12 rounded-lg border px-5 border-gray-400 flex items-center",

        searchBar: "w-full h-10 outline-none bg-transparent",

        searchBarIcon: "h-full flex items-center cursor-default",

        positionDropdownContainer: "w-auto h-auto px-5 group",

        positionDropdown: `cursor-pointer w-48 h-12 px-5 flex justify-between items-center border-gray-500/30 bg-gray-300/30 transform duration-200 ${openDropdown ? "rounded-t-xl border-t-2" : "rounded-xl border-2"}`,

        Dropdown: "w-full h-10 outline-none bg-transparent cursor-pointer",

        dropdownIcon: "h-full flex items-center cursor-pointer",

        positionDropdownMenus: `w-48 space-y-3 h-auto p-5 absolute bg-gray-100 rounded-b-xl ${openDropdown ? "block" : "hidden"} shadow-lg`,

        addEmployeeButton: "h-12 w-48 px-5 flex justify-between text-center items-center rounded-xl text-white bg-[#DB9936]",

        table: `space-y-2 w-full table-fixed xl:block mt-12`,

        th: " w-44 first-of-type:w-28 last-of-type:w-48 font-Poppins font-normal text-[#809FB8] text-xs xl:text-sm",

        onlyTh: "w-52 font-Poppins font-normal text-[#809FB8] text-xs xl:text-sm",

        titleHeader: "flex items-center",

        statusIndicator: "w-28 h-10 grid place-items-center rounded-xl",

        dropDownContainer: "w-36 h-auto group relative",

        dropDownButton: `w-32 rounded-xl px-5 bg-[#F6EFE9] py-2 h-10 border-gray-300 border transform duration-150 flex justify-between group-hover:rounded-t-xl group-hover:rounded-none group-hover:border-b-gray-500 group-hover:w-36`,

        dropDownMenu: `w-36 space-y-2 h-auto z-[100] p-5 rounded-b-xl bg-[#F6EFE9] group-hover:block hidden absolute`,

        dropdownSubmenu: "px-5 hover:bg-gray-300 cursor-pointer rounded-md transform duration-200",

        listBody: "h-20",

        EmID: "w-full flex justify-center text-sm",

        profilePic: "h-10 w-10 rounded-full bg-[#F6EFE9]",
    };

    const getEmployee = async () => {
        const response = await axios.get("http://localhost:7000/Employees");
        setEmployee(response.data);
    };


    const toggleModal = React.useCallback((id) => () => {
        console.log(`${id} Modal toggled`);
    }, []
    )

    var employeeFilter;


    if (search === "" && dropdownVal !== "Position") {
        employeeFilter = employees.filter(emp => {
            return (
                emp.position.toLowerCase().includes(dropdownVal.toLowerCase())
            );
        });
    } else {
        employeeFilter = employees.filter(emp => {
            return (
                emp.name.toLowerCase().includes(search.toLowerCase()) ||
                emp.phone.toString().includes(search.toLowerCase()) ||
                emp.email.toLowerCase().includes(search.toLowerCase()) ||
                emp.joinDate.toLowerCase().includes(search.toLowerCase()) ||
                emp.status.toLowerCase().includes(search.toLowerCase()) ||
                emp.position.toLowerCase().includes(search.toLowerCase()) ||
                emp.division.toLowerCase().includes(search.toLowerCase()) ||
                emp.salary.toLowerCase().includes(search.toLowerCase()) ||
                emp._id.toString().toLowerCase().includes(search.toLowerCase())
            );
        });
    }

    const dropdownMenus = [
        {
            title: "IT Origins"
        },
        {
            title: "Secretary"
        },
        {
            title: "Treasurer"
        },
        {
            title: "HRD"
        }
    ]

    return (
        <div className={className.container}>
            <div className={className.headerContainer}>
                <div className={className.searchBarContainer}>
                    <input type={"text"} value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." className={className.searchBar} />
                    <span className={className.searchBarIcon}>{Icons.search("text-gray-500")}</span>
                </div>
                <div className={className.positionDropdownContainer}>
                    <div ref={dropdown} onClick={() => setOpenDropdown(!openDropdown)} className={className.positionDropdown}>
                        <input type={"text"} disabled={true} value={dropdownVal} onChange={(e) => setDropdownVal(e.target.value)} className={className.Dropdown} />
                        <span className={className.dropdownIcon}>{Icons.downArrow("", "h-4 w-4")}</span>
                    </div>
                    <ul className={className.positionDropdownMenus}>
                        <li onClick={() => {
                            setDropdownVal("Position")
                            setOpenDropdown(!openDropdown)
                        }} className={className.dropdownSubmenu}>...</li>
                        {dropdownMenus.map(menu => (
                            <li onClick={() => {
                                setDropdownVal(menu.title)
                                setOpenDropdown(!openDropdown)
                            }} className={className.dropdownSubmenu}>{menu.title}</li>
                        ))}
                    </ul>
                </div>
                <Link className={className.addEmployeeButton} to="/Employee/AddorEditEmployee">
                    {Icons.plus("", "h-6 w-6")}
                    Add Employee
                </Link>
            </div>
            <table className={className.table}>
                <thead>
                    <tr>
                        <th className={className.th}><p className={className.titleHeader}>Picture</p></th>
                        <th className={className.th}><p className={className.titleHeader}>Name <span>{Icons.upDownArrow()}</span></p></th>
                        <th className={className.th}><p className={className.titleHeader}>Employee Id <span>{Icons.upDownArrow()}</span></p></th>
                        <th className={className.th}><p className={className.titleHeader}>Join Date <span>{Icons.upDownArrow()}</span></p></th>
                        <th className={className.th}><p className={className.titleHeader}>Phone</p></th>
                        <th className={className.onlyTh}><p className={className.titleHeader}>Email <span>{Icons.upDownArrow()}</span></p></th>
                        <th className={className.th}><p className={className.titleHeader}>Status <span>{Icons.upDownArrow()}</span></p></th>
                        <th className={className.th}><p className={className.titleHeader}>Actions</p></th>
                    </tr>
                </thead>
                <tbody>
                    {employeeFilter.slice(0, 8).map(emp => (
                        <tr className={className.listBody} key={emp._id}>
                            <td>
                                <div className={className.profilePic}>

                                </div>
                            </td>
                            <td>{emp.name}</td>
                            <td><p className={className.EmID}>#{emp._id.slice(0, 8)}</p></td>
                            <td>
                                {emp.joinDate}
                            </td>
                            <td>{emp.phone}</td>
                            <td>{emp.email}</td>
                            <td>
                                <div className={`${className.statusIndicator} ${emp.status.toLowerCase() === "Active".toLowerCase() ? "bg-green-500/70 text-green-800" : "bg-red-500/70 text-red-800"}`}>
                                    {emp.status}
                                </div>
                            </td>
                            <td>
                                <div className={className.dropDownContainer}>
                                    <button className={className.dropDownButton}>
                                        Details <span>{Icons.downArrow()}</span>
                                    </button>
                                    <ul className={className.dropDownMenu}>
                                        <li className={className.dropdownSubmenu}><Link to={`AddorEditEmployee/${emp._id}`}>Update</Link></li>
                                        <li onClick={toggleModal(emp._id)} className={className.dropdownSubmenu}>
                                            <Link to={`DeleteEmployee/${emp._id}`}>Delete</Link>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>

            </table>
        </div>
    );
};

export default EmployeeList;




