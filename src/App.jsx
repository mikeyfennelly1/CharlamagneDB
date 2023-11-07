import './App.css';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';

import FeatureAnimation from './2.jsx';
import Terminal from './terminal.jsx';

import { useEffect } from 'react';

function App() {

  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

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
