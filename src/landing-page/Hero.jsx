import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { Link } from 'react-router-dom';
import { useGSAP } from "@gsap/react";
import { constructUrl } from '../utils/urlutils';

gsap.registerPlugin(TextPlugin)

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
        id="hero"
        ref={targetRef}
        className="border-2 border-transparent min-h-screen h-[calc(100vh-60px)] max-h-[90vh] max-w-screen border-2 sm:mx-[50px] overflow-hidden">
            <div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ delay: 1, duration: 3 }}
            className="mx-auto grid grid-rows-3 py-auto max-h-screen pt-[25vh] xl:pt-[15vh]">

                <div className='grid grid-rows-3 text-white font-[TT-Travels-Next-Light] font-bold max-w-[100vw]
                text-[2.3rem] pb-[20px]
                sm:text-[3rem]
                md:text-[4.5rem]
                lg:mx-auto
                xl:text-[8rem] xl:pb-[0px] xl:min-h-[380px]'>
                        <h1 className='sm:pb-[20px] lg:pb-[40px] min-h-[120px] xl:pb-[0px] block mx-auto'>THE EMPEROR</h1>
                        <h1 className='sm:pb-[20px] lg:pb-[40px] min-h-[120px] xl:pb-[0px] block mx-auto'>OF ALL</h1>  
                        <h1 className='sm:pb-[20px] lg:pb-[40px] min-h-[120px] xl:pb-[0px] block mx-auto text-mainPink'>DATABASES<span className='text-white'>.</span></h1>
                </div>
                <div className='flex justify-center flex-col'>
                    <div className='border-[#F00] mx-auto'>
                        <div className='typewriter text-[0.8rem] mt-[100px] xl:mt-[100px] px-[20px] font-[TT-Autonomous-Mono-Reg] text-white mx-auto max-w-fit block max-w-[1000px] opacity-80 text-center
                        sm:text-[1.3rem] min-h-[120px] xl:min-h-[250px] flex items-end'>
                            {/* Find out for yourself */}
                        </div>
                    </div>                    

                    <Link  to={constructUrl('/pricing')} className='mx-auto'>
                        <button data-cy="try" className="font-[TT-Autonomous-Mono-Reg] text-white text-center border-2 border-mainPink rounded-full py-1 px-3
                        text-lg py-2 px-5 mt-[150px] sm:mt-7 mx-auto
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