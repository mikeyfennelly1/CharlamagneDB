import { useScroll, motion, useMotionValueEvent, useTransform } from 'framer-motion';
import { useRef } from 'react';

const FeatureAnimation = () => {
    const blazingFast = useRef(null);
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




    return (
        <>
        <section className="min-h-screen">
            <motion.div ref={blazingFast} style={{ opacity, position }} className="top-0 text-white">
                <motion.h1 className='text-white text-3xl font-[TT-Autonomous-Mono-Reg] max-w-fit mx-auto'>BLAZING FAST DEVELOPMENT WORKFLOW.</motion.h1>
                <motion.h2 className='text-white text-2xl text-center max-w-[100px] mx-auto mt-[100px]'>
                    Charlemagne is designed with speed in mind, in query simplicity, an integrated AI tool for schema creation and in response times, so that you can ship a high quality app fast.</motion.h2>
            </motion.div>
        </section>
        </>
    );
}
 
export default FeatureAnimation;