import { check2, grid, loading } from "../assets"
import Button from "./Button"
import { roadmap } from "./constants"
import Heading from "./Heading"
import Section from "./Section"
import Tagline from "./Tagline"

const RoadMap = () => {
  return (
    <Section className='overflow-hidden ' id='roadmap'>
     <div className="container md:pb-10">
       <Heading tag='Ready to get  started' title="What we're working on "/>
       <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item)=>{
          const status = item.status === "done" ? "Done" : "In progress"
          return (
            <div key={item.id} className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] border border-white/23 ${item.colorful ? 'bg-conic-grediant' : 'bg-white/2'}`}>
              <div className="relative p-8 bg-black rounded-[2rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                    <img src={grid} className="w-full" width={550} height={550} alt="grid"/>
                </div>
                <div className="relative z-1 ">
                    <div className="flex max-w-[27rem] mb-8 md:mb-20 items-center justify-between">
                      <Tagline>{item.date}</Tagline>
                      <div className="felx items-centerpx-4 py-1 bg-white text-black rounded-xl">
                      <img className="ml-2 absolute mt-1" src={item.status === "done" ? check2 : loading}
                      width={16} height={16} alt="status"/>
                      <div className="tagLine px-10 ">
                         {status}
                      </div>
                    </div>
                    </div>
                    <div className="mb-10 -my-10 -mx-15">
                       <img src={item.imageUrl} className="w-full" width={630} height={430} alt={item.title}/>
                    </div>
                    <h4 className="h4 mb-4">
                        {item.title}
                    </h4>
                    <p className="body-2 text-white/30">
                        {item.text}
                    </p>
                    </div>
              </div>
            </div>
          )
        })}

       </div>
       <div className="mt-[4rem] justify-center items-center flex">
       <Button>Our Roadmap</Button>
       </div>
     </div>
    </Section>
  )
}

export default RoadMap