import React, {useState, useEffect} from 'react';
import DisplayBox from '../components/DisplayBox';
import Heading from "../components/Heading";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useAuthRedirect from '../hooks/useAuthRedirect';

interface DoctorInterface {
    name : string;
    age : number;
    username : string;
    details : {
        degree : string;
        specialist : string;
        yoe : number;
    }
}

const Doctor:React.FC = () => {
    useAuthRedirect();
    const [doctor, setDoctor] = useState<DoctorInterface>({
        name : "",
        age : 0,
        username : "",
        details : {
            degree : "",
            specialist : "",
            yoe : 0
        }
    });
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/doctor?id=${id}`,{
            headers : {
                authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => {
            setDoctor(res.data.response);
        })
    });

    return <div className='flex justify-center h-screen bg-slate-50'>
        <div className='flex flex-col justify-center'>
            <div className='w-96 border border-slate-300 rounded-lg px-4 py-4 bg-white '>
                <Heading label={"Doctor details"}/>
                <DisplayBox label={'Name'} display={doctor.name}/>
                <DisplayBox label={'Username'} display={doctor.username}/>
                <DisplayBox label={'Degree'} display={doctor.details.degree}/>
                <DisplayBox label={'Specialist'} display={doctor.details.specialist}/>
                <DisplayBox label={'Year of Experience'} display={`${doctor.details.yoe}`}/>
            </div>
        </div>
    </div>
}

export default Doctor;