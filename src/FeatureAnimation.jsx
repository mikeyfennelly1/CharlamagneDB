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
    
    const opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1])
    const position = useTransform(scrollYProgress, (pos) => {
        return pos >= 0.4 ? "sticky" : "relative";
    })

    console.log('blazingFastVisible', blazingFastVisible)



    return (
        <>
        <section className="min-h-screen border-2">
            <motion.div ref={blazingFast} style={{ opacity, position }} className="top-0 text-white">
                <motion.h1 className='text-white text-lg font-[TT-Autonomous-Mono-Reg]'>BLAZING FAST DEVELOPMENT WORKFLOW.</motion.h1>
            </motion.div>
        </section>
        </>
    );
}
 
export default FeatureAnimation;