import React from 'react'
import {Link} from 'react-router-dom'

// import icons
import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <header className='py-5 flex flex-wrap justify-center items-center sticky top-0 shadow-sm backdrop-blur-md'>
       <Link className='text-color-blue  rounded-md z-20 text-xl flex justify-center gap-1 items-center' to='/' end='true'><FaHome /> <span>Home</span></Link>
    </header>
  )
}

export default Header
