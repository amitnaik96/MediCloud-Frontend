import React from "react";
import SearchBar from "../components/SearchBar";
import Single from "../components/Single";
import Heading from "../components/Heading";
import axios from 'axios';
import { useState } from 'react';
import useAuthRedirect from '../hooks/useAuthRedirect';

interface PatientInterface {
    id : number;
    name : string;
    phone_no : string; 
}

const Patients: React.FC = () => {
    useAuthRedirect();
    const [patients, setPatients] = useState([]);
    const [filter, setFilter] = useState("");

    // useEffect(() => {
    //     axios.get('http://localhost:3000/patients',
    //         {
    //             headers : {
    //                 authorization : `Bearer ${localStorage.getItem('token')}`
    //             }
    //         }
    //     )
    //     .then(res => {
    //         setPatients(res.data.response);
    //     });
    // },[]);

    async function handleSubmit(e : React.FormEvent) {
        e.preventDefault();
        if(!filter){
            setPatients([]);
            return;
        }
        const res = await axios.get(`http://localhost:3000/filterpatient?filter=${filter}`,{
            headers : {
                authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        if(Array.isArray(res.data.response) && res.data.response.length > 0){
            setPatients(res.data.response);
        }
    }

    return <div className='h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className="w-96">
                <div className="text-center my-2">
                    <Heading label={"Search for Patients"}/>
                </div>
                <SearchBar placeholder={"Enter phone number"} onChange={(e) => setFilter(e.target.value)} handleSubmit={handleSubmit}/>
                {/* <Single label={"Amit"}/> */}
                {
                    patients.map((patient : PatientInterface) => {
                        return <Single key={patient.id} label={`${patient.name} - ${patient.phone_no}`} to={`/patient/${patient.id}`}/> 
                    })
                }
            </div>
        </div>
    </div>
}

export default Patients;