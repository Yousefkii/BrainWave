import React from 'react'
import { companyLogos } from './constants'

const CompanyLogos = ({className}) => {
  return (
    <div className={className}>
    <h5 className='tagline mb-6 text-center text-white/50'>
        Helping peapole create beatiful content at
    </h5>
    <ul className='flex '>
        {companyLogos.map((logo,index)=>(
          <li key={index} className='flex items-center justify-center text-center flex-1 h-[8.5rem]'>
            <img  src={logo} width={134} height={28} alt={logo}/>
          </li>
        ))}
    </ul>
    </div>
  )
}

export default CompanyLogos