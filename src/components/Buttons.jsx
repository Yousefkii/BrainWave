import React from 'react'
import ButtonSvg from "../assets (2)/assets/svg/ButtonSvg"

const Buttons = ({className,href,onClick,children,px,white}) => {

   const classes = `button relative jsutify-center infline-flex items-center h-11 transition-colors hover:text-color-white ${className } ${px || "px-7"}`

   const spanclasses = 'relative z-10'

  const renderButton =()=>(
    <button className={classes} onClick={onClick}>
        <span className={spanclasses}>{children}</span>
        {ButtonSvg(white)}
    </button>
  )

  const renderLink= () =>(
     <a className={classes} href={href}>
        <span className={spanclasses}>{children}</span>
        {ButtonSvg(white)}
     </a>
  ) 

  return href ? renderLink() : renderButton();
}

export default Buttons