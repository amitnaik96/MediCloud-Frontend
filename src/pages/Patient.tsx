import React, {useState, useEffect} from 'react';
import DisplayBox from '../components/DisplayBox';
import Heading from "../components/Heading";
import axios from 'axios';
import { useParams } from 'react-router-dom';
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
    useAuthRedirect();
    
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
        axios.get(`http://localhost:3000/patient?id=${id}`, {
            headers : {
                authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).
        then(res => {
            setPatient(res.data.response);
        })
    })

    return <div className='flex justify-center h-screen bg-slate-50'>
        <div className='flex flex-col justify-center'>
            <div className='w-96 border border-slate-300 rounded-lg p-2 bg-white'>
                <Heading label={"Patient details"}/>
                <DisplayBox label={'Name'} display={patient.name}/>
                <DisplayBox label={'Phone number'} display={patient.phoneNo}/>
                <DisplayBox label={'Age'} display={`${patient.details.age}`}/>
                <DisplayBox label={'Blood Group'} display={`${patient.details.bloodGroup}`}/>
                <DisplayBox label={'Weight'} display={`${patient.details.weight}`}/>
                <DisplayBox label={'Married'} display={patient.details.married? "yes" : "no"}/>
                <DisplayBox label={'Insurance'} display={patient.details.insurance? "yes" : "no"}/>
                <DisplayBox label={'Note'} display={patient.details.note}/>
            </div>
        </div>
    </div>
}

export default Patient;