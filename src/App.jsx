import './App.css';
import Navbar from './misc/Navbar.jsx';
import Hero from './landing-page/Hero.jsx';
import FeatureAnimation from './landing-page/2.jsx';
import Terminal from './landing-page/terminal.jsx';
import Four from './landing-page/4.jsx'
import Five from './landing-page/5.jsx'
import Six from './landing-page/6.jsx'
import Seven from './landing-page/7.jsx'
import Eight from './landing-page/8.jsx'
import Loco from './loco/loco.jsx'
import Login from './login/login.jsx'
import Pricing from './pricing/pricing.jsx'
import Docs from './docs.jsx'
import Dashboard from './dashboard/dashboard.jsx';

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
          <Route exact path="/CharlamagneDB/dashboard">
            <Dashboard/>
          </Route>
        </Switch>
      </Router>

    </>
  );
}


export default App;
