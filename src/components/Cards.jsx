/* eslint-disable no-unused-vars */
import { FaRegFileAlt } from "react-icons/fa";
import { motion } from "motion/react";

const Cards = ({data,reference}) => {
    console.log(data);
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} className="relative w-60 h-72 bg-zinc-900/60 rounded-[35px] text-white px-5 py-10 overflow-hidden ">
        <FaRegFileAlt size={"2em"}/>
        <p className="text-sm mt-5 font-semibold leading-tight">{data.desc} </p> 
        <div className={`footer h-10 w-60 absolute ${data.color} bottom-0 left-0`}>
            <h1 className="text-center mt-2 font-bold">Download</h1>
        </div>
    </motion.div>
  )
}

export default Cards
