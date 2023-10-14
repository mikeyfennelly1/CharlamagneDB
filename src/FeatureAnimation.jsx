import { useScroll, motion, useMotionValueEvent, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer'

const FeatureAnimation = () => {
    const { ref: blazingFast, inView: blazingFastVisible } = useInView();
    const { scrollYProgress } = useScroll({
        target: blazingFast,
        offset: ["start end", "end start",]
    });
    console.log(scrollYProgress)
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Page scroll: ", latest)
    });
    
    const opacity = useTransform(scrollYProgress, [0.18, 0.2], [0, 1])
    const position = useTransform(scrollYProgress, (pos) => {
        return pos >= 0.225 ? "fixed" : "relative"; 
    })

    console.log('blazingFastVisible', blazingFastVisible)

    return (
        <>
        <section className=' min-h-[400vh]'>
            <motion.div ref={blazingFast} style={{ opacity, position }} className=" border-2-900 min-w-100% text-white">
                <h1 ref={blazingFast} className='text-white text-lg font-[TT-Autonomous-Mono-Reg]'>BLAZING FAST DEVELOPMENT WORKFLOW.</h1>
            </motion.div>
        </section>
        </>
    );
}
 
export default FeatureAnimation;