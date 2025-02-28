import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BACKEND_URL } from '../config';
import useAuthRedirect from '../hooks/useAuthRedirect';
import { ToastContainer, toast } from 'react-toastify';
import { PatientProps } from "../types/patient";


const Patient:React.FC = () => {
    useAuthRedirect('me');
    const [patient, setPatient] = useState<PatientProps>({
        name : "",
        phoneNo : "",
        age : 0,
        bloodGroup : "",
        weight : "",
        married : false,
        insurance : false,
        note : ""
    });
    const [originalPatient, setOriginalPatient] = useState<PatientProps | null>(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/patient?id=${id}`,{
            withCredentials : true
        }).
        then(res => {
            setPatient(res.data.response);
            setOriginalPatient(res.data.response);
        })
    }, []);


    function handleChange(e:any){
        const {name, value} = e.target;
        setPatient((prev) => ({
            ...prev, 
            [name]: value
        }));
    }

    async function handleSubmit(e : any){
        e.preventDefault();
        const modifiedPatient:any = {};
        if(originalPatient){
            Object.keys(patient).forEach((key) => {
                const field = key as keyof PatientProps;
                if (patient[field] !== originalPatient[field]) {
                    modifiedPatient[field] = patient[field]; 
                }
            });
        }
        try {
            await axios.put(`${BACKEND_URL}/patient?id=${id}`, modifiedPatient, {
                withCredentials: true
            });
            toast.success("Patient updated!")
        } catch (err) {
            toast.error("Patient didnt update!");
        }
    }


   return <div className="flex justify-center h-screen bg-gradient-to-b from-sky-100 via-white to-sky-5">
        <div className="flex flex-col justify-center w-full max-w-2xl">
            <div className="mt-20 px-6 py-6 border border-sky-300 bg-white rounded-md ">

                <div className="text-2xl sm:text-3xl text-sky-900 font-bold mb-1">Patient Details</div>
                <div className="text-xs sm:text-sm text-sky-700 mb-4">View patient's profile information</div>

                <div className="mb-2">
                    <div className="text-sm text-sky-900 font-medium text-left py-2">Name</div>
                    <input name="name" onChange={handleChange} type="text" defaultValue={patient.name} className=" border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                </div>

                <div className="mb-2">
                    <div className="flex">
                        <div className="flex  flex-col justify-center mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-sky-900">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                        </div>
                        <div className="text-sm text-sky-900 font-medium text-left py-2">Phone number</div>
                    </div>
                    <input name="phoneNo" onChange={handleChange} type="text" defaultValue={patient.phoneNo} className="mb-1 border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                    <div className="text-xs text-gray-500">This phone no will be used for communication</div>
                </div>

                <div className="flex w-full mb-4">
                    <div className="mr-4 w-1/2">
                        <div className="text-sm text-sky-900 font-medium text-left py-2">Age</div>
                        <input name="age" onChange={handleChange} type="number" value={patient.age} className="border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                    </div>
                    <div className="w-1/2">
                        <div className="text-sm text-sky-900 font-medium text-left py-2">Blood Group</div>
                        <input name="bloodGroup" onChange={handleChange} type="text" defaultValue={patient.bloodGroup} className="border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                    </div>
                </div>

                <div className="flex w-full">
                    <div className="mr-4 w-1/2">
                        <div className="text-sky-900 text-sm font-medium text-left py-2">Weight(kg)</div>
                        <input name="weight" onChange={handleChange} type="text" defaultValue={patient.weight} className="border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                    </div>
                    <div className="w-1/2">
                        <div className="text-sky-900 text-sm font-medium text-left py-2">Martial Status</div>
                        <input name="married" onChange={(e:any) => setPatient((prev) => (
                            {...prev, 
                                married : e.target.value.toLowerCase() === "yes"? true : false  
                        }))} type="text" defaultValue={patient.married? "Yes" : "No"} className="border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                        <div className="text-xs text-sky-700">Type yes or no</div>
                    </div>
                </div>

                <div className="mb-2">
                    <div className="text-sky-900 text-sm font-medium text-left py-2">Insurance</div>
                    <input name="insurance" onChange={(e:any) => setPatient((prev) => (
                        {...prev, 
                            insurance : e.target.value.toLowerCase() === "yes"? true : false
                        }))} type="text" defaultValue={patient.insurance? "Yes" : "No"} className="border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                </div>

                <div className="mb-4">
                    <div className="text-sky-900 text-sm font-medium text-left py-2">Notes</div>
                    <textarea name="note" onChange={handleChange} defaultValue={patient.note} rows={4} className=" block p-2 w-full border border-sky-300 rounded-md text-sm text-gray-900 focus:outline-none"></textarea>
                </div>

                <div className="flex w-full">
                    <button onClick={handleSubmit} type="button" className="w-full text-white bg-sky-900 hover:bg-gray-700 focus:outline-none rounded-md text-sm px-4 py-2.5">
                                    <div className='flex justify-center'>
                                    <div className="flex flex-col justify-center mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                        </svg>
                                    </div>
                                    <div >
                                        Update Patient Details
                                    </div>
                                </div>
                    </button>
                 </div>

            </div>
        </div>
        <ToastContainer position="top-center"/>
   </div>
}

export default Patient;