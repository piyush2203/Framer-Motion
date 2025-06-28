/* eslint-disable no-unused-vars */
import { useRef } from "react"
import Cards from "./Cards"


const Foreground = () => {
    const ref = useRef(null);


    const data  = [
        {desc : "Lorem ipsum dolor sit amet, consectetur adipisicing." , 
            color: "bg-blue-400"
        },
        {desc : "Lorem ipsum dolor sit amet, consectetur adipisicing." , 
            color: "bg-green-400"
        },
        {desc : "Lorem ipsum dolor sit amet, consectetur adipisicing." , 
            color: "bg-yellow-400"
        }
    ]

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-8 p-5 flex-wrap'>
      {/* <Cards/> */}
      {data.map((item,index)=>(
        <Cards data={item} reference = {ref}/>
      ))}
     
    </div>
  )
}

export default Foreground
