import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <section className='py-5 flex flex-wrap justify-center items-center sticky top-0 left-0'>
       <Link className='text-color-white bg-color-blue  p-2 rounded-md z-20' to='/' end>Home</Link>
    </section>
  )
}

export default Header
