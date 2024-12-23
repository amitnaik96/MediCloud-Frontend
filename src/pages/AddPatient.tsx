import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from '../config';
import useAuthRedirect from '../hooks/useAuthRedirect';

interface AddPatientProps {
    name : string;
    phoneNo : string;
    age : number;
    weight : string;
    bloodGroup : string;
    married : boolean;
    insurance : boolean;
    note : string;
}

const AddPatient = () => {
    useAuthRedirect('me');
    const navigate = useNavigate();

    const [patient, setPatient] = useState<AddPatientProps>({
        name : "",
        phoneNo : "",
        age : 0,
        weight : "",
        bloodGroup : "",
        married : false,
        insurance : false,
        note : ""
    });

    async function handleSubmit(){
        const response = await axios.post(`${BACKEND_URL}/patient`,{
            ...patient
        },{
            withCredentials : true
        });
        navigate(`/patient/${response.data.id}`);
    }

    return <div className="flex justify-center h-screen bg-gradient-to-b from-sky-100 via-white to-sky-5">
        <div className=" flex flex-col justify-center w-full max-w-2xl">
            <div className="mt-20 px-6 py-6 border border-sky-300 bg-white rounded-md">

                <div className="text-2xl sm:text-3xl text-sky-900 font-bold mb-1">Add Patient</div>
                <div className="text-xs sm:text-sm text-sky-700 mb-4">patient's profile information</div>

                <div className="mb-2">
                    <div className="text-sm text-sky-900 font-medium text-left py-2">Name</div>
                    <input onChange={(e:any) => setPatient((prev) => ({...prev, name : e.target.value}))} type="text" className=" border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                </div>

                <div className="mb-2">
                    <div className="flex">
                        <div className="flex flex-col justify-center mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-sky-900">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                        </div>
                        <div className="text-sm font-medium text-left py-2 text-sky-900">Phone number</div>
                    </div>
                    <input onChange={(e:any) => setPatient((prev) => ({...prev, phoneNo : e.target.value}))} type="text" className="mb-1 border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                    <div className="text-xs text-sky-700">This phone no will be used for communication</div>
                </div>

                <div className="flex w-full mb-4">
                    <div className="mr-4 w-1/2">
                        <div className="text-sm text-sky-900 font-medium text-left py-2">Age</div>
                        <input onChange={(e:any) => setPatient((prev) => ({...prev, age : Number(e.target.value)}))} type="number" className="border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                    </div>
                    <div className="w-1/2">
                        <div className="text-sm font-medium text-sky-900 text-left py-2">Blood Group</div>
                        <input onChange={(e:any) => setPatient((prev) => ({...prev, bloodGroup : e.target.value}))} type="text" className="border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                    </div>
                </div>

                <div className="flex w-full">
                    <div className="mr-4 w-1/2">
                        <div className="text-sm text-sky-900 font-medium text-left py-2">Weight(kg)</div>
                        <input onChange={(e:any) => setPatient((prev) => ({...prev, weight : e.target.value}))} type="text" className="border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                    </div>
                    <div className="w-1/2">
                        <div className="text-sm font-medium text-left py-2 text-sky-900">Martial Status</div>
                        <input onChange={(e:any) => setPatient((prev) => (
                            {...prev, 
                                married : e.target.value.toLowerCase() === "yes"? true : false  
                        }))} 
                        type="text" className="mb-1 border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                        <div className="text-xs text-sky-700">Type yes or no</div>
                    </div>
                </div>

                <div className="mb-2">
                    <div className="text-sm font-medium text-left py-2 text-sky-900">Insurance</div>
                    <input onChange={(e:any) => setPatient((prev) => (
                        {...prev, 
                            insurance : e.target.value.toLowerCase() === "yes"? true : false
                        }))}
                    type="text" className="mb-1 border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                    <div className="text-xs text-sky-700">Type yes or no</div>
                </div>

                <div className="mb-4">
                    <div className="text-sm font-medium text-sky-900 text-left py-2">Notes</div>
                    <textarea onChange={(e:any) => setPatient((prev) => ({...prev, note : e.target.value}))} rows={4} className=" block p-2 w-full text-sm text-black  border border-sky-300 rounded-md focus:outline-none"></textarea>
                </div>

                <div className="flex w-full">
                    <button onClick={handleSubmit} type="button" className="w-full text-white bg-sky-900 hover:bg-gray-700 focus:outline-none rounded-md text-sm px-4 py-2.5">
                                    <div className='flex justify-center'>
                                    <div className="flex flex-col justify-center mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                        </svg>
                                    </div>
                                    <div >
                                        Save Patient Details
                                    </div>
                                </div>
                    </button>
                 </div>
            </div>
        </div>
   </div>
}

export default AddPatient;