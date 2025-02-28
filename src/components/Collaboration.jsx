import React from 'react'
import Section from './Section'
import { collabApps, collabContent, collabText } from './constants'
import { brainwaveSymbol, check } from '../assets'
import Buttons from './Button'
import {LeftCurve,RightCurve} from './design/design/Collaboration.jsx'
import { heroBackground } from '../assets'

const Collaboration = () => {
  return (
    <Section crosses >
        
        <div className='container pl-10 lg:flex '>
<div className=' max-w-[25rem] '>
<h1 className='h2 mb-4 md:mb-8 lg:w-auto'>AI chat app for seemless collaboration</h1>
<ul className='max-w-[22rem] mb-10 md:mb-14'>
    {collabContent.map((item)=>(
        <li className='mb-3 py-3' key={item.id}>
            <div className='flex items-center lg:mt-10'>
             <img src={check} width={24} height={24} alt='check'/>
             <h2 className='body-2 ml-5 text-3xl'>
                {item.title}
             </h2>
            
            </div>
            {item.text &&  (<p className='body-2 mt-3 text-#757185'>{item.text}</p>)}
        </li>
    ))}
</ul>
<Buttons>Try it now</Buttons>
</div>
   <div className=' lg:ml-auto xl:w-[38rem] mt-4'>
        <p className='body-2 mb-9 text-#757185 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto'>{collabText}
        </p>
          <div className=' relative left-1/2 mr-15 flex w-[22rem ] aspect-square border border-b-cyan-300 rounded-full -translate-x-1/2 scale:75 md:scale-100'>
            <div className='flex w-60 aspect-square m-auto border border-#252134 rounded-full'>
             
                 <div className=' w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-ful'>
                   <div className=' flex items-center justify-center w-full h-full border rounded-full bg-black/100 '>
                    <img src={brainwaveSymbol} width={48} height={48} alt='brainwave'/>
                   </div>
              </div>
            </div>
            <ul>
  {collabApps.map((app, index) => (
    <li
      key={app.id}
      className="absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom"
      style={{ transform: `rotate(${index * 45}deg)` }}
    >
      <div
        className="relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-[#15131D] border border-white/15 rounded-xl"
        style={{ transform: `rotate(-${index * 45}deg)` }}
      >
        <img
          className="m-auto"
          width={app.width}
          height={app.height}
          alt={app.title}
          src={app.icon}
        />
      </div>
    </li>
  ))}
</ul>
<LeftCurve/>
<RightCurve/>
       </div>
   </div>
</div>
    </Section>
  )
}

export default Collaboration