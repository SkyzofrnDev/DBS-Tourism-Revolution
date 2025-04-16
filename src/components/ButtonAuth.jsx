import React from 'react';
import { Link } from "react-router-dom";

const ButtonAuth = ({ name, linkTo }) => {
  return (
    <Link to={linkTo} className="px-12 py-5 text-white bg-[#cfcdcd8f] border-0.4 border border-[#ffffffe0] rounded-full">
      {name}
    </Link>
  );
};

export default ButtonAuth;
