import React from 'react'
import { loading } from '../assets'

const Generating = ({className}) => {
  return (
    <div className={`flex items-center h-[3.5rem] px-6 bg-black/80 rounded-[1.7rem] ${className || ''} text-base`}>
        <img
        className=' w-5 h-5 mr-4 absolute'
        src={loading}
        alt='loading'
        />
         <span className='ml-10'>AI is generating</span>
    </div>
  )
}

export default Generating