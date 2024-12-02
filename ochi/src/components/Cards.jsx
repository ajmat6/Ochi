import React from 'react'

const Cards = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="" className='w-full flex px-14 pt-[6rem] mb-[22rem] gap-4 sticky top-0'>
        <div className='h-[50vh] w-[48%] bg-[#004D43] rounded-lg relative'>
            <img className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-16' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <div className='absolute top-[88%] left-[2%] rounded-full border-2 px-2 py-1'>&copy; 2019-2022</div>
        </div>
        <div className='flex gap-4 w-1/2'>
            <div className='w-1/2 bg-[#212121] rounded-lg relative'>
                <a href="https://clutch.co/profile/ochi-design-presentation-design-agency#summary"><img className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-20' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" /></a>
                <div className='absolute top-[88%] left-[2%] rounded-full border-2 py-1 px-2'>RATING 5.0 ON CLUTCH</div>
            </div>
            <div className='w-1/2 bg-[#212121] rounded-lg relative'>
                <a href="https://clutch.co/profile/ochi-design-presentation-design-agency#summary"><img className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-28' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" /></a>
                <div className='absolute top-[88%] left-[2%] rounded-full border-2 py-1 px-2'>BUSSINESS BOOTCAMP ALUMNI</div>
            </div>
        </div>
    </div>
  )
}

export default Cards