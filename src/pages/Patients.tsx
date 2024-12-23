import React from "react";
import SearchBar from "../components/SearchBar";
import PatientCard from '../components/PatientCard'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';
import NoResults from '../components/NoResults';
import useAuthRedirect from '../hooks/useAuthRedirect';

interface PatientInterface {
    id : number;
    name : string;
    phone_no : string; 
}

const Patients: React.FC = () => {
    useAuthRedirect('me');
    const navigate = useNavigate();
    const [patients, setPatients] = useState([]);
    const [filter, setFilter] = useState("");
    const [present, setPresent] = useState(false);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/patients`,{
            withCredentials : true
        })
        .then(res => {
            setPatients(res.data.response);
        });
    }, []);

    async function handleSubmit(e : React.FormEvent) {
        e.preventDefault();
        if(!filter){
            setPatients([]);
            return;
        }
        const res = await axios.get(`${BACKEND_URL}/filterpatient?filter=${filter}`,{
            withCredentials : true
        });
        if(Array.isArray(res.data.response) && res.data.response.length > 0){
            setPatients(res.data.response);
        }
        else{
            setPresent(true);
        }
    }

    return <div className='h-screen flex justify-center bg-gradient-to-b from-sky-100 via-white to-sky-5'>
        <div className='flex flex-col justify-center'>
            <div className="">
                <div className="sm:flex mb-5">
                    <div className="mr-10">
                        <h1 className="px-3 sm:px-0 mb-2 text-2xl text-sky-900 font-extrabold md:text-2xl lg:text-4xl">
                            Search for Patients
                        </h1>
                        <p className="px-3 sm:px-0  mb-3 text-md text-sky-700 lg:text-md">Enter a patient's phone number to access their medical records securely.</p>
                    </div>
                    <div className="flex flex-col justify-center ml-3 sm:ml-0">
                        <button onClick={() => navigate('/addpatient')}   type="button" className=" text-white bg-sky-900 hover:bg-sky-700 focus:outline-none rounded-md text-sm px-4 py-2.5 w-40 sm:w-full">
                                        <div className='flex justify-around'>
                                        <div className="flex flex-col justify-center sm:mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                        </div>
                                        <div className="font-semibold">
                                            Add Patient
                                        </div>
                                    </div>
                                </button>
                    </div>
                </div>

                <div className="max-w-[1000px]">
                    <SearchBar placeholder={"Enter patient's phone number"} onChange={(e) => setFilter(e.target.value)} handleSubmit={handleSubmit}/>
                </div>
                {present?  <NoResults />  :
                    patients.map((patient : PatientInterface) => {
                        return <PatientCard key={patient.id} name={patient.name} phoneNo={patient.phone_no} to={`/patient/${patient.id}`}/> 
                    })
                }
            </div>
        </div>
    </div>
}

export default Patients;