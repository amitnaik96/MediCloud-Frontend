import React from 'react';

interface ButtonProps {
    label : string;
    onClick : () => void;
}

const Button:React.FC<ButtonProps> = ({label, onClick}) => {
    return <button onClick={onClick} type="button" className=" w-full text-white bg-sky-900 hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{label}</button>
}

export default Button;