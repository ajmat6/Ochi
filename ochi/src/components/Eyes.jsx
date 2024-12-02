import React, { useEffect, useState } from 'react'

// to find the angle:
// 1) find the height / 2 and width / 2 of screen.
// 2) find the location of cursor on screen.
// 3) find deltaX and deltaY: mouseX - height/ 2 and mouse deltaY
// 4) find angle: Math.atan2(deltaY, deltaX) -> in radians -> multiply by 180 / Math.PI 

const Eyes = () => {
    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        // find mouse location:
        window.addEventListener('mousemove', (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2; // window.innerWidth / 2 gives center of width of screen:
            let deltaY = mouseY - window.innerHeight / 2;
            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        })
    }, [])
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-0.7" className='relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center'>
            <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-center items-center gap-10'>
                <div className='w-[13vw] h-[13vw] bg-zinc-50 rounded-full flex items-center justify-center'>
                    <div className='relative w-[7.5vw] h-[7.5vw] bg-zinc-900 rounded-full flex items-center justify-center'>
                    {/* top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] is used with absolute position to center an element of its parent */}
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5'> 
                            <div className='w-[1.2vw] h-[1.2vw] bg-zinc-100 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='w-[13vw] h-[13vw] bg-zinc-50 rounded-full flex items-center justify-center'>
                    <div className='relative w-[7.5vw] h-[7.5vw] bg-zinc-900 rounded-full flex items-center justify-center'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5'>
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