import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Banner from './components/Banner/Banner'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  },[])

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Banner /> 
      <WhyChooseUs />
      <About />
      <Footer />
    </div>
  )
}

export default App