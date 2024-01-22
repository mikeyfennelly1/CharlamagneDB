import './App.css';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import FeatureAnimation from './2.jsx';
import Terminal from './terminal.jsx';
import Four from './4.jsx'
import Five from './5.jsx'
import Six from './6.jsx'
import Seven from './7.jsx'
import Eight from './8.jsx'
import Loco from './loco.jsx'
import Login from './login.jsx'
import Pricing from './pricing.jsx'
import Docs from './docs.jsx'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useEffect } from 'react';

function App() {

  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = () => {
          new LocomotiveScroll();
        }  
        locomotiveScroll()
      }
    )()
  }, [])


  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/CharlamagneDB/">
            <div className='max-w-screen overflow-x-hidden'>
              <Navbar />
              <Hero />
              <FeatureAnimation />
              <Terminal />
              <Four />
              <Five />
              <Six />
              <Seven />
              <Eight />
            </div>
          </Route>
          <Route exact path="/CharlamagneDB/loco">
            <Loco />
          </Route>
          <Route exact path="/CharlamagneDB/login">
            <Login/>
          </Route>
          <Route exact path="/CharlamagneDB/pricing">
            <Pricing/>
          </Route>
          <Route exact path="/CharlamagneDB/docs">
            <Docs/>
          </Route>
        </Switch>
      </Router>

    </>
  );
}


export default App;
