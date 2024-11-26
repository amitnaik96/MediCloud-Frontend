import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Single from "../components/Single";
import Heading from "../components/Heading";
import axios from 'axios';
import useAuthRedirect from '../hooks/useAuthRedirect';

interface DoctorInterface {
    id : number;
    name : string;
    username : string;
}

const Doctors: React.FC = () => {
    useAuthRedirect();
    const [doctors, setDoctors] = useState([]);
    const [filter, setFilter] = useState("");

    // useEffect(() => {
    //     axios.get('http://localhost:3000/doctors',{
    //         headers : {
    //             authorization : `Bearer ${localStorage.getItem('token')}`
    //         }
    //     })
    //     .then(res => {
    //         setDoctors(res.data.response);
    //     });
    // }, []);

    async function handleSubmit(e : React.FormEvent) {
        e.preventDefault();
        if(!filter){
            setDoctors([]);
            return;
        }
        const res = await axios.get(`http://localhost:3000/filterdoctor?filter=${filter}`,{
            headers : {
                authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        if(Array.isArray(res.data.response) && res.data.response.length > 0){
            setDoctors(res.data.response);
        }
    }

    return <div className='h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className="w-96">
                <div className="text-center my-2">
                    <Heading label={"Search for Doctors"}/>
                </div>
                <SearchBar placeholder={"Enter email"} onChange={e => setFilter(e.target.value)} handleSubmit={handleSubmit}/>
                {
                    doctors.map((doctor:DoctorInterface) => {
                        return <Single key={doctor.id} label={`${doctor.name}  -  ${doctor.username}`} to={`/doctor/${doctor.id}`}/>
                    })
                }
            </div>
        </div>
    </div>
}

export default Doctors;