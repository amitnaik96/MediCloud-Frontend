import React from 'react';
import { Link } from 'react-router-dom';

interface SingleProps {
    label : string;
    to : string;
}

const Single: React.FC<SingleProps> = ({label, to}) => {
    return <div>
           <Link to={to} className="w-full inline-flex px-5 py-2 mt-2 text-base font-medium text-left text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 ">
                {label}
            </Link> 
    </div>
}

export default Single;