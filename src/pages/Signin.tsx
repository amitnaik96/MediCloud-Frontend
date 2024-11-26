import Heading from '../components/Heading';
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import ButtonWarning from "../components/ButtonWarning";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuthRedirect from '../hooks/useAuthRedirect';

const Signin: React.FC = () => {
    useAuthRedirect();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return  <div className=" h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="border border-slate-300 rounded-lg bg-white w-96 text-center p-2 h-max px-4 py-4">
        <Heading label={"MediCloud"} />
        <SubHeading label={"Enter your credentials to access"} />
        <InputBox placeholder="demo@gmail.com" label={"Email"} onChange={(e) => setUsername(e.target.value)}/>
        <InputBox placeholder="••••••••" label={"Password"} onChange={(e) => setPassword(e.target.value)}/>
        <div className="pt-4">
          <Button label={"Sign in"} onClick={async () => {
            const response = await axios.post('http://localhost:3000/signin', {
                username,
                password
            });
            localStorage.setItem("token", response.data.token);
            navigate('/');
          }}/>
        </div>
        <ButtonWarning label={"Don't have an account?"} buttonText={"Contact admin"} to={"/signup"} />
      </div>
    </div>
  </div>
}

export default Signin;