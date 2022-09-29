/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("Active");
    const [salary, setSalary] = useState("");
    const [position, setPosition] = useState("");
    const [division, setDivision] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUserById();
    }, []);

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:7000/Employees/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
        setStatus(response.data.status);
        setSalary(response.data.salary);
        setDivision(response.data.division);
        setPosition(response.data.position);
    };

    const className = {
        ONEinput: "border border-gray-400 rounded-lg px-6 py-3",
        inputSelect: "border border-gray-400 rounded-lg py-3 px-6",
        input: "border border-gray-400 rounded-lg py-3 px-6",
        selectContainer: "h-auto w-auto group",
        selectableOptions: "px-6 shadow-lg rounded-lg py-5 space-y-2 hidden group-hover:block",
        Options: "cursor-pointer px-4 py-2 hover:bg-[#be9b80] hover:text-white rounded-xl transform duration-200",
        container: "w-full h-auto p-5 rounded-xl border border-gray-500",
        inputContainer: "flex justify-center space-x-20",
        ONEinputContainer: "w-full flex justify-center px-5",
        titleContainer: "w-full h-full px-5 font-SegoeUi mb-10 mt-5",
        title: "text-xl",
        form: "space-y-10 my-20",
        buttonContainer: "w-full h-auto flex justify-center pt-10",
        button: "px-20 py-3 bg-[#DB9936] rounded-xl text-sm font-AzoSans text-white",
    }


    const inputPlaceholder = {
        name: "Name",
        email: "Email",
        position: "Position",
        division: "Division",
        salary: "Salary",
        status: "Status",
        phone: "Phone"
    };

    const updateEmployee = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:7000/Employees/${id}`, {
                name,
                email,
                phone,
                status,
                salary,
                division,
                position
            });
            navigate("/Employee/EmployeeLists");
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

    return (
        <div className={className.container}>
            <div className={className.titleContainer}>
                <h1 className={className.title}>Edit Employee</h1>
            </div>

            <form className={className.form} onSubmit={updateEmployee}>
                <div className={className.inputContainer}>
                    <input
                        type={"text"}
                        className={className.input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={inputPlaceholder.name}
                    />
                    <input
                        type={"email"}
                        className={className.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={inputPlaceholder.email}
                    />
                </div>
                <div className={className.inputContainer}>
                    <input
                        type={"text"}
                        className={className.input}
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        placeholder={inputPlaceholder.position}
                    />
                    <input
                        type={"text"}
                        className={className.input}
                        value={division}
                        onChange={(e) => setDivision(e.target.value)}
                        placeholder={inputPlaceholder.division}
                    />
                </div>
                <div className={className.inputContainer}>
                    <div>
                        <input
                            type={"text"}
                            className={className.input}
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                            placeholder={inputPlaceholder.salary}
                        />
                    </div>
                    <div className={className.selectContainer}>
                        <input
                            type={"text"}
                            className={className.inputSelect}
                            value={status}
                            readOnly={true}
                            onChange={(e) => setStatus(e.target.value)}
                            placeholder={inputPlaceholder.status}
                        />
                        <ul className={className.selectableOptions}>
                            <li
                                onClick={() => setStatus("Active")}
                                className={className.Options}>Active</li>
                            <li
                                onClick={() => setStatus("Non-Active")}
                                className={className.Options}
                            >Non-Active</li>
                        </ul>
                    </div>
                </div>
                <div className={className.ONEinputContainer}>
                    <input className={className.ONEinput} type={"number"} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={inputPlaceholder.phone} />
                </div>
                <div className={className.buttonContainer}>
                    <button type={"submit"} className={className.button}>
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditEmployee;