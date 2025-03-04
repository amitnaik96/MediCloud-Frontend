import { useState } from "react";
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';
import { useAuthRedirect } from '../hooks/useAuthRedirect';
import { AddDoctorInterface } from "../types/doctor";
import { ToastContainer, toast } from 'react-toastify';

const AddDoctor = () => {
    useAuthRedirect('isadmin');
    const navigate = useNavigate();

    const [doctor, setDoctor] = useState<AddDoctorInterface>({
        name : "",
        username : "",
        password : "",
        admin : false,
        degree : "",
        specialist : "",
        yoe : 0
    });

    async function handleSubmit(){
        try {
            const response:any = await axios.post(`${BACKEND_URL}/doctor`,{
                ...doctor
            },
            {
                withCredentials : true
            });
            navigate(`/doctor/${response.data.id}`);
        } catch (err) {
            toast.error('Invalid details!');
        }
    }

    function handleChange(e:any){
        const {name, value} = e.target;
        setDoctor((prev) => ({
            ...prev, 
            [name]: value
        }));
    }

    return <div className="flex justify-center h-screen ">
        <div className="flex flex-col justify-center w-full max-w-2xl">
            <div className="px-6 py-6 border border-sky-300 bg-white rounded-md">

                <div className="text-2xl sm:text-3xl text-sky-900 font-bold mb-1">Add Doctor</div>
                <div className="text-xs sm:text-sm text-sky-700 mb-4">Doctor's profile information and credentials</div>

                <div className="mb-2">
                    <div className="text-sm text-sky-900  font-medium text-left py-2">Name</div>
                    <input name="name" onChange={handleChange} type="text" className=" border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                </div>

                <div className="mb-2">
                    <div className="flex">
                        <div className="flex flex-col justify-center mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-sky-900">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <div className="text-sm text-sky-900 font-medium text-left py-2">Email</div>
                    </div>
                    <input name="username" onChange={handleChange} type="text" className="mb-1 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                    <div className="text-xs text-sky-700">This email will be used for login and communications</div>
                </div>

                <div className="mb-2">
                    <div className="text-sm text-sky-900 font-medium text-left py-2">Password</div>
                    <input name="password" onChange={handleChange} type="password" className="border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                    <div className="text-xs text-sky-700">remember credentials for login</div>
                </div>

                <div className="flex w-full mb-2">
                    <div className="mr-4 w-1/2">
                        <div className="flex">
                            <div className="flex flex-col justify-center mr-1">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-sky-900">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                </svg>

                            </div>
                            <div className="text-sm text-sky-900 font-medium text-left py-2">Degree</div>
                        </div>
                        <input name="degree" onChange={handleChange} type="text" className="border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                    </div>
                    <div className="w-1/2">
                        <div className="text-sm font-medium text-left py-2 text-sky-900">Specialist</div>
                        <input name="specialist" onChange={handleChange} type="text" className="border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="text-sm font-medium text-sky-900 text-left py-2">Year of experience</div>
                    <input name="yoe" 
                   onChange={(e: any) => 
                    setDoctor(prev => ({
                      ...prev, 
                      yoe: Number(e.target.value) // Ensure the value is converted to a number
                    }))
                  } 
                    type="number" className="border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                </div>

                <div className="mb-4 flex p-3 border border-sky-300 rounded-md">
                    <div className="flex flex-col justify-center">
                        <input
                            type="checkbox"
                            id="admin-checkbox"
                            className="mr-2 h-4 w-4 border border-sky-400"
                            checked={doctor.admin}
                            onChange={(e) => setDoctor((prev) => ({ ...prev, admin: e.target.checked }))}
                        />
                    </div>
                    <div className="flex">
                        <div className="flex flex-col justify-center mr-2">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-sky-900">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <div >
                            <div className="text-sm text-sky-900 font-medium">Administrator Access</div>
                            <div className="text-xs text-sky-700">This doctor will have administrative privileges to view and add other doctors</div>
                        </div>
                    </div>
                </div>


                <div className="flex w-full">
                    <button onClick={handleSubmit} type="button" className="w-full text-white bg-sky-900 hover:bg-sky-600 focus:outline-none rounded-md text-sm px-4 py-2.5">
                                    <div className='flex justify-center'>
                                    <div className="flex flex-col justify-center mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                        </svg>
                                    </div>
                                    <div >
                                        Save Doctor Details
                                    </div>
                                </div>
                    </button>
                 </div>
            </div>
        </div>
        <ToastContainer position="top-center"/>
   </div>
}

export default AddDoctor;