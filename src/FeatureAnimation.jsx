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
            stagger: 0.1,
            scrollTrigger: {
                trigger: container.current,
                start: 'start',
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
        <motion.section ref={blazingFast} className="min-h-[200vh]">
            <motion.div ref={container} style={{ opacity, position, top, marginTop }} className="min-h-[400px] left-[calc(50vw-600px)] text-white max-w-[1200px]">
                <motion.h1 className='text-mainPink text-5xl font-[TT-Autonomous-Mono-Reg] max-w-fit mx-auto'>BLAZING FAST DEVELOPMENT WORKFLOW.</motion.h1>
                <motion.div className='text-white text-2xl text-center mt-[60px] font-[TT-Autonomous-Mono-Variable] font-light flex flex-wrap height-fit'>
                    {splitWords(phrase)}
                    </motion.div>
            </motion.div>
        </motion.section>

        </>
    );
}
 
export default FeatureAnimation;