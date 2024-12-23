import React from 'react';

interface InputBoxProps {
    label : string;
    placeholder : string;
    onChange : (e:React.ChangeEvent<HTMLInputElement>) => void;
    type? : string;
}

const InputBox:React.FC<InputBoxProps> = ({label, placeholder, onChange, type}) => {
    return <div>
        <div className="text-sm font-medium text-left py-2 text-sky-900">
            {label}
        </div>
        <input onChange={onChange} type={type || "text"} placeholder={placeholder} className="border border-sky-300 text-gray-900 text-sm rounded-lg focus:outline-none w-full p-2.5" required />
    </div>
}

export default InputBox;

