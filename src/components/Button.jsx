import React from 'react'

const Button = ({children, ...props}) => {
  return (
    <button className='bg-color-blue text-color-white py-2 px-4 flex justify-center items-center' 
    {...props}>
      {children}
    </button>
  )
}

export default Button
