import './App.css';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';

import FeatureAnimation from './2.jsx';
import Terminal from './terminal.jsx';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function App() {

  //////////////////////////// SCROLL smoothing
  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  //////////////////////////// MOUSE

  return (
    <>
      <Navbar />
      <Hero />
      <FeatureAnimation />
      <Terminal />
    </>
  );
}


export default App;
