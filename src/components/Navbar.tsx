import { Link } from "react-router-dom";
import { BACKEND_URL } from '../config';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { authAtom } from '../store/atoms'; 
import { useEffect } from 'react';  

const Navbar = () => {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useAtom(authAtom);

    useEffect(() => {
            axios.get(`${BACKEND_URL}/me`, { withCredentials : true })
                .then(() => setLoggedIn(true))
                .catch(() => setLoggedIn(false));
    }, []);

    return <div>
                <div className="flex justify-between *:px-4 border border-b border-sky-50 bg-transparent">
                <div className="flex sm:items-center">
                    <div className="flex flex-col justify-center mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#276687" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-5lucide lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
                    </div>
                    <Link to={'/'} className="flex flex-col justify-center text-xl font-bold">
                        <div ><span className="text-sky-900">Medi</span>Cloud.</div>
                    </Link>
                </div>
                <div className="mt-2 mr-3">
                    {
                        !loggedIn ? 
                        <Link to={'/signin'} className="mr-2">
                        <button type="button" className="bg-sky-900 sm:w-24 text-white hover:bg-sky-700  focus:outline-none border sm:border-sky-500 rounded-md font-medium text-sm px-3 sm:px-5 py-2.5 mb-2">
                            <div className="sm:flex">
                                <div className="flex flex-col justify-center mr-1">   
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                                    </svg>
                                </div>
                                <div className="hidden sm:block font-medium">
                                    Login
                                </div>
                            </div>

                        </button>
                    </Link>

                    :

                        
                    <div>
                    <button
                    onClick={ async () => {
                        try {
                            await axios.post(`${BACKEND_URL}/signout`,{},{
                                withCredentials : true
                            });
                            toast.success('User logged out');
                            setLoggedIn(false)
                            navigate('/');
                        } catch (err) {
                            toast.error('User did not log out');
                        }
                    }}
                    type="button" className=" bg-sky-900 sm:w-24 text-white hover:bg-sky-700 focus:outline-none focus:ring-4  font-medium rounded-md text-sm px-3 sm:pl-4  py-2.5 mb-2">
                            <div className="flex">
                                <div className="flex flex-col justify-center mr-1">   
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                    </svg>

                                </div>
                                <div className="hidden sm:block pr-3">
                                    Logout
                                </div>
                            </div>

                        </button>
                    </div>
                    }





                </div>
            </div>
            <ToastContainer />
    </div> 
    
}

export default Navbar;

