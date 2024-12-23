import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonWarning {
    label : string;
    buttonText : string;
    to : string;
}   

const ButtonWarning: React.FC<ButtonWarning> = ({label, buttonText, to}) => {
    return <div className="py-2 text-sm flex justify-center text-sky-900">
    <div>
      {label}
    </div>
    <Link className="pointer font-semibold underline:false pl-1 cursor-pointer" to={to}>
      {buttonText}
    </Link>
  </div>
}

export default ButtonWarning;