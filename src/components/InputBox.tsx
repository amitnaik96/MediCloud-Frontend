import React from 'react';

interface InputBoxProps {
    label : string;
    placeholder : string;
    onChange : (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox:React.FC<InputBoxProps> = ({label, placeholder, onChange}) => {
    return <div>
        <div className="text-sm font-medium text-left py-2">
            {label}
        </div>
        <input onChange={onChange} placeholder={placeholder} className='bg-gray-50 w-full px-2 py-1 border rounded border-slate-200'/>
    </div>
}

export default InputBox;

