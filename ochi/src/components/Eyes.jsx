import React from 'react'

const Eyes = () => {
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div className='relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center'>
            <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-center items-center gap-10'>
                <div className='w-[13vw] h-[13vw] bg-zinc-50 rounded-full flex items-center justify-center'>
                    <div className='relative w-[7.5vw] h-[7.5vw] bg-zinc-900 rounded-full flex items-center justify-center'>
                        <div className='line bg-red-500 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5'>
                            <div className='w-[1.2vw] h-[1.2vw] bg-zinc-100 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='w-[13vw] h-[13vw] bg-zinc-50 rounded-full flex items-center justify-center'>
                    <div className='relative w-[7.5vw] h-[7.5vw] bg-zinc-900 rounded-full flex items-center justify-center'>
                        <div className='line bg-red-500 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5'>
                            <div className='w-[1.2vw] h-[1.2vw] bg-zinc-100 rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes