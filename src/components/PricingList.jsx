import { check } from '../assets'
import Button from './Button'
import {pricing} from './constants/index'

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
    {pricing.map((item) => (
      <div
        key={item.id}
        className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-white/15 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-5"
      >
        <h1 className={`h4 mb-4 ${item.id == 0 ? 'text-amber-600' : ''} ${item.id == 1 ? 'text-fuchsia-900' : ''} ${item.id == 2 ? 'text-emerald-700' : ''}`}>{item.title}</h1>

        <p className="body-2 min-h-[4rem] mb-3 text-white/50">
          {item.description}
        </p>
        <div className='flex items-center h-[5.5rem] mb-3'>
            {item.price && (
                <>
                <div className='h3 text-5xl'>$</div>
                <div className={`text-[5.5rem] font-bold leading-none `}>{item.price}
                </div>
                </>
            )}
            </div>
            <Button className='w-full mb-6' href={item.price ? '/pricing' : 'mailto:ContactUs@support'} white={!!item.price}>
                {item.price ? 'Get started' : 'Content us'}
            </Button>
            <ul>
                {item.features.map((feature,index)=>(
                    <li className='flex items-start py-5 border-t border-white/2' key={index}>
                       <img src={check} alt='check' width={24} height={24}/>
                       <p className='body-2 ml-4'>
                        {feature}
                       </p>
                    </li>
                ))}
            </ul>
            </div>
          ))}
        </div>
        )
}

export default PricingList