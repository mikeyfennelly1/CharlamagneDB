import { motion } from 'framer-motion';

function AnimationPractice() {
    return (
        <>
        <motion.div animate={{ x: 100 }} className='w-20 h-20 border-2 rounded-xl'/>
        </>
    );
}

export default AnimationPractice;