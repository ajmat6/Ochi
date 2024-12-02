import React from 'react'
import { motion } from "framer-motion"

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='w-full py-28 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-[#3A756E] flex whitespace-nowrap overflow-hidden'>
            <motion.p initial={{x:0}} animate={{x:"-100%", transition:{ease: "linear", duration: 12.5, repeat: Infinity}}} className='text-[20vw] leading-none tracking-tighter font-bold uppercase mt-[-52px] mb-[-3px] pr-16'>We are ochi</motion.p>
            <motion.p initial={{x:0}} animate={{x:"-100%", transition:{ease: "linear", duration: 12.5, repeat: Infinity}}} className='text-[20vw] leading-none tracking-tighter font-bold uppercase mt-[-52px] mb-[-3px] pr-16'>We are ochi</motion.p>
            {/* <motion.p initial={{x:0}} animate={{x:"-100%", transition:{ease: "linear", duration: 13, repeat: Infinity}}} className=' ml-9 stext-[20vw] leading-none tracking-tighter font-bold uppercase mt-[-52px] mb-[-3px]'>We are ochi</motion.p> */}
        </div>
    </div>
  )
}

export default Marquee