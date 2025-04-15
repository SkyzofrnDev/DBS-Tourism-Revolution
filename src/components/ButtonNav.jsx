import React from 'react'
import { Link } from 'react-router-dom'; 
const ButtonNav = ({ name, linkTo }) => {
  return (    
  <Link to={linkTo} className='px-12 py-5 text-white rounded-full hover:bg-white hover:text-black ease-in-out duration-150 '>
    {name}
  </Link>
  )
}

export default ButtonNav