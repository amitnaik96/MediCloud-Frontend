import React from "react"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { ToastContainer, toast } from 'react-toastify';
import 'animate.css';

const Dashboard:React.FC = () => {
    const navigate = useNavigate();
    
    return  <div className='h-screen flex justify-center'>
                    <div className='w-full flex flex-col justify-center text-center'>  
                        <div>
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#e0f2fe] text-[#0369a1] font-medium text-sm mb-6 animate-fade-in">
            Secure Healthcare Cloud Solutions
          </div>
                            <div className="animate__animated animate__fadeInLeft">
                                <h1 className="text-transparent animate-fade-in mb-2 text-3xl font-extrabold md:text-3xl lg:text-6xl ml-10 px-2 text-left sm:px-0 sm:ml-0 sm:text-center"
                                 style={{ 
                                    background: 'linear-gradient(to right, hsl(210, 40%, 15%), hsl(200, 98%, 39%))',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    animationDelay: '0.1s'
                                  }}>
                                    Welcome to MediCloud.
                                </h1>
                                <p className="mx-auto max-w-[1000px] mb-4 text-md font-normal lg:text-md px-12 sm:px-48 text-sky-700 text-left sm:text-center">Safeguarding medical data with advanced encryption. Empowering healthcare with secure cloud solutions.</p>
                            </div>
                            <div className='flex justify-center'>
                                    <div className="mr-6">
                                        <button onClick={async () => {
                                            try{
                                                await axios.get(`${BACKEND_URL}/me`,
                                                    { withCredentials : true }); 
                                                    navigate('/patients');
                                            } catch (err) {
                                                toast.error('You are not authorized. Please login');
                                            }
                                        }} type="button" className=" w-full text-white bg-sky-900 hover:bg-sky-700 focus:outline-none  rounded-md text-sm px-6 py-2.5 mb-2 ">
                                            <div className='flex '>
                                                Patients 
                                                <div className="flex flex-col justify-center">
                                                <svg className="ml-2 -mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div>
                                    <button onClick={async () => {
                                        try {
                                            await axios.get(`${BACKEND_URL}/isadmin`,
                                                { withCredentials : true }); 
                                                navigate('/doctors');
                                        } catch (err) {
                                            toast.warn("You are not an admin");
                                        }
                                    }} type="button" className=" w-full  bg-white hover:bg-slate-100 focus:outline-none text-sm px-6 py-2.5 me-2 mb-2 border border-sky-600 rounded-md">
                                            <div className='flex text-sky-600'>
                                                Doctors 
                                                <div className="flex flex-col justify-center">
                                                <svg className="ml-2 -mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                            </div> 
                        </div>     
                    </div>
                    <ToastContainer position="top-center"/>
                </div>
    
    

}

export default Dashboard;