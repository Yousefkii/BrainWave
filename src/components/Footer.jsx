import { socials } from "./constants"
import Section from "./Section"

const Footer = () => {
  return (
    <Section crosses className='!px-0 !py-10'>
        <div className="contianer flex sm:justify-between justify-center items-center gap-10 max-sm:felx-col lg:px-3">
            <p className="caption text-white/30 lg:block"> &copy;
                {new Date().getFullYear} All rights reserved. 
            </p>
            <ul className="flex gap-5 flex-wrap">
                {socials.map((item)=>(
                    <a key={item.id} href={item.url} target="_blank" className="flex justify-center w-10 h-10 items-center rounded-full transition-colors bg-black">
                        <img src={item.iconUrl} width={16} height={16} alt={item.title}/>
                    </a>
                ))}
            </ul>
        </div>
    </Section>
  )
}

export default Footer