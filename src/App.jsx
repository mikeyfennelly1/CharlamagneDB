import './App.css';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import DBAnimation from './DBAnimation.jsx';
import Page2 from './Page2.jsx';
import AnimationPractice from './AnimationPractice.jsx';
import { motion } from 'framer-motion';
import AiOutlineDown from "react-icons/ai";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <DBAnimation />
      <Page2/>
      <AnimationPractice />
    </>
  );
}


export default App;
