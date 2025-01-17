import Heading from '../components/Heading';
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import ButtonWarning from "../components/ButtonWarning";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../config';
import { ToastContainer, toast } from 'react-toastify';

const Signin: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return  <div className="h-screen flex justify-center bg-gradient-to-b from-sky-100 via-white to-sky-5">
    <div className="flex flex-col justify-center">
      <div className="border border-sky-300 rounded-lg bg-white sm:w-96 p-2 h-max px-8 py-4">
        <Heading label={"MediCloud"} />
        <SubHeading label={"Enter your credentials to access"} />
        <InputBox placeholder="demo@gmail.com" label={"Email"} onChange={(e) => setUsername(e.target.value)}/>
        <InputBox placeholder="••••••••" label={"Password"} type={"password"} onChange={(e) => setPassword(e.target.value)}/>
        <div className="pt-4">
          <Button label={"Sign in"} onClick={async () => {
            try {
              await axios.post(`${BACKEND_URL}/signin`, {
                username,
                password
              },{ withCredentials : true });
              navigate('/');
            } catch (err) {
              toast.error('Invalid credentials!');
            }
       
          }}/>
        </div>
        <ButtonWarning label={"Don't have an account?"} buttonText={"Contact admin"} to="mailto:medicloudsecure@gmail.com"/>
      </div>
    </div>
    <ToastContainer position="top-center"/>
  </div>
}

export default Signin;
