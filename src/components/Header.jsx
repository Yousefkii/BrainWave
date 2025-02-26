import {brainwave} from '../assets'
import {navigation} from './constants/index.js'
import { useLocation } from 'react-router-dom'
import Buttons from './Button.jsx'
import MenuSvg from '../assets/svg/MenuSvg'
import { HambugerMenu } from './design/design/Header' 
import { useState } from 'react'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'

const Header = () => {
    const pathname = useLocation();
    const [openNavigation,setopenNavigation] = useState(false);

    const togglenav =()=>{
        if(openNavigation){
            setopenNavigation(false)
            enablePageScroll()
        }
        else{
            setopenNavigation(true)
            disablePageScroll()
        }
    }
    const handleClick = ()=>{
        setopenNavigation(false)
        if(!openNavigation) return;

        enablePageScroll();
        setopenNavigation(false)
    }
  return (
    <div className={`fixed w-full left-0 top-0 z-50 border-b border-#FF98E2 lg:bg-black lg:backdrop-blur-sm ${openNavigation ? 'bg-black' : 'bg-black/90 backdrop-blur-sm'}`}>
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
            <a className="block w-[12rem] xl:mr-8" href="#hero">
                <img src={brainwave} width={190} height={40} alt="Brainwave"></img>
            </a>
            <nav  className={` ${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0
                            right-0 bottom-0 bg-black lg:static lg:flex
                            lg:mx-auto lg:bg-transparent`}>

                 <div className="relative z-2 flex-col
                                 items-center justify-center m-auto
                                 lg:flex-row lg:flex">
                     {navigation.map((item)=>(
                                <a key={item.id} href={item.url} onClick={handleClick} className= {`block relative font-code text-2xl no-underline uppercase text-white transition-colors hover:text-#AC6AFF ${item.onlyMobile ? "lg:hidden" : "" } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ?' z-2 lg:text-white' : 'lg:text-gray-400 lg:leading-5 lg:hover:text-white xl:px-12' }`} >
                                   {item.title}
                                </a> 
                         )
                        )}
                        
                  </div>
                  <HambugerMenu/>
            </nav>
            <a href='#signup' className='hidden button mr-8 text-gray-400 transition-color hover:text-white lg:block'>
                new account
            </a>
            <Buttons className='sm:hidden md:hidden lg:flex 'href='#sigup'> 
                Sign in
            </Buttons>
            <Buttons  className='ml-auto lg:hidden' px ='px-3' onClick={togglenav}>
                <MenuSvg openNavigation={openNavigation}/>
            </Buttons>
        </div>
    </div>
  )
}

export default Header