import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../config';

const useAuthRedirect = (url : string) => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await axios.get(`${BACKEND_URL}/${url}`,{
                    withCredentials : true
                });
            } catch (err) {
                navigate('/');
            }
        }

        checkAuth();
    }, [navigate])
}

export default useAuthRedirect;
