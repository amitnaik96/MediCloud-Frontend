import React from 'react';
import { Link } from 'react-router-dom';

interface DoctorCardProps {
    name : string;
    username : string;
    to : string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({name, username, to}) => {
    return <Link to={to}>
                <div className="mx-auto group cursor-pointer flex justify-between max-w-[700px] px-6 py-5 border border-sky-300 rounded-md mb-2 hover:shadow-md">
                    <div className="flex">

                        <div className="relative w-10 h-10 overflow-hidden bg-sky-100 rounded-full flex flex-col justify-center mt-1 mr-3">
                            <div className="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                </svg>
                            </div>
                        </div>

                        <div>
                            <div className="flex mb-1">
                                <p className="font-bold text-sky-900 mr-3">{name}</p>
                                <button type="button" className="text-white bg-sky-900 hover:bg-sky-700 focus:outline-none rounded-full text-xs px-4 py-0.1 font-semibold">active</button>
                            </div>
                            <div className="flex">
                                <div className="flex">
                                    <div className="flex flex-col justify-center mr-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 text-sky-900">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div className="text-xs text-sky-600 mr-3">{username}</div>
                                </div>
                                <div className="flex flex-col justify-center text-xs text-sky-900">
                                    <div className="flex">
                                        <div className="flex flex-col justify-center mr-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 text-sky-900">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                            </svg>
                                        </div>
                                        <div className="flex text-sky-600 flex-col justify-center">
                                            Last visit: Dec 13, 2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4 invisible group-hover:visible transition-all"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div> 
                </div>
          </Link>
    
}

export default DoctorCard;