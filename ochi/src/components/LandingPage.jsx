import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-2'>
        <div className='textStructure mt-40 px-16'>
            {
                ["We Create", "Eye-Opening", "Presentations"].map((item, index) => (
                    <div key={index} className='masker'>
                        <div className='w-fit flex items-end'>
                            {
                                index === 1 && <div className='w-[9vw] h-[4.5vw] bg-red-600'></div>
                            }
                            <h1 className='uppercase text-8xl font-["Test Founders Grotesk"] leading-[5.5vw] tracking-tighter font-medium'>{item}</h1>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='border-t-[1px] mt-56 border-zinc-700 flex px-16 justify-between py-5'>
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