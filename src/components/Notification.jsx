import React from 'react'
import { notificationImages } from './constants'
import { notification1 } from '../assets'

const Notification = ({className,title}) => {
  return (
    <div className={`${className || ''} flex intems-center p-4 pr-6 bg-#474060/40 backdrop-blur border border-white/50 rounded-2xl gap-5`}>
           
          <img src={notification1} width={62} height={62} alt='image' className='rounded-xl'/>

         <div className='flex-1'>
          <h6 className='mb-1 font-semibold font-code'>{title}</h6>
          <div className='flex items-center justify-between'>
            <ul className='flex -m-0.5'>
             {notificationImages.map((item,index)=>(
                <li key={index} className='felx w-6 h-6 border-2 border-#2E2A41 rounded-full overflow-hidden'>
                    <img 
                    src={item}
                    className='w-full'
                    width={20}
                    height={20}
                    alt='item'
                    />
                </li>
             ))}
            </ul>
            <div className='body-2 text-#6C7275' >
              1m ago
            </div>
          </div>
         </div>
    </div>
    
    
  )
}

export default Notification