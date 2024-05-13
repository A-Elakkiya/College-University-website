import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';

const App = () => {

  // To play the video
  const [playState, setPlayState] = useState(false)
  return (
    <>
      <Navbar />
      <Hero />
      <div className='container'>
        <Navbar />
        <Title subTitle='OUR PROGRAMS' title='What We Offer' />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle='GALLERY' title='Campus Photos' />
        <Campus />
        <Title subTitle='TESTIMONIALS' title='What Student Says' />
        <Testimonials />
        <Title subTitle='CONTACT US' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </>
  )
}

export default App;