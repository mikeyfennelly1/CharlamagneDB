import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from "gsap/TextPlugin";
import SplitText from 'gsap/SplitText';
import { type } from '@testing-library/user-event/dist/type';
                    
const FeatureAnimation = () => {
    const blazingFast = useRef(null);
    const container = useRef("container")
    
    useEffect(() => {
        gsap.registerPlugin(TextPlugin, SplitText ,ScrollTrigger);
        const ChangeLetterOpacity = new gsap.timeline({
            paused: false,
            scrollTrigger: {
                markers: false,
                trigger: container.current,
                start: 'top center',
                end: '+=800 center',
                scrub: true,
                markers: true
            }
        })
        var split = new SplitText(".blazingFastText", {type: "chars, words"});
        ChangeLetterOpacity.from(split.chars, {
            stagger: 0.1,
            duration: 1,
            autoAlpha: 0,
        });
    }, [])

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
                    <p className='text-left blazingFastText'>Charlemagne is designed with speed in mind, in query simplicity, an integrated AI tool for schema creation and in response times, so that you can ship a high quality app fast.</p>
                    {/* {splitWords(phrase)} */}
                </div>
            </div>
        </div>

        </>
    );
}
 
export default FeatureAnimation;