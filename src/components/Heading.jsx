import React from 'react'

const Heading = ({className,title,text}) => {
  return (
    <div className={`${className} text-4xl p-3 max-w-[50rem] mx-auto mb-12 lg:mb-20  lg:text-8xl ml-5 lg:w-auto`}>
        {title && <h2 className='h2'> {title} </h2>}
        {text && <p className='body-2 mt-7 text-2xl text-white/40'>{text}</p>}
    </div>
  )
}

export default Heading