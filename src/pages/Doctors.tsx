import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import DoctorCard from "../components/DoctorCard";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../config';
import NoResults from '../components/NoResults';
import useAuthRedirect from '../hooks/useAuthRedirect';
import { DoctorsInterface } from "../types/doctor";


const Doctors: React.FC = () => {
    useAuthRedirect('isadmin');
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([]);
    const [filter, setFilter] = useState("");
    const [present, setPresent] = useState(false);


    useEffect(() => {
        axios.get(`${BACKEND_URL}/doctors`,{
            withCredentials : true
        })
        .then(res => {
            setDoctors(res.data.response);
        });
    }, []);

    async function handleSubmit(e : React.FormEvent) {
        e.preventDefault();
        if(!filter){
            setDoctors([]);
            return;
        }
        const res = await axios.get(`${BACKEND_URL}/filterdoctor?filter=${filter}`,{
            withCredentials : true
        })
        if(Array.isArray(res.data.response) && res.data.response.length > 0){
            setDoctors(res.data.response);
            setPresent(false);
        }
        else{
            setPresent(true);
        }
    }

    //@ts-ignore
    function handleKeyDown(e: React.KeyboardEvent) {
        if (e.key === 'Enter') {
            handleSubmit(e as any); // TypeScript casting
        }
    }

    return <div className='h-screen flex justify-center bg-gradient-to-b from-sky-100 via-white to-sky-5'>
                <div className='flex flex-col justify-center'>
                    <div className="">
                        <div className="sm:flex mb-5">
                            <div className="mr-10">
                                <h1 className="px-3 sm:px-0 text-sky-900 mb-2 text-2xl font-extrabold md:text-2xl lg:text-4xl">
                                    Search for Doctors
                                </h1>
                                <p className="px-3 sm:px-0 text-sky-700 mb-3 text-md lg:text-md">Enter doctor's email to access their medical records securely.</p>
                            </div>
                            <div className="flex flex-col justify-center ml-3 sm:ml-0">
                                <button onClick={() => navigate('/adddoctor')}   type="button" className=" text-white bg-sky-900 hover:bg-sky-700 focus:outline-none rounded-md text-sm px-3 sm:px-4 py-2.5 w-32 sm:w-full">
                                                <div className='flex sm:justify-around'>
                                                <div className="flex flex-col justify-center mr-1 sm:mr-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                    </svg>
                                                </div>
                                                <div className="font-semibold">
                                                    Add Doctor
                                                </div>
                                            </div>
                                        </button>
                            </div>
                        </div>

                        <div className="max-w-[1000px]">
                            <SearchBar placeholder={"Enter doctor's email"} onChange={(e) => setFilter(e.target.value)} handleSubmit={handleSubmit}/>
                        </div>
                        {present? <NoResults/> : 

                            doctors.map((doctor : DoctorsInterface) => {
                                // return <Single key={patient.id} label={`${patient.name} - ${patient.phone_no}`} to={`/patient/${patient.id}`}/> 
                                return <DoctorCard key={doctor.id} name={`Dr. ${doctor.name}`} username={doctor.username} to={`/doctor/${doctor.id}`}/> 
                            })
                        }
                    </div>
                </div>
            </div>
}

export default Doctors;