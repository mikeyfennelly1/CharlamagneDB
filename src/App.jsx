import './App.css';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import FeatureAnimation from './2.jsx';
import Terminal from './terminal.jsx';
import Four from './4.jsx'
import Five from './5.jsx'
import Six from './6.jsx'

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
      <Four />
      <Five />
      <Six />
    </>
  );
}


export default App;
