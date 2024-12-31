import { Link } from "react-router-dom";
import { BACKEND_URL } from '../config';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return <div>
                <div className="flex justify-between *:px-4 border border-b border-sky-200 bg-gradient-to-b from-sky-100 via-white to-sky-5">
                <div className="flex sm:items-center">
                    <div className="flex flex-col justify-center mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-sky-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                    </div>
                    <Link to={'/'} className="flex flex-col justify-center text-xl font-bold text-sky-900">
                        <div >Medicloud.</div>
                    </Link>
                </div>
                <div className="flex mt-2 mr-3">
                    <Link to={'/signin'} className="mr-2">
                        <button type="button" className="bg-white sm:w-24 text-white hover:bg-slate-100  focus:outline-none border sm:border-sky-500 rounded-md font-medium text-sm px-3 sm:px-5 py-2.5 mb-2">
                            <div className="sm:flex">
                                <div className="flex flex-col justify-center mr-1">   
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-sky-900">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                                    </svg>
                                </div>
                                <div className="hidden sm:block text-sky-900 font-medium">
                                    Login
                                </div>
                            </div>

                        </button>
                    </Link>
                    <div>
                    <button
                    onClick={ async () => {
                        try {
                            await axios.post(`${BACKEND_URL}/signout`,{},{
                                withCredentials : true
                            });
                            toast.success('User logged out');
                            navigate('/');
                        } catch (err) {
                            toast.error('User did not log out');
                        }
                    }}
                    type="button" className=" bg-sky-900 sm:w-24 text-white hover:bg-sky-700 focus:outline-none focus:ring-4  font-medium rounded-md text-sm px-3 sm:pl-4  py-2.5 mb-2">
                            <div className="flex">
                                <div className="flex flex-col justify-center mr-1">   
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                    </svg>

                                </div>
                                <div className="hidden sm:block pr-3">
                                    Logout
                                </div>
                            </div>

                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
    </div> 
    
}

export default Navbar;

