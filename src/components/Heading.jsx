import Tagline from "./Tagline"

const Heading = ({className,title,text,tag}) => {
  return (
    <div className={`${className}  text-4xl p-3 max-w-[50rem] mb-12 lg:mb-20  lg:text-8xl lg:w-auto`}>
        {tag && (<Tagline className='text-xl ml-3 mb-4 md:justify-center md:text-2xl lg:w-[90rem]'>
            {tag}
        </Tagline>)}
        {title && <h2 className='h2 ml-3 justify-center md:text-center lg:w-[90rem]'> {title} </h2>}
        {text && <p className='body-2 mt-7 text-2xl text-white/40'>{text}</p>}
    </div>
  )
}

export default Heading