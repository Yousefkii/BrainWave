import {brainwave} from '../assets (2)/assets'
import {navigation} from './constants/index.js'
import { useLocation } from 'react-router-dom'
import Buttons from './Buttons.jsx'
import MenuSvg from '../assets (2)/assets/svg/MenuSvg.jsx'
import { HambugerMenu } from './design/design/Header' 
import { useState } from 'react'

const Header = () => {
    const pathname = useLocation();
    const [opennav,setOpennav] = useState(false);
    const togglenav =()=>{
        if(opennav){
            setOpennav(false)
        }
        else{
            setOpennav(true)
        }
    }
    const handleClick = ()=>{
        setOpennav(false)
    }
  return (
    <div className={`fixed w-full left-0 top-0 z-50 bg-black backdrop-blur-sm  border-b border-#FF98E2 lg:bg-black lg:backdrop-blur-sm ${opennav ? 'bg-black' : 'bg-black/90 backdrop-blur-sm'}`}>
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 mt-2.5">
            <a className="block w-[12rem] xl:mr-8" href="#hero">
                <img src={brainwave} width={190} height={40} alt="Brainwave"></img>
            </a>
            <nav className={` ${opennav? 'flex' : 'hidden'} fixed top-[5rem] left-0
                            right-0 bottom-0 Obg-n-8 lg:static lg:flex
                            lg:mx-auto lg:bg-transparent`}>

                 <div className="relative z-2 flex flex-col
                                 items-center justify-center m-auto
                                 lg : flex-row">
                     {navigation.map((item)=>(
                                <a key={item.id} href={item.url}  className= {`block relative font-code text-2xl no-underline uppercase text-white transition-colors hover:text-#AC6AFF ${item.onlyMobile? "lg:hidden" : "" } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ?' z-2 lg:text-white' : 'lg:text-gray-400 lg:leading-5 lg:hover:text-white xl:px-12' }`}>
                                   {item.title}
                                </a> 
                         )
                        )}
                        <HambugerMenu></HambugerMenu>
                  </div>
            </nav>
            <a href='#signup' className='hidden button mr-8 text-gray-400 transition-color hover:text-white lg:block'>
                new account
            </a>
            <Buttons className='hidden lg:flex 'href='#login'> 
                Sign in
            </Buttons>
            <Buttons className='ml-auto lg:hidden' px ='px-3' onClick={togglenav}>
                <MenuSvg Opennav={opennav}/>
            </Buttons>
        </div>
    </div>
  )
}

export default Header