/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Icons from "../Icons";
import { Link } from "react-router-dom";
import { Modal } from "../Components/Modal/Modal";


const EmployeeList = () => {
    const [employees, setEmployee] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        getEmployee();
    }, []);


    const className = {
        container: `h-full w-128 xl:w-full ${openModal ? "overflow-hidden" : "overflow-auto"} py-10`,

        table: `space-y-2 w-full xl:w-fit ${openModal ? "hidden" : "table-fixed xl:block"}`,

        th: " w-44 first-of-type:w-28 last-of-type:w-48 font-Poppins font-normal text-[#809FB8] text-xs xl:text-sm",

        onlyTh: "w-52 font-Poppins font-normal text-[#809FB8] text-xs xl:text-sm",

        titleHeader: "flex items-center",

        statusIndicator: "w-28 h-10 grid place-items-center rounded-xl",

        dropDownContainer: "w-auto h-auto group",

        dropDownButton: `w-32 rounded-xl px-5 bg-[#F6EFE9] py-2 h-10 border-gray-300 border transform duration-150 flex group-hover:rounded-t-xl group-hover:rounded-none group-hover:border-b-gray-500 group-hover:w-40`,

        dropDownMenu: `w-40 space-y-2 h-auto z-40 p-5 rounded-b-xl bg-[#F6EFE9] group-hover:block hidden`,

        dropdownSubmenu: "px-5 hover:bg-gray-300 cursor-pointer rounded-md transform duration-200",


        listBody: "h-20",

        profilePic: "h-10 w-10 rounded-full bg-[#F6EFE9]",
    };

    const getEmployee = async () => {
        const response = await axios.get("http://localhost:7000/Employees");
        setEmployee(response.data);
    };


    const deleteEmployee = async (id) => {
        try {
            await axios.delete(`http://localhost:7000/Employees/${id}`);
            setOpenModal(!openModal)
            getEmployee();
        } catch (error) {
            if (error.response) {
                console.log(error.response);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log(error.message)
            }
        }
    };

    const toggleModal = React.useCallback((id) => () => {
        setOpenModal(!openModal);
        console.log(`${id} Modal toggled`);
    }, []
    )


    return (
        <div className={className.container}>
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
                {employees.slice(0, 10).map((employees, index) => (
                    <>
                        {openModal ? <tr>
                            <td>
                                <Modal key={employees._id} displayModal={"block"} cancelAction={() => { setOpenModal(!openModal) }}
                                    onClickAction={() => deleteEmployee(employees._id)}
                                />
                            </td>
                        </tr> : <tbody>
                            <tr className={className.listBody} key={employees._id}>
                                <td>
                                    <div className={className.profilePic}>

                                    </div>
                                </td>
                                <td>{employees.name}</td>
                                <td>#{index + 1}</td>
                                <td>
                                    {employees.joinDate}
                                </td>
                                <td>{employees.phone}</td>
                                <td>{employees.email}</td>
                                <td>
                                    <div className={`${className.statusIndicator} ${employees.status.toLowerCase() === "Active".toLowerCase() ? "bg-green-500/70 text-green-800" : "bg-red-500/70 text-red-800"}`}>
                                        {employees.status}
                                    </div>
                                </td>
                                <td>
                                    <div className={className.dropDownContainer}>
                                        <button className={className.dropDownButton}>
                                            Details <span>{Icons.downArrow()}</span>
                                        </button>
                                        <ul className={className.dropDownMenu}>
                                            <li className={className.dropdownSubmenu}><Link to={`AddorEditEmployee/${employees._id}`}>Update</Link></li>
                                            <li onClick={toggleModal(employees._id)} className={className.dropdownSubmenu}>Delete</li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        }
                    </>
                ))}
            </table>
        </div>
    );
};

export default EmployeeList;



