import React from 'react'

const Heading = ({className,title}) => {
  return (
    <div className={`${className} text-4xl p-3 max-w-[50rem] mx-auto mb-12 lg:mb-20  lg:text-8xl `}>
        {title && <h2 className='h2'> {title} </h2>}
    </div>
  )
}

export default Heading