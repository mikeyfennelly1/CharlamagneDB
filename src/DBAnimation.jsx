import {  useScroll, motion, useMotionValueEvent, useTransform, AnimatePresence} from 'framer-motion';

function DBAnimation() {
    const { scrollYProgress, scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest)
      })


      const  scaleProgress = useTransform(scrollYProgress, [0, 0.5], [0, 0.25]);
      const positionProgress = useTransform(scrollYProgress, [0, 0.5], [0, 0.25]);
    return (
        <>
        <section className="">
            {/* <motion.div style={{ scaleY: scaleProgress }}
                        whileHover={{ scale: 1.2 }}
                        className="fixed rounded-full border-2 w-[400px] h-[400px] mx-[calc(50vw-200px)] top-[calc(47vh-200px)] opacity-10
                            sm:w-[600px] sm:h-[600px] sm:mx-[calc(50vw-300px)] sm:top-[calc(50vh-300px)]">
            </motion.div>
            <motion.div style={{ scaleY: scaleProgress }}
                        whileHover={{ scale: 1.2 }}
                        className="fixed rounded-full border-2 w-[400px] h-[400px] mx-[calc(50vw-200px)] top-[calc(47vh-200px)] opacity-10
                            sm:w-[600px] sm:h-[600px] sm:mx-[calc(50vw-300px)] sm:top-[calc(50vh-300px)]">
            </motion.div>
            <motion.div style={{ scaleY: scaleProgress }}
                        whileHover={{ scale: 1.2 }}
                        className="fixed rounded-full border-2 w-[400px] h-[400px] mx-[calc(50vw-200px)] top-[calc(47vh-200px)] opacity-10
                            sm:w-[600px] sm:h-[600px] sm:mx-[calc(50vw-300px)] sm:top-[calc(50vh-300px)]">
            </motion.div>
            <motion.div style={{ scaleY: scaleProgress }}
                        whileHover={{ scale: 1.2 }}
                        className="fixed rounded-full border-2 w-[400px] h-[400px] mx-[calc(50vw-200px)] top-[calc(47vh-200px)] opacity-10
                            sm:w-[600px] sm:h-[600px] sm:mx-[calc(50vw-300px)] sm:top-[calc(50vh-300px)]">
            </motion.div> */}
            <motion.div style={{ scaleY: scaleProgress }}
                        
                        whileHover={{ scale: 1.2 }}
                        className="fixed rounded-full border-2 w-[400px] h-[400px] mx-[calc(50vw-200px)] top-[calc(47vh-200px)] opacity-10
                            sm:w-[600px] sm:h-[600px] sm:mx-[calc(50vw-300px)] sm:top-[calc(50vh-300px)]">
            </motion.div>
        </section>
        </>
    );
}

export default DBAnimation;