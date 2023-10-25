import { useScroll, motion, useMotionValueEvent, useTransform } from 'framer-motion';

const Terminal = () => {
    const [position, setPosition] = useState(null)

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
        <motion.div>
            <img src="../images/terminal2.png" alt="" />
        </motion.div>
        </>
    );
}
 
export default Terminal;