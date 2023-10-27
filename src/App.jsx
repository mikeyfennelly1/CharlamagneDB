import './App.css';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';

import FeatureAnimation from './FeatureAnimation.jsx';
import Terminal from './terminal.jsx';

import { useEffect, useState } from 'react';

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
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

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
