import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='py-5 flex flex-wrap justify-center items-center sticky top-0 left-0 z-50'>
       <Link className='text-color-blue  rounded-md z-20 text-xl' to='/' end='true'>Home</Link>
    </header>
  )
}

export default Header
