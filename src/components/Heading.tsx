import React from 'react';

interface HeadingProps {
    label : string;
}

const Heading: React.FC<HeadingProps> = ({label}) => {
    return <div className='font-bold text-2xl pt-6 text-sky-900'>
        {label}
    </div>
}

export default Heading;