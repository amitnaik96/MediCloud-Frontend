import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BACKEND_URL } from '../config';
import useAuthRedirect from '../hooks/useAuthRedirect';
import { DoctorInterface } from "../types/doctor";

const Doctor:React.FC = () => {
    useAuthRedirect('isadmin');
    const [doctor, setDoctor] = useState<DoctorInterface>({
        name : "",
        username : "",
        degree : "",
        specialist : "",
        yoe : 0
    });
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/doctor?id=${id}`,{
            withCredentials : true
        })
        .then(res => {
            setDoctor(res.data.response);
        })
    }, []);

    return <div className="flex justify-center h-screen bg-gradient-to-b from-sky-100 via-white to-sky-5">
        {doctor.yoe}
        <div className="flex flex-col justify-center w-full max-w-2xl">
            <div className="px-6 py-6 border border-sky-300 bg-white rounded-md">

                <div className="text-2xl sm:text-3xl text-sky-900 font-bold mb-1">Doctor Details</div>
                <div className="text-sm sm:text-xs text-sky-700 mb-4">View doctor's profile information</div>

                <div className="mb-2">
                    <div className="text-sm text-sky-900 font-medium text-left py-2">Name</div>
                    <input readOnly type="text" defaultValue={doctor.name} className=" border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                </div>

                <div className="mb-2">
                    <div className="flex">
                        <div className="flex flex-col justify-center mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-sky-900">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <div className="text-sm text-sky-900 font-medium text-left py-2">Email</div>
                    </div>
                    <input readOnly type="text" defaultValue={doctor.username} className="mb-1 border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                    <div className="text-xs text-sky-700">This email will be used for login and communications</div>
                </div>

                <div className="flex w-full mb-4">
                    <div className="mr-4 w-1/2">
                        <div className="flex">
                            <div className="flex flex-col justify-center mr-1">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-sky-900">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                </svg>

                            </div>
                            <div className="text-sm text-sky-900 font-medium text-left py-2">Degree</div>
                        </div>
                        <input readOnly type="text" defaultValue={doctor.degree} className="border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                    </div>
                    <div className="w-1/2">
                        <div className="text-sky-900 text-sm font-medium text-left py-2">Specialist</div>
                        <input readOnly type="text" defaultValue={doctor.specialist} className="border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                    </div>
                </div>

                <div className="mb-2">
                    <div className="text-sky-900 text-sm font-medium text-left py-2">Year of experience</div>
                    <input readOnly type="text" defaultValue={String(doctor.yoe)} className="border border-sky-300 text-gray-900 text-sm rounded-md block w-full p-2 focus:outline-none"/>
                </div>
            </div>
        </div>
   </div>
}

export default Doctor;