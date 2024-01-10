import { motion, useTransform } from 'framer-motion';
import { useRef } from 'react';

function DBAnimation() {
    const targetRef = useRef(null);

    const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [0, 0.25]);

    const y2 = useTransform(
        scrollYProgress,
        [0.55, 0.8],
        ["-20%", "-50%"]
    );
    const y1 = useTransform(
        scrollYProgress,
        [0.55, 0.8],
        ["-20%", "-35%"]
    );
    const y0 = useTransform(
        scrollYProgress,
        [0.55, 0.8],
        ["-20%", "-20%"]
    );
    const yMinus1 = useTransform(
        scrollYProgress,
        [0.55, 0.8],
        ["-20%", "-5%"]
    );
    const yMinus2 = useTransform(
        scrollYProgress,
        [0.55, 0.8],
        ["-20%", "10%"]
    );
    const scaleTiming = useTransform(
        scrollYProgress,
        [0.8, 1],
        [1, 1.2]
    )

    const opacity = useTransform(scrollYProgress, [0.25, 0.5], ["0%", "100%"])
    const opacityH = useTransform(scrollYProgress, [0.55, 0.8], ["0%", "100%"])


    return (
        <>
            <motion.section ref={targetRef} className="border-2 min-h-[400vh]">
                <motion.h1 style={{ y: yMinus1, opacity: opacityH }} className="text-mainPink text-2xl font-[TT-Autonomous-Mono-Reg] mx-[calc(50vw-800px)] top-[43vh] underline font-black">Ultimate Reliability</motion.h1>





                <motion.div style={{ scaleY: scaleProgress, y: yMinus2, opacity }}
                    className="fixed rounded-full border-2 w-[400px] h-[400px] mx-[calc(50vw-200px)] top-[calc(47vh-200px)] opacity-50 cursor-pointer
                                sm:w-[600px] sm:h-[600px] sm:mx-[calc(50vw-300px)] sm:top-[calc(50vh-300px)]">
                </motion.div>
                <motion.div style={{ scaleY: scaleProgress, y: yMinus1, opacity }}

                    className="fixed rounded-full border-2 w-[400px] h-[400px] mx-[calc(50vw-200px)] top-[calc(47vh-200px)] opacity-50 cursor-pointer
                                sm:w-[600px] sm:h-[600px] sm:mx-[calc(50vw-300px)] sm:top-[calc(50vh-300px)]">
                </motion.div>
                <motion.div style={{ scaleY: scaleProgress, y: y0, opacity }}

                    className="fixed rounded-full border-2 w-[400px] h-[400px] mx-[calc(50vw-200px)] top-[calc(47vh-200px)] opacity-50 cursor-pointer
                                sm:w-[600px] sm:h-[600px] sm:mx-[calc(50vw-300px)] sm:top-[calc(50vh-300px)]">
                </motion.div>
                <motion.div style={{ scaleY: scaleProgress, y: y1, opacity }}

                    className="fixed rounded-full border-2 w-[400px] h-[400px] mx-[calc(50vw-200px)] top-[calc(47vh-200px)] opacity-50 cursor-pointer
                                sm:w-[600px] sm:h-[600px] sm:mx-[calc(50vw-300px)] sm:top-[calc(50vh-300px)]">
                </motion.div>
                <motion.div style={{ scaleY: scaleProgress, y: y2, opacity, scale: scaleTiming }}

                    className="fixed rounded-full border-2 w-[400px] h-[400px] mx-[calc(50vw-200px)] top-[calc(47vh-200px)] opacity-50 cursor-pointer
                                sm:w-[600px] sm:h-[600px] sm:mx-[calc(50vw-300px)] sm:top-[calc(50vh-300px)]">
                </motion.div>
            </motion.section>

        </>
    );
}

export default DBAnimation;