import { useScroll, motion, useMotionValueEvent, useTransform } from 'framer-motion';
import { useRef } from 'react';

const FeatureAnimation = () => {
    const blazingFast = useRef(null);
    const { scrollYProgress } = useScroll({
        target: blazingFast,
        offset: ["start end", "end start",]
    });
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Page scroll: ", latest)
    });
    
    const opacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1])
    const position = useTransform(scrollYProgress, (pos) => {
        return pos === 0.55 ? "fixed" : "relative";
    })




    return (
        <>
        <section className="min-h-[200vh]">
            <motion.div ref={blazingFast} style={{ opacity, position }} className="top-[40vh] left-[calc(50vw-400px)] text-white border-2 max-w-[800px] justify-center">
                <motion.h1 className='text-white text-3xl font-[TT-Autonomous-Mono-Reg] max-w-fit mx-auto'>BLAZING FAST DEVELOPMENT WORKFLOW.</motion.h1>
                <motion.h2 className='text-white text-2xl text-center mt-[60px]'>
                    Charlemagne is designed with speed in mind, in query simplicity, an integrated AI tool for schema creation and in response times, so that you can ship a high quality app fast.</motion.h2>
            </motion.div>
        </section>
        </>
    );
}
 
export default FeatureAnimation;