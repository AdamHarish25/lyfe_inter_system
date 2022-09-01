/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import AdminDashboard from "./Dashboard/AdminDashboard";
import Icons from "./Icons";

export default function Login({ visibility }) {
    const [isClicked, setClicked] = useState(false);


    return (
        <div className={`${visibility} w-screen overflow-x-hidden overflow-y-auto lg:overflow-y-hidden h-auto lg:h-screen block lg:grid grid-cols-2`}>
            <div className="w-full h-screen grid place-items-center bg-cover bg-center bg-Lines">
                <div className="sm:w-80 md:w-96 lg:w-100 xl:w-110 2xl:w-128 bg-[#F6EFE9] py-20 px-10">
                    <div className="w-full h-auto">
                        <h1 className="text-center text-4xl font-JakartaSans font-semibold">
                            L Y F E
                        </h1>
                        <p className="my-5 text-center text-xl font-Poppins font-medium">
                            Log in to your Account
                        </p>
                    </div>
                    <form className="space-y-7 grid place-items-center py-5">

                        <div className="w-64 h-auto">
                            <label htmlFor={"EMAIL"} className="text-start text-gray-500 font-Poppins">Email Address</label>
                            <input id="EMAIL" type={"email"} className="border border-gray-300 px-2 outline-none bg-transparent h-9 w-full" />
                        </div>

                        <div className="w-64 h-auto">
                            <label htmlFor={"PASS"} className="text-start text-gray-500 font-Poppins">Password</label>
                            <div className="flex border border-gray-300 w-full px-2">
                                <input id="PASS" type={
                                    !isClicked ? ("password") : ("text")
                                } className="border-none outline-none bg-transparent h-9 grow-[2]" />
                                {!isClicked ? (
                                    <button title="Reveal Password" id="eye" className="p-2 rounded-full hover:bg-gray-500/[.15] transform duration-300" type={"button"} onClick={() => setClicked(!isClicked)}>
                                        {Icons.eye()}
                                    </button>
                                ) : (
                                    <button title="Unreveal Password" id="eyeSlash" className="p-2 rounded-full hover:bg-gray-500/[.15] transform duration-300" type={"button"} onClick={() => setClicked(!isClicked)}>
                                        {Icons.eye_slash()}
                                    </button>
                                )
                                }
                            </div>
                        </div>
                        <a href="#" className="font-Poppins text-sm hover:underline">
                            Forgot Password?
                        </a>

                        {/* <button type={"submit"} className="w-64 h-11 rounded-2xl bg-[#6b5747cc] text-sm text-white font-Poppins shadow-lg shadow-transparent hover:shadow-[#00000040]/[.25] transform duration-200">
                        Log in
                    </button> */}


                        <Link to="/home" className="w-64 h-11 grid place-items-center rounded-2xl bg-[#6b5747cc] text-sm text-white font-Poppins shadow-lg shadow-transparent hover:shadow-[#00000040]/[.25] transform duration-200">
                            Log in
                        </Link>
                    </form>
                </div >
            </div >
            <div className="w-full h-auto lg:h-screen bg-LivingRoom bg-cover bg-center hidden lg:block" />
            <Routes>
                <Route path="/home" component={AdminDashboard} />
            </Routes>
        </div >
    );
}