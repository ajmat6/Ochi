import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Footer from './components/Footer'
import Cards from './components/Cards'
import LocomotiveScroll from 'locomotive-scroll'; // fetched from scroll.locomotive.ca website documentation -> to make smooth scrolling
import Loader from './components/Loader'
import { MyContext } from './Context/MyContext'

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const [load, setLoad] = useState(0);
  return (
    <MyContext.Provider value={{load, setLoad}}>
      {
        load < 100 ? <Loader />
        : 
      <div className='w-full text-white bg-zinc-900'>
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Featured />
        <Cards />
        <Footer />
      </div>

      }
    </MyContext.Provider>
  )
}

export default App