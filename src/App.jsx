import './App.css';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import DBAnimation from './DBAnimation.jsx';
import Page2 from './Page2.jsx';

import useEffect from 'react';

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
      <DBAnimation />
      <Page2 />
    </>
  );
}


export default App;
