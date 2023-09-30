import { motion } from 'framer-motion';

function AnimationPractice() {
    return (
        <>
        <motion.div animate={{ x: [0, 100, 0] }}
                    transition={{ ease: "easeInOut", duration: 0.5 }} 
        className='w-20 h-20 border-2 rounded-xl'/>
        </>
    );
}

export default AnimationPractice;