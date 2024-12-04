import { motion } from 'framer-motion';
import { Power4 } from 'gsap';
import React, { useState } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

// more cards img link:
// https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg
// https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png
const Featured = () => {
    const [card, setCard] = useState(false);
    const [ah2, setAh2] = useState(false);
    const[but, setBut] = useState(false)
  return (
    <div className='my-16'>
        <p className='text-6xl px-16 tracking-tight py-10 border-b-2'>Featured projects</p> 
        <div className='flex flex-wrap px-16 pt-8 gap-11 relative'>
            <div className={`my-7 relative`} onMouseEnter={() => setCard(true)} onMouseLeave={() => setCard(false)}>
                <div className='flex items-center justify-center absolute overflow-hidden text-[#CDEA68] text-8xl z-20 leading-none tracking-tighter left-full -translate-x-[50%] -translate-y-[50%] top-1/2 font-bold'>
                    { // overflow hidden will make text hidden when you wrote y: 100% initialy and when hover y:0% -> it will again come at top
                        "CARDBOARD SPACESHIP".split('').map((item, index) => (
                            <motion.span 
                                className='inline-block' 
                                initial={{y: "100%"}} 
                                animate={card ? {y: "0%"} : {y: "100%"}} 
                                transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.02}} // ease values taken from easings.net
                                key={index}
                            >
                                {item}
                            </motion.span>
                        ))
                    }
                </div>
                <div className='flex gap-2 items-center'>
                    <div className='h-[1vh] w-[1vh] bg-zinc-50 rounded-full'></div>
                    <div className='font-light'>CARDBOARD SPACESHIP</div>
                </div>
                <div className='z-30' onMouseEnter={() => setShowText('CARDBOARD SPACESHIP')} onMouseLeave={() => setShowText('')}>
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
            <div className='my-7 relative' onMouseEnter={() => setAh2(true)} onMouseLeave={() => setAh2(false)}>
                <div className='flex absolute text-[#CDEA68] text-8xl z-20 overflow-hidden leading-none tracking-tighter right-full translate-x-[50%] -translate-y-[50%] top-1/2 font-bold'>
                    {
                        "AH2 & MATTHORN".split('').map((item, index) => (
                            <motion.span 
                                className='inline-block' 
                                initial={{y: "100%"}} 
                                animate={ah2 ? {y: "0%"} : {y: "100%"}} 
                                transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.02}}
                                key={index}
                            >
                                {item}
                            </motion.span>
                        ))
                    }
                </div>
                <div className='flex gap-2 items-center'>
                    <div className='h-[1vh] w-[1vh] bg-zinc-50 rounded-full'></div>
                    <div className='font-light'>CARDBOARD SPACESHIP</div>
                </div>
                <div className='' onMouseEnter={() => setShowText('AH2 & MATT HORN')} onMouseLeave={() => setShowText('')}>
                    <div className='hover:scale- ease-in'>
                        <img className='rounded-xl my-4' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
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
            <button className='w-[18vw] h-14 bg-zinc-950 rounded-full flex gap-10 justify-center items-center text-white mt-6' onMouseEnter={() => setBut(true)} onMouseLeave={() => setBut(false)}>
                <div>VIEW ALL CASE STUDIES</div>
                <div className='w-8 h-8 bg-zinc-950 rounded-full flex items-center justify-center'>
                    <div className={`${but ? 'w-8 h-8 ease-in duration-200' : 'w-2 h-2'} bg-zinc-100 rounded-full flex items-center justify-center`}>
                        {but && <FaArrowUpLong className='text-black rotate-[45deg]'/>}
                    </div>
                </div>
            </button>
        </div>
    </div>
  )
}

export default Featured