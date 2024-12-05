import { motion } from 'framer-motion'; // for card motion
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
    
  return (
    // data-scroll data-scroll-speed="-.8" is used for reducing scrolling speed for one so that next one could go over it: It is taken from locomotive library
    <div data-scroll data-scroll-speed="-.8" className='w-full h-screen bg-zinc-100 text-black pt-2 z-0'>
        <div className='textStructure mt-40 px-16'>
            {
                ["We Create", "Eye-Opening", "Presentations"].map((item, index) => (
                    <div key={index} className='masker'>
                        <div className='w-fit flex'>
                            { 
                            // w-[8.5vw] h-[5vw]
                                index === 1 && <motion.div initial={{width: 0}} animate={{width: '8.5vw'}} transition={{ease: [0.83, 0, 0.17, 1], duration: 1}} className='w-[8.5vw] h-[5vw] relative top-[0.7vw] rounded-md mr-2 bg-[url("https://tse2.mm.bing.net/th?id=OIP.6SYHmPwngl1GaCbjtIHkaAAAAA&pid=Api&P=0&h=180")] bg-no-repeat object-none'>
                                </motion.div>
                            }
                            <h1 className='uppercase text-[100px] font-["Test Founders Grotesk"] leading-[5.8vw] tracking-tighter font-medium'>{item}</h1>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='border-t-[1px] mt-52 border-zinc-700 flex px-16 justify-between py-5'>
            {
                ["For public and private companies", "From the the first pitch to IPO"].map((item, index) => (
                    <p className={`text-md font-light leading-none ${index === 1 && "ml-28"}`} key={index}>{item}</p>
                ))

            }

            <div className='start flex gap-[6px] cursor-pointer hover:text-black' onClick={() => {}}>
                <div className='px-3 py-1 border-[1px] rounded-full border-zinc-500'>START THE PROJECT</div>
                <div className='w-8 h-8 rounded-full border-[1px] border-zinc-500 text-center flex items-center justify-center'>
                    <span className='rotate-45'>
                        <FaArrowUpLong />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage