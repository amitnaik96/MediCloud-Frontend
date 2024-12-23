import React from 'react';
import { Link } from 'react-router-dom';

interface PatientCardProps {
    name : string;
    phoneNo : string;
    to : string;
}

const PatientCard: React.FC<PatientCardProps> = ({name, phoneNo, to}) => {
    return <Link to={to}>
                <div className="mx-auto group cursor-pointer flex justify-between max-w-[700px] px-6 py-5 border border-sky-300 rounded-md mb-2 hover:shadow-md">
                    <div className="flex">

                        <div className="relative w-10 h-10 overflow-hidden bg-sky-100 rounded-full flex flex-col justify-center mt-1 mr-3">
                            <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>

                            </div>
                        </div>

                        <div>
                            <div className="flex mb-1">
                                <p className="font-bold text-sky-900 mr-3">{name}</p>
                                <button type="button" className="text-white bg-sky-900 focus:outline-none rounded-full text-xs px-4 py-0.1 font-semibold">active</button>
                            </div>
                            <div className="flex">
                                <div className="flex">
                                    <div className="flex flex-col justify-center text-sky-600 mr-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 text-sky-900">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                            </svg>
                                    </div>
                                    <div className="text-xs text-sky-600 mr-3">{phoneNo}</div>
                                </div>
                                <div className="flex flex-col justify-center text-xs text-sky-600">
                                <div className="flex">
                                    <div className="flex flex-col justify-center mr-1 text-sky-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            Last visit: Dec 13, 2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center text-sky-900">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="size-4 invisible group-hover:visible transition-all"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div> 
                </div>
          </Link>
    
}

export default PatientCard;