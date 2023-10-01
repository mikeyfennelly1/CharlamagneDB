import {  useScroll, motion} from 'framer-motion';

function DBAnimation() {
    const { scrollYProgress } = useScroll();
        return (
            <>
        <div className="">
            <motion.div style={{ scaleY: scrollYProgress }} className="fixed rounded-full border-2 w-[400px] h-[400px] mx-[calc(50vw-200px)] top-[calc(47vh-200px)] opacity-30
                            sm:w-[600px] sm:h-[600px] sm:mx-[calc(50vw-300px)] sm:top-[calc(50vh-300px)]">
            </motion.div>
        </div>
        </>
    );
}

export default DBAnimation;