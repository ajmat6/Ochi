import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Footer from './components/Footer'
import Cards from './components/Cards'
import LocomotiveScroll from 'locomotive-scroll'; // fetched from scroll.locomotive.ca website documentation -> to make smooth scrolling

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
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
  )
}

export default App