import React from 'react';

interface SubHeadingProps {
    label : string;
}

const SubHeading: React.FC<SubHeadingProps> = ({label}) => {
    return <div className='text-sky-700 text-sm pt-1 pb-4'>
        {label}
    </div>
}

export default SubHeading;