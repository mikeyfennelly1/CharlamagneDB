import { useScroll, motion, useMotionValueEvent, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const FeatureAnimation = () => {
    const blazingFast = useRef(null);
    const { scrollYProgress } = useScroll({
        target: blazingFast,
        offset: ["start end", "end start",]
    });


    const [position, setPosition] = useState(null)
    const [top, setTop] = useState(null)
    const [marginTop, setMarginTop] = useState(null)

        useMotionValueEvent(scrollYProgress, "change", (latest) => {
            if (latest <= 0.333550382549243) {
                setPosition('absolute')
                setTop('133vh')
                console.log(latest + " " + position + "= absolute")
            }
            else if (latest > 0.333550382549243) {
                setPosition('fixed')
                setTop('33vh')
                setMarginTop('0%')
                console.log(latest + " " + position + "= fixed")
            }
        });


    const opacity = useTransform(scrollYProgress, [0.25, 0.33], [0, 1])


    



    return (
        <>
        <motion.section ref={blazingFast} className="min-h-[200vh] border-0 border-white">
            <motion.div style={{ opacity, position, top, marginTop}} className="left-[calc(50vw-390px)] text-white max-w-[800px] justify-center">
                <motion.h1 className='text-white text-3xl font-[TT-Autonomous-Mono-Reg] max-w-fit mx-auto'>BLAZING FAST DEVELOPMENT WORKFLOW.</motion.h1>
                <motion.h2 className='text-white text-2xl text-center mt-[60px]'>
                    Charlemagne is designed with speed in mind, in query simplicity, an integrated AI tool for schema creation and in response times, so that you can ship a high quality app fast.</motion.h2>
            </motion.div>
        </motion.section>
        </>
    );
}
 
export default FeatureAnimation;