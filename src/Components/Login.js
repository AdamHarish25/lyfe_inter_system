/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";

export default function Login() {
    const [isClicked, setClicked] = useState(false);

    return (<div className="w-screen overflow-x-hidden overflow-y-auto lg:overflow-y-hidden h-auto lg:h-screen block lg:grid grid-cols-2">
        <div className="w-full h-screen grid place-items-center bg-LivingRoom bg-cover bg-center lg:bg-none">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </button>
                            ) : (
                                <button title="Unreveal Password" id="eyeSlash" className="p-2 rounded-full hover:bg-gray-500/[.15] transform duration-300" type={"button"} onClick={() => setClicked(!isClicked)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                    </svg>
                                </button>
                            )
                            }
                        </div>
                    </div>
                    <a href="#" className="font-Poppins text-sm hover:underline">
                        Forgot Password?
                    </a>

                    <button type={"submit"} className="w-64 h-11 rounded-2xl bg-[#6b5747cc] text-sm text-white font-Poppins shadow-lg shadow-transparent hover:shadow-[#00000040]/[.25] transform duration-200">
                        Log in
                    </button>

                </form>
            </div >
        </div >
        <div className="w-full h-auto lg:h-screen bg-LivingRoom bg-cover bg-center hidden lg:block">
        </div>
    </div >);
}