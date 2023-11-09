import { useScroll, motion, useMotionValueEvent, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

                    
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
                setTop('100vh')
                console.log(latest + " " + position + "= absolute")
            }
            else if (latest > 0.333550382549243) {
                setPosition('fixed')
                setTop('33vh')
                setMarginTop('0%')
                console.log(latest + " " + position + "= fixed")
            }
            if (latest > 0.64) {
                setPosition('relative')
                setTop('62vh')
                console.log(latest + " " + position + "= relative")
            }
        });

    const opacity = useTransform(scrollYProgress, [0.25, 0.33], [0, 1])

    ///////////////////////

    const phrase = "Charlemagne is designed with speed in mind, in query simplicity, an integrated AI tool for schema creation and in response times, so that you can ship a high quality app fast."
    
    const refs = useRef([])
    const container = useRef(null)
    useEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        createAnimations()
    }, [])

    const createAnimations = () => {
        gsap.to(refs.current, {
            opacity: 1,
            ease: "none",
            stagger: 0.5,
            scrollTrigger: {
                trigger: container.current,
                start: '-=800',
                end: "+=800",
                markers: true,
                scrub: true
            },
        })
    }

    const splitWords = () => {
        let body = []
        phrase.split(" ").forEach( (word, index) => {
            const letters = splitLetters(word);
            body.push(<div key={`word_${index}`} className='mr-4 inline-block'>{letters}</div>)
        })
        return body;
    }

    const splitLetters = (word) => {
        let letters = [];
        word.split("").forEach( (letter, index) => {
            letters.push(<span ref={el => {refs.current.push(el)}} key={`letter_${index}`} className='opacity-20'>{letter}</span>)
        })
        return letters;
    }

    ///////////////////////

    return (
        <>
        <motion.section ref={blazingFast} className="min-h-[100vh]">
            <motion.div ref={container} style={{ opacity, position, top, marginTop }} className="min-h-[400px] ml-[30%] text-white max-w-[40vw]">
                <motion.h1 className='text-mainPink text-[3rem] font-[TT-Autonomous-Mono-Variable] font-thin leading max-w-fit self-left'>BLAZING FAST DEVELOPMENT WORKFLOW.</motion.h1>
                <motion.div className='text-white text-[3rem] text-center mt-[60px] font-[TT-Autonomous-Mono-Variable] font-light flex flex-wrap height-fit'>
                    {splitWords(phrase)}
                    </motion.div>
            </motion.div>
        </motion.section>

        </>
    );
}
 
export default FeatureAnimation;