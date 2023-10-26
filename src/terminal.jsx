import { useScroll, motion, useMotionValueEvent, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/all';

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

    ///////////////////////////////
    
    
    const words = ["Create a schema for my ecommerce store, so that I can track my customers' names, orders and locations."]
let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", duration: 1, repeat: -1})

let promptTL = gsap.timeline()

let masterTl = gsap.timeline()


words.forEach(word => {
    let tl = gsap.timeline({repeat: 1})
    tl.to('.ccc', {duration: 1, text: word})
    masterTl.add(tl)
})

const yourElement = useRef(null)
gsap.to(yourElement, {
    duration: 2,
    text: "This is the new text",
    ease: "none",
  });

    return (
        <>
        <motion.div ref={terminalContainer} style={{ opacity }} className='min-h-[100vh] grid grid-cols-2 mx-auto ml-[calc(50vw-600px)] max-w-[1400px]'>
            <div className='pr-[75px]'>
                <p className='text-xl font-[TT-Travels-Next-Med] border-2 rounded-full max-w-fit text-white px-4'>AI Driven</p>
                <h2 className='text-mainPink text-5xl pb-[50px] pt-[30px] font-[TT-Autonomous-Mono-Variable] block max-w-[500px]'>SCHEMA CREATION</h2>
                <p className='text-white text-2xl pt-[50px] font-[TT-Autonomous-Mono-Variable] inline max-w-[500px]'>The first databse to have easy query prompting through the command line. We have integrated generative AI to build schemas for you from the ground up, so you can spend less time doing and more time delivering.</p>
            </div>
            <div className='relative'>
                <img src="../images/terminal2.png" alt="" className='inline'/>
                    <p ref={yourElement} className='ccc font-[SourceCodePro-Medium] text-[#00ff9d] absolute top-10 left-8'>cdb prompt: <span className='text-white'>"Create a schema in JS for my ecommerce store, so that I can track my customers' names, orders and locations."</span></p>
                    <div className='cursor h-[2px] w-2 bg-white'></div>
                        <pre className='response font-[SourceCodePro-Medium] text-[#00ff9d] absolute top-[130px] left-8'>
                            const customerSchema = new cdb.Schema
                            
                            name: 
                                type: String,
                                required: true,
                            ,
                            subscribedToChannel: 
                                type: String,
                                required: true,
                            ,
                            subscribeDate: 
                                type: Date,
                                required: true,
                                default: Date.now
                         </pre>
            </div>
        </motion.div>
        </>
    );
}
 
export default Terminal;