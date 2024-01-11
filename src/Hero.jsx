import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import HeroSVG from './heroSVG';
import gsap from 'gsap';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';
import TextPlugin from 'gsap/TextPlugin';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(ScrambleTextPlugin) 
gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(SplitText) 


function Hero() {  
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    })
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect( () => {
        gsap.to('.typewriter', {
          delay: 0,
          duration: 8, 
          text: "Find out for yourself why Charlemagne was voted as the most loved NoSQL database by developers in 2025.",
          ease: 'none'
        });
    })

    var split = new SplitText("#ID", {type: "chars"});
    gsap.from(split.chars, {
      duration: 1, 
      y: 100, 
      autoAlpha: 0, 
      stagger: 0.05
    });

    return(
        <>
        <motion.section 
        style={{ opacity } } 
        ref={targetRef}
        className="border-2 border-transparent min-h-screen h-[calc(100vh-60px)] max-h-[90vh] max-w-screen border-2 mx-[50px] overflow-hidden">

            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 3 }}
            className="mx-auto grid z-10 grid-rows-3 py-auto max-h-screen pt-[25vh]">

                <HeroSVG/>

                <div className='grid grid-rows-3 text-white font-[TT-Travels-Next-Light] font-bold max-w-[100vw] min-h-[00px]
                text-[1.8rem]
                sm:text-[3rem]
                md:text-[4.5rem]
                lg:mx-auto 
                xl:text-[7.5rem] xl:bg-red'>
                        <div className='pb-[20px] lg:pb-[40px]  xl:pb-[50px] block mx-auto'>THE <span className=''>EMPEROR</span> </div>
                        <div className='pb-[20px] lg:pb-[40px]  xl:pb-[50px] block mx-auto'>OF ALL</div>   
                        <div className='pb-[20px] lg:pb-[40px]  xl:pb-[50px] block mx-auto text-mainPink'>DATABASES<span className='text-white'>.</span></div>
                </div>
                <div className='flex justify-center flex-col'>
                    <div className='border-[#F00] mx-auto'>
                        <div className='typewriter text-[1.3rem] App font-[TT-Autonomous-Mono-Reg] text-white mx-auto max-w-fit block max-w-[1000px] min-h-[60px] opacity-80 text-center
                                        sm:text-[1.3rem] min-h-[100px]'>
                        </div>
                    </div>                    

                    <Link to='/CharlamagneDB/pricing' className='mx-auto'>
                        <button className="font-[TT-Autonomous-Mono-Reg] text-white text-center border-2 border-mainPink rounded-full mt-5 py-1 px-3
                                        text-lg py-2 px-5 mt-7 mx-auto
                                        hover:bg-white hover:text-black hover:font-black hover:border-white">
                            Try For Free
                        </button>
                    </Link>
                </div>
            </motion.div>
        </motion.section>
        </>
    );
}

export default Hero;