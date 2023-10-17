import { useScroll, motion, useMotionValueEvent, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const FeatureAnimation = () => {
    const blazingFast = useRef(null);
    const { scrollYProgress } = useScroll({
        target: blazingFast,
        offset: ["start end", "end start",]
    });


    const [position, setPosition] = useState('relative')

        useMotionValueEvent(scrollYProgress, "change", (latest) => {
            if (latest < 0.35) {
                setPosition('relative')
                console.log(latest + " " + position + "= relative")
            }
            else if (latest >= 0.35) {
                setPosition('fixed')
                console.log(latest + " " + position + "= fixed")
            }
        });
    // useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //     if (latest >= 0.5823293172690763) {
    //         setPosition('fixed')
    //         console.log(position)
    //     }
    // });


    const opacity = useTransform(scrollYProgress, [0.25, 0.29], [0, 1])


    



    return (
        <>
        <motion.section ref={blazingFast} className="min-h-[200vh]">
            <motion.div style={{ opacity, position }} className="top-[35vh] left-[calc(50vw-400px)] text-white border-2 max-w-[800px] justify-center">
                <motion.h1 className='text-white text-3xl font-[TT-Autonomous-Mono-Reg] max-w-fit mx-auto'>BLAZING FAST DEVELOPMENT WORKFLOW.</motion.h1>
                <motion.h2 className='text-white text-2xl text-center mt-[60px]'>
                    Charlemagne is designed with speed in mind, in query simplicity, an integrated AI tool for schema creation and in response times, so that you can ship a high quality app fast.</motion.h2>
            </motion.div>
        </motion.section>
        </>
    );
}
 
export default FeatureAnimation;