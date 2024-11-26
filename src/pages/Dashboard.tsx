import React from "react"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuthRedirect from '../hooks/useAuthRedirect';

const Dashboard:React.FC = () => {
    useAuthRedirect();
    const navigate = useNavigate();
    
    return <div className='h-screen flex justify-center'>
        <div className='flex flex-col justify-center text-center'>       
                <div>
                <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl">
                    Welcome to MediCloud
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-md sm:px-16 xl:px-48 ">Safeguarding medical data with advanced encryption. Empowering healthcare with secure cloud solutions.</p>
                </div>
                <div className='flex justify-center'>
                    <div className='flex flex-col justify-center'>
                        <div className="pb-4">
                            <button onClick={() => {
                                navigate('/patients')
                            }} type="button" className=" w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                                <div className='flex '>
                                    Patients 
                                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </div>
                            </button>
                        </div>
                        <div>
                        <button onClick={async () => {
                            const response = await axios.post('http://localhost:3000/isadmin',
                                {},
                                {
                                headers : {
                                    authorization : `Bearer ${localStorage.getItem('token')}`
                                }
                            }); 
                            const admin = response.data.admin;
                            if(admin){
                                navigate('/doctors');
                            }
                        }} type="button" className=" w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                                <div className='flex '>
                                    Doctors 
                                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div> 
        </div>
    </div>

}

export default Dashboard;