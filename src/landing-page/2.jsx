import { useScroll, motion, useMotionValueEvent, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
                    
const FeatureAnimation = () => {
    const blazingFast = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: blazingFast,
    //     offset: ["start end", "end start",]
    // });


    // const [position, setPosition] = useState(null)
    // const [top, setTop] = useState(null)
    // const [marginTop, setMarginTop] = useState(null)

    // console.log("window.innerWidth:" + window.innerWidth)

    //     useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //         if (latest <= 0.333550382549243) {
    //             setPosition('absolute')
    //             setTop('100vh')
    //         }
    //         else if (latest > 0.333550382549243 & window.innerWidth > 1600) {
    //             setPosition('fixed')
    //             setTop('33vh')
    //             setMarginTop('0%')
    //         } else if (latest > 0.333550382549243 & window.innerWidth < 1600) {
    //             setPosition('fixed')
    //             setTop('10vh')
    //             setMarginTop('0%')
    //         }
    //         if (latest > 0.64) {
    //             setPosition('relative')
    //             setTop('62vh')
    //         }
    //     });

    // const opacity = useTransform(scrollYProgress, [0.25, 0.33], [0, 1])

    ///////////////////////

    const phrase = "Charlemagne is designed with speed in mind, in query simplicity, an integrated AI tool for schema creation and in response times, so that you can ship a high quality app fast."
    
    const refs = useRef([])
    const container = useRef(null)
    useEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        // createAnimations()
    }, [])

    // const createAnimations = () => {
    //     gsap.to(refs.current, {
    //         opacity: 1,
    //         ease: "none",
    //         stagger: 0.5,
    //         scrollTrigger: {
    //             trigger: container.current,
    //             start: '-=800',
    //             end: "+=800",
    //             scrub: true
    //         },
    //     })
    // }

    // const splitWords = () => {
    //     let body = []
    //     phrase.split(" ").forEach( (word, index) => {
    //         const letters = splitLetters(word);
    //         body.push(<div key={`word_${index}`} className='mr-4 inline-block'>{letters}</div>)
    //     })
    //     console.log(body)
    //     return body;
    // }

    // const splitLetters = (word) => {
    //     let letters = [];
    //     word.split("").forEach( (letter, index) => {
    //         letters.push(<span ref={el => {refs.current.push(el)}} key={`letter_${index}`} className='opacity-20'>{letter}</span>)
    //     })
    //     return letters;
    // }

    ///////////////////////
    useEffect(() => {
        createAnimations()
    }, [])

    const createAnimations = () => {
        var split = new SplitText("#ID");
        //now animate each character into place from 100px above, fading in:
        gsap.from(split.chars, {
            duration: 0.5,
            autoAlpha: 0,
            stagger: 0.4,
            scrollTrigger: {
                trigger: container.current,
                start: '-=800',
                end: "+=800",
                scrub: true
            },
        });
    }

    return (
        <>
        <div ref={blazingFast} className="min-h-[100vh] px-auto max-w-screen mb-[150px] flex justify-center lg:mb-0">
            <div ref={container} className="min-h-[400px] text-white max-w-[90vw] 
            2xl:max-w-[1600px]">
                <h1 className='text-mainPink font-[TT-Autonomous-Mono-Variable] font-thin max-w-fit text-[1rem]
                text-[1.9rem] 2xl:text-[3rem]'>
                    BLAZING FAST DEVELOPMENT WORKFLOW.</h1>
                <div className='text-white text-center mt-[60px] font-[TT-Autonomous-Mono-Variable] font-light flex flex-wrap height-fit text-[1.7rem]
                md:text-[1.5rem]
                2xl:text-[3rem]'>
                    <p id='ID' className='text-left'>Charlemagne is designed with speed in mind, in query simplicity, an integrated AI tool for schema creation and in response times, so that you can ship a high quality app fast.</p>
                    {/* {splitWords(phrase)} */}
                </div>
            </div>
        </div>

        </>
    );
}
 
export default FeatureAnimation;