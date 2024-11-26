import React from 'react';

interface DisplayBoxProps {
    label : string;
    display : string;
}

const DisplayBox:React.FC<DisplayBoxProps> = ({label, display}) => {
    return <div className=''>
            <div className="text-md font-medium text-left py-2">
                {label}
            </div>
            <div className='bg-gray-50 border border-gray-300 rounded-lg w-full px-2 py-1 text-slate-800'>
                {display}
            </div>
        </div>
}

export default DisplayBox;