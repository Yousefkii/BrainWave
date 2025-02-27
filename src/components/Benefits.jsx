import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { benefits } from './constants'
import Arrow from '../assets/svg/Arrow'
import {GradientLight} from './design/design/Benefits.jsx'
import clipPath from '../assets/svg/ClipPath.jsx'
import { heroBackground } from '../assets'

const Benefits = () => {
  return (
    <Section id='features' >
        <img className='absolute w-full h-full  bg-cover' src={heroBackground}/>
        <div className='container relative z-2'>
            <Heading className='md:max-w-md lg:max-w-6xl' title='Chat smarter, Not harder with Brainwave'>
            </Heading>

            <div className='flex flex-wrap gap-10 items-center justify-center  mb-10'>
             {benefits.map((item)=>(
                <div key={item.id} className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]'style={{backgroundImage: `url(${item.backgroundUrl})`}} >
                    <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none'>
                        <h1 className='h2 mb-5'>
                            {item.title}
                        </h1>
                        <p className='body-2 mb-6 text-#ADA8C3'>{item.text}</p>
                        <div className='flex items-center mt-auto'>
                         <img src={item.iconUrl} width={48} height={48} alt={item.title}/>
                         <p className='ml-auto text-xs font-bold text-white uppercase tracking-wider'>
                            Explore more
                         </p >
                         <Arrow/>
                        </div>
                    </div>    

                    {item.light && <GradientLight/>}

                    <div className='absolute inset-0.5 bg-#0E0C15' style={{clipPath:"url(#benefits)"}}>

                    <div className='absolute inset-0 opacity-0 transition-opacity hover:opacity-10'>
                      {item.imageUrl && (
                        <img 
                         src={item.imageUrl}
                         width={380}
                         height={362}
                         alt={item.title}
                         className='w-full h-full object-cover'
                        />
                      )}
                     </div>
                    </div>
                    <clipPath/>
                </div>

             ))}
            </div>
        </div>
    </Section>
  )
}

export default Benefits