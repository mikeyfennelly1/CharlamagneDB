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
import Docs from './docs/docs.jsx'
import Dashboard from './dashboard/dashboard.jsx';
import SignUp from './signup/SignUp.jsx';
import 'intro.js/introjs.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebaseAuth.js'

import gsap from 'gsap'
import { constructUrl } from './utils/urlutils'
import { useGSAP } from '@gsap/react';
import { FaGithub } from 'react-icons/fa';

function App() {

  useGSAP(() => {
    const viewOnGithubTl = new gsap.timeline({

    })
      viewOnGithubTl.from("#viewOnGit", {
        duration: 1.5,
        delay: 2,
        x: 1000,
        morphSVG: "#oval1",
        ease: "power4.out",
      })
  })

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
      console.log("App mounte")
    }, [])
    
    const [user] = useAuthState(auth)

  return (
    <>
      <Router>
        <Switch>
          <Route exact path={constructUrl('/')}>
            <div className='font-[TT-Autonomous-Mono-Reg] max-w-screen overflow-x-hidden relative'>
              <a target="_blank" href="https://github.com/mikeyfennelly1/CharlamagneDB">
                <div  id='viewOnGit' className=' text-white fixed z-99 right-[50px] top-[calc(100vh-150px)] border-white  pl-[50px] py-[30px] min-w-[300px]  bg-[#0a0a0a]'>
                    <FaGithub className='absolute scale-[2] left-[30px] top-[40px]'/><h1 className='my-auto inline m-[20px] text-[1.5rem]'>Click here to see the source code on GitHub.</h1>
                </div>
              </a>
              <Hero />
              <Navbar/>
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
