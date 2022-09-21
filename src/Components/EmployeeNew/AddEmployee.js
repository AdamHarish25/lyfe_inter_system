import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployees = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("Active");
    const navigate = useNavigate();

    const saveEmployee = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:7000/Employee", {
                name,
                phone,
                email,
                status,
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="w-full h-auto">
            <div className="w-full h-auto">
                <form onSubmit={saveEmployee}>
                    <div className="my-5">
                        <label className="font-Poppins font-bold">Name</label>
                        <div className="border-gray-400 border rounded-lg w-full px-5 py-3">
                            <input
                                type={"text"}
                                className="w-full outline-none"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                            />
                        </div>
                    </div>
                    <div className="my-5">
                        <label className="font-Poppins font-bold">phone</label>
                        <div className="border-gray-400 border rounded-lg w-full px-5 py-3">
                            <input
                                type={"number"}
                                className="w-full outline-none"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="phone"
                            />
                        </div>
                    </div>
                    <div className="my-5">
                        <label className="font-Poppins font-bold">Email</label>
                        <div className="border-gray-400 border rounded-lg w-full px-5 py-3">
                            <input
                                type={"text"}
                                className="w-full outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="my-5">
                        <label className="font-Poppins font-bold">status</label>
                        <div className="border-gray-400 border rounded-lg w-full px-5">
                            <div>
                                <select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className="transform duration-200 p-5 w-full outline-none space-y-5"
                                >
                                    <option value="Active">Active</option>
                                    <option value="Non-Active">Non-Active</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-auto flex justify-center">
                        <button type={"submit"} className="w-40 h-12 text-white bg-green-400 rounded-lg">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEmployees;