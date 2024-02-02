import './App.css';
import Navbar from './misc/Navbar.jsx';
import Hero from './landing-page/Hero.jsx';
import FeatureAnimation from './landing-page/blazingFast.jsx';
import Terminal from './landing-page/terminal.jsx';
import Four from './landing-page/betEverythingOnCDB.jsx'
import Five from './landing-page/serverAndGraph.jsx'
import Six from './landing-page/companiesUsingCDB.jsx'
import Seven from './landing-page/buildAppsOfTomorrow.jsx'
import Eight from './landing-page/footer.jsx'
import Loco from './loco/loco.jsx'
import Login from './login/login.jsx'
import Pricing from './pricing/pricing.jsx'
import Docs from './docs/docs.jsx'
import Dashboard from './dashboard/dashboard.jsx';
import SignUp from './signup/SignUp.jsx';
import Tour from './guided-tour/tour.jsx';
import TourContext from './guided-tour/tourContext';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebaseAuth.js'

import { constructUrl } from './utils/urlutils'


function App() {

  useEffect(() => {
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
    
    const [user] = useAuthState(auth)

  return (
    <>
      <Router>
        <Switch>
          <Route exact path={constructUrl('/')}>
            <div className='font-[TT-Autonomous-Mono-Reg] max-w-screen overflow-x-hidden relative'>
              <TourContext.Provider value={useState(false)}>
                <Tour />
                <Hero id="hero"/>
                <Navbar value={useState(false)}/>
              </TourContext.Provider>
              <FeatureAnimation />
              <Terminal />
              <Four />
              <Five />
              <Six />
              <Seven />
              <Eight />
            </div>
          </Route>
          <Route exact path={constructUrl('/loco')}>
            <Loco />
          </Route>
          
          <Route exact path={constructUrl('/login')}> 
              <Login/>
            {user && (
              <Redirect to={constructUrl('/dashboard')} />
            )}
          </Route>
          <Route exact path={constructUrl('/pricing')}>
            <Pricing/>
          </Route>
          <Route exact path={constructUrl('/docs')}>
            <Docs/>
          </Route>
          <Route exact path={constructUrl('/dashboard')}>
              <Dashboard/>
          </Route>
          <Route exact path={constructUrl('/signup')}>
              <SignUp />
          </Route>
        </Switch>
      </Router>
              
    </>
  );
}


export default App;
