import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Typewriter from 'typewriter-effect';


// const container = {
//     show: {
//       transition: {
//         staggerChildren: 0.35,
//       },
//     },
// };

// const item = {
//     hidden: { 
//         opacity: 0,
//         y: 200 
//     },
//     show: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             ease: [0.6, 0.01, -0.05, 0.95],
//             duration: 1.6,
//         },
//     },
//     exit: {
//       opacity: 0,
//       y: -200,
//       transition: {
//         ease: "easeInOut",
//         duration: 0.8,
//     },
// },
// };




function Hero() {  
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    })
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    // useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //     console.log("Page scroll: ", latest)
    // });

    new Typewriter('#typewriter', {
        autoStart: true,
        delay: 5,
      });      

    return(
        <>
        <motion.section 
        style={{ opacity } }
        ref={targetRef}
        // initial={{ opacity: 0, y: 100 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ delay: 1, duration: 3 }}
                className="border-2 border-transparent min-h-[100vh] h-[calc(100vh-60px)] max-h-[90vh]">
                <motion.svg 
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ delay: 2, duration: 3 }} 
                className="absolute top-[0%] z-0 left-[10%]" width="1440" height="1872" viewBox="0 0 1440 1872" fill="none" xmlns="http://www.w3.org/2000/motion.svg">
                    <g filter="url(#filter0_f_276_4)">
                    <circle cx="740" cy="936" r="386" fill="#FF00D6" className='opacity-20'/>
                    </g>
                    <defs>
                    <filter id="filter0_f_276_4" x="-196" y="0" width="1872" height="1872" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="275" result="effect1_foregroundBlur_276_4"/>
                    </filter>
                    </defs>
                </motion.svg>

            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 3 }} 
            className="max-w-fit mx-auto mt-[40vh] flex flex-col relative z-10">
                <h1 className="text-[5rem] text-mainPink font-[TT-Travels-Next-Light] mx-auto mb-5 text-center 
                               sm:text-10xl sm:mb-4">
                    The emperor of all <br />databases.</h1>
                <div className='App font-[TT-Autonomous-Mono-Reg] text-center text-white mx-auto text-md max-w-[800px] px-10
                                sm:text-lg'>
                    <Typewriter
                        options={{
                            delay: 50,
                            pauseFor: 1500,
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString("Find out for yourself why Charlemagne was voted as the most loved NoSQL database by developers in 2025.")
                            .start();
                        }}
                    />
                    </div>
                {/* <h3 className="font-[TT-Autonomous-Mono-Reg] text-center text-white mx-auto text-md max-w-[800px] px-10
                                sm:text-lg">
                    Find out for yourself why Charlemagne was voted as the most loved NoSQL database by developers in 2025.</h3> */}
                <button className="font-[TT-Autonomous-Mono-Reg] text-white mx-auto  text-center border-2 rounded-full mt-5 py-1 px-3
                                sm:text-lg sm:py-2 sm:px-5 sm:mt-7
                                hover:bg-white hover:text-black hover:font-black">
                    Try For Free</button>
            </motion.div>
            <div className="max-w-fit mx-auto mt-[25vh] flex flex-col">
                <h3 className="text-white px-auto hover:cursor-pointer">
                    Learn More about Charlemagne.</h3>
            </div>
        </motion.section>
        </>
    );
}

export default Hero;