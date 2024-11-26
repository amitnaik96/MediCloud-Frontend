import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useAuthRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/me', {
            headers : {
                authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res: any) => {
            const loggedIn = res.data.loggedIn;
            if(!loggedIn) navigate('/signin')
        })
    }, [navigate])
}

export default useAuthRedirect;
