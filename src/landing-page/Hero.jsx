import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';
import TextPlugin from 'gsap/TextPlugin';
import SplitText from 'gsap/SplitText';
import { Link } from 'react-router-dom';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrambleTextPlugin) 
gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(SplitText) 

function Hero() {  
    const targetRef = useRef(null);

    useEffect( () => {
        gsap.to('.typewriter', {
          delay: 0,
          duration: 8, 
          text: "Find out for yourself why Charlemagne was voted as the most loved NoSQL database by developers in 2025.",
          ease: 'none'
        });
    })

    useGSAP(() => {
        const heroOpacityTl = gsap.timeline({
            scrollTrigger: {
              trigger: targetRef.current,
              start: "25% 0%",
              end: "75% 0%",
              scrub: true,
            },
          });
          heroOpacityTl.to(targetRef.current, {
            autoAlpha: 0
          })
    })

    return(
        <>
        <section 
        // style={{ opacity } } 
        ref={targetRef}
        className="border-2 border-transparent min-h-screen h-[calc(100vh-60px)] max-h-[90vh] max-w-screen border-2 mx-[50px] overflow-hidden">

            <div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ delay: 1, duration: 3 }}
            className="mx-auto grid grid-rows-3 py-auto max-h-screen pt-[25vh]">

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
                        <div className='typewriter text-[1rem] App font-[TT-Autonomous-Mono-Reg] text-white     mx-auto max-w-fit block max-w-[1000px] opacity-80 text-center
                                        sm:text-[1.3rem] min-h-[120px]'>
                        </div>
                    </div>                    

                    <Link to='/pricing' className='mx-auto'>
                        <button className="font-[TT-Autonomous-Mono-Reg] text-white text-center border-2 border-mainPink rounded-full mt-5 py-1 px-3
                                        text-lg py-2 px-5 mt-7 mx-auto
                                        hover:bg-white hover:text-black hover:font-black hover:border-white">
                            Try For Free
                        </button>
                    </Link>
                </div>
            </div>
        </section>
        </>
    );
}

export default Hero;