import React, { useRef } from 'react'
import Section from './section.jsx'
import { curve, heroBackground, robot } from '../assets'
import Buttons from './Button.jsx'
import { ScrollParallax } from 'react-just-parallax'
import {BackgroundCircles, BottomLine, Gradient} from './design/design/Hero.jsx';
import { heroIcons } from './constants/index.js'
import { Form } from 'react-router-dom'
import Generating from './Generating.jsx'
import Notification from './Notification.jsx'
import CompanyLogos from './CompanyLogos.jsx'

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    
    <Section className='pt-[12rem] -mt-[5.25rem]' crosses crossesOffset="lg:trnaslate-y-[5.25rem]" customPaddings id='Hero'>
    <div className='container relative lg:w-full xl:w-full' ref={parallaxRef}>
    <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className='h1 mb-6 '>
            Explore the possibilities of AI Chatting with
            <span className="inline-block relative">
              Brainwave{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-0"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className='body-1  mx:auto mb-6 text-#CAC6DD  lg:mb-8 text-center'>
            unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave. The open AI chat app
          </p>
          <Buttons href="/pricing" white >
          get started
          </Buttons>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className=" relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[2rem]" />
              <div className=" aspect-[33/40] rounded-[1rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[1%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
                <Generating className='absolute left-4 right-4 bottom-5 md:left-1/4 md:right-auto md:bottom-8 md:w-[31rem] md:-trnaslate-x-1/2'/>
                
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className='hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-#474060/40 backdrop-blur border border-white/10 rounded-2xl xl:flex'>
                    {heroIcons.map((icon,index)=>(
                      <li className='p-5 ' key={index}>
                           <img src={icon} width={24} height={25} alt={icon}/>
                      </li>
                    ))}
                  </ul>
                  
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification className='hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex' title="Code generation"/>
                </ScrollParallax>
            </div>
           
           </div>
           
          </div>
          </div>
          <Gradient/>
    </div>
    
    <div className="absolute -top-[14%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] ">
    
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={2000}
              alt="hero"
            />
            
    </div>
    <CompanyLogos className='hidden relative z-10 mt-20 lg:block'/>
    <BackgroundCircles/>
    <BottomLine/>
    </Section>
)
}

export default Hero