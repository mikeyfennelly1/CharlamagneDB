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
import { constructUrl } from './utils/urlutils.js';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path={constructUrl('/')}>
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
          <Route exact path={constructUrl('/loco')}>
            <div>jgdijegqioj</div>
          </Route>
          <Route exact path={constructUrl('/login')}>
            <Login/>
          </Route>
          <Route exact path={constructUrl('/pricing')}>
            <Pricing/>
          </Route>
          <Route exact path={constructUrl('/docs')}>
            <Docs/>
          </Route>
        </Switch>
      </Router>

    </>
  );
}


export default App;
