import { motion } from 'framer-motion'
import React, { useState } from 'react'
import {Power4} from 'gsap/all'

// https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png
// https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg
// https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png
const Featured = () => {
    const [hover, setHover] = useState(false);
  return (
    <div className='my-16'>
        <p className='text-6xl px-16 tracking-tight py-10 border-b-2'>Featured projects</p> 
        <div className='flex flex-wrap px-16 pt-8 gap-11'>
            <div className={`my-7`}>
                <div className='flex gap-2 items-center'>
                    <div className='h-[1vh] w-[1vh] bg-zinc-50 rounded-full'></div>
                    <div className='font-light'>CARDBOARD SPACESHIP</div>
                </div>
                <div className='relative' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(true)}>
                    <div className={`w-[70vw] flex justify-center items-center overflow-hidden absolute top-1/2 left-full -translate-x-[50%] -translate-y-[50%] text-8xl text-[#CDEA68] font-bold tracking-tighter`}>
                        {
                            "CARDsdfldkdjfsfljsdlfsdljl".split("").map((item, index) => (
                                <motion.div 
                                    initial={{y: "100%"}}
                                    animate={hover ? {y: "0%"} : {y: "100%"}}
                                    transition={{ease: Power4.easeInOut}} 
                                    className='inline-block'
                                >
                                    {item}
                                </motion.div>
                            ))
                        }
                    </div>
                    <div className='hover:scale- ease-in'>
                        <img className='rounded-xl my-4' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='border-2 px-3 py-1 rounded-full'>BRANDED TEMPLATE</div>
                    <div className='border-2 px-3 py-1 rounded-full'>SALES DECK</div>
                    <div className='border-2 px-3 py-1 rounded-full'>SOCIAL MEDIA TEMPLATE</div>
                </div>
            </div>
            <div className='my-7'>
                <div className='flex gap-2 items-center'>
                    <div className='h-[1vh] w-[1vh] bg-zinc-50 rounded-full'></div>
                    <div className='font-light'>CARDBOARD SPACESHIP</div>
                </div>
                <div className='relative'>
                    <div className='hover:scale- ease-in'>
                        <img className='rounded-xl my-4' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='border-2 px-3 py-1 rounded-full'>BRANDED TEMPLATE</div>
                    <div className='border-2 px-3 py-1 rounded-full'>SALES DECK</div>
                    <div className='border-2 px-3 py-1 rounded-full'>SOCIAL MEDIA TEMPLATE</div>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <button className='w-[18vw] h-14 bg-zinc-950 rounded-full flex gap-10 justify-center items-center text-white mt-6'>
                <div>VIEW ALL CASE STUDIES</div>
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
        </div>
    </div>
  )
}

export default Featured