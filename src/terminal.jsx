import { useScroll, motion, useMotionValueEvent, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Terminal = () => {
    const [position, setPosition] = useState(null)
    const terminalContainer = useRef(null)

    const { scrollYProgress } = useScroll({
        target: terminalContainer,
        offset: ["start end", "end start",]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log(latest)
    });

const opacity = useTransform(scrollYProgress, [0.1, 0.23], [0, 1])

    return (
        <>
        <motion.div ref={terminalContainer} style={{ opacity }} className='min-h-[100vh] grid grid-cols-2 mx-auto ml-[calc(50vw-600px)] max-w-[1400px]'>
            <div className='pr-[75px]'>
                <p className='text-xl font-[TT-Travels-Next-Med] border-2 rounded-full max-w-fit text-white px-4'>AI Driven</p>
                <h2 className='text-mainPink text-5xl pb-[50px] pt-[30px] font-[TT-Autonomous-Mono-Variable] block max-w-[500px]'>EASY QUERY</h2>
                <p className='text-white text-2xl pt-[50px] font-[TT-Autonomous-Mono-Variable] inline max-w-[500px]'>The first databse to have easy query prompting through the command line. We have integrated generative AI to build schemas for you from the ground up, so you can spend less time doing and more time delivering.</p>
            </div>
            <img src="../images/terminal2.png" alt="" className='inline'/>
        </motion.div>
        </>
    );
}
 
export default Terminal;