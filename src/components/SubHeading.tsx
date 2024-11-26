import React from 'react';

interface SubHeadingProps {
    label : string;
}

const SubHeading: React.FC<SubHeadingProps> = ({label}) => {
    return <div className='text-slate-500 text-md pt-1 pb-4 px-4'>
        {label}
    </div>
}

export default SubHeading;