import React from 'react'

const About = () => {
  return (
    <div className='bg-[#CDEA68] h-[83vw] w-full rounded-tl-3xl rounded-tr-3xl text-zinc-800 '>
        <p className='text-6xl font-["Neue_Montreal"] py-24 px-14'>
            Ochi is a strategic presentation agency for forward-thinking businesses that need to
            <u>raise funds</u>
            , <u>sell products</u>
            , <u>explain complex ideas</u>
            , and <u>hire great people</u>.
        </p>
        <div className='border-t-2 border-b-2 border-[#B09044] h-[24vw] flex justify-between px-14 py-4 font-["Neue_Montreal"] font-medium'>
            <div>What you can expect:</div>
            <div className='flex gap-36 mr-40'>
                <div className='w-[18vw] mr-3'>
                    <div>
                        We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
                    </div>
                    <div className='mt-8'>
                        We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                    </div>
                </div>
                <div className='mt-24'>
                    <div>S:</div>
                    <div className='flex flex-col mt-3'>
                        <a className='underline' href="https://www.instagram.com/ochi_design/">Instagram</a>
                        <a href="https://www.behance.net/ochi_design">Behance</a>
                        <a href="https://www.facebook.com/profile.php?id=100067218942460">Facebook</a>
                        <a href="https://www.linkedin.com/company/ochi-design/">Linkedin</a>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex px-14 justify-between'>
            <div className='py-4'>
                <div className='text-6xl text-zinc-950 tracking-tighter'>Our approach:</div>
                <button className='w-[12vw] h-14 bg-zinc-950 rounded-full flex gap-10 justify-center items-center text-white mt-6'>
                    <div>READ MORE</div>
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='py-4'>
                <img className='rounded-lg' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About