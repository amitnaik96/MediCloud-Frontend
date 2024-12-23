import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BACKEND_URL } from '../config';
import useAuthRedirect from '../hooks/useAuthRedirect';

interface PatientProps {
    name : string;
    phoneNo : string;
    details : {
        age : number;
        bloodGroup : string;
        weight : string;
        married : boolean;
        insurance : boolean;
        note : string;
    }
}

const Patient:React.FC = () => {
    useAuthRedirect('me');
    const [patient, setPatient] = useState<PatientProps>({
        name : "",
        phoneNo : "",
        details : {
            age : 0,
            bloodGroup : "",
            weight : "",
            married : false,
            insurance : false,
            note : ""
        }
    });
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/patient?id=${id}`,{
            withCredentials : true
        }).
        then(res => {
            setPatient(res.data.response);
        })
    }, []);

   return <div className="flex justify-center h-screen bg-gradient-to-b from-sky-100 via-white to-sky-5">
        <div className="flex flex-col justify-center w-full max-w-2xl">
            <div className="px-6 py-6 border border-sky-300 bg-white rounded-md ">

                <div className="text-2xl sm:text-3xl text-sky-900 font-bold mb-1">Patient Details</div>
                <div className="text-xs sm:text-sm text-sky-700 mb-4">View patient's profile information</div>

                <div className="mb-2">
                    <div className="text-sm text-sky-900 font-medium text-left py-2">Name</div>
                    <input type="text" defaultValue={patient.name} className=" border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                </div>

                <div className="mb-2">
                    <div className="flex">
                        <div className="flex  flex-col justify-center mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-sky-900">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                        </div>
                        <div className="text-sm text-sky-900 font-medium text-left py-2">Phone number</div>
                    </div>
                    <input type="text" defaultValue={patient.phoneNo} className="mb-1 border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                    <div className="text-xs text-gray-500">This phone no will be used for communication</div>
                </div>

                <div className="flex w-full mb-4">
                    <div className="mr-4 w-1/2">
                        <div className="text-sm text-sky-900 font-medium text-left py-2">Age</div>
                        <input type="text" defaultValue={patient.details.age} className="border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                    </div>
                    <div className="w-1/2">
                        <div className="text-sm text-sky-900 font-medium text-left py-2">Blood Group</div>
                        <input type="text" defaultValue={patient.details.bloodGroup} className="border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                    </div>
                </div>

                <div className="flex w-full">
                    <div className="mr-4 w-1/2">
                        <div className="text-sky-900 text-sm font-medium text-left py-2">Weight(kg)</div>
                        <input type="text" defaultValue={patient.details.weight} className="border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                    </div>
                    <div className="w-1/2">
                        <div className="text-sky-900 text-sm font-medium text-left py-2">Martial Status</div>
                        <input type="text" defaultValue={patient.details.married? "Yes" : "No"} className="border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                    </div>
                </div>

                <div className="mb-2">
                    <div className="text-sky-900 text-sm font-medium text-left py-2">Insurance</div>
                    <input type="text" defaultValue={patient.details.insurance? "Yes" : "No"} className="border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                </div>

                <div className="">
                    <div className="text-sky-900 text-sm font-medium text-left py-2">Notes</div>
                    <textarea defaultValue={patient.details.note} rows={4} className=" block p-2 w-full border border-sky-300 rounded-md text-sm text-gray-900 focus:outline-none"></textarea>
                </div>
            </div>
        </div>
   </div>
}

export default Patient;