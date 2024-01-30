import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from "gsap/TextPlugin";
import SplitText from 'gsap/SplitText';
import { type } from '@testing-library/user-event/dist/type';
                    
const FeatureAnimation = () => {
    const blazingFast = useRef(null);
    const container = useRef("container")
    
    // useEffect(() => {
    //     gsap.registerPlugin(TextPlugin, SplitText ,ScrollTrigger);
    //     const ChangeLetterOpacity = new gsap.timeline({
    //         paused: false,
    //         scrollTrigger: {
    //             markers: false,
    //             trigger: container.current,
    //             start: 'top center',
    //             end: '+=800 center',
    //             scrub: true,
    //             markers: true
    //         }
            
    //     })
    //     var split = new SplitText(".blazingFastText", {type: "chars, words"});
    //     ChangeLetterOpacity.from(split.chars, {
    //         stagger: 0.5,
    //         duration: 1,
    //         autoAlpha: 0,
    //     });

    // }, [])

    ScrollTrigger.create({
        trigger: container.current,
        start: 'top center',
        end: '+=800 center',
        markers: true,
        onToggle: (self) => console.log("toggled, isActive:", self.isActive),
        onUpdate: (self) => {
          console.log(
            "progress:",
            self.progress.toFixed(3),
            "direction:",
            self.direction,
            "velocity",
            self.getVelocity()
          );
        },
      });

    // When scroller-start/scroller-end reaches half way between middle and end, set position of {container} top be fixed
    // When bottom of container reaches bottom of {blazingFast} set the position back to remain there

    // {blazingFast} position = relative
    
    // {container} position = absolute[until ss/se reaches midpoint of {container}]
        // then: {container} position = fixed/inline with ss/se[until bottom of {container} reaches bottom of {blazingFast}]
            // then: {container} position = bottom of {container} touching bottom of {blazingFast} but in a position relative to {blazingFast}
    // useEffect(() => {
    //     const blazingFastElement = document.getElementById("blazingFast")
    //     console.log("blazingFastElement", blazingFastElement)
    //     const rect = blazingFastElement.getBoundingClientRect();
    //     console.log("rect", rect)
    //     const left_blazingFastElement = rect.left.toFixed()
    //     console.log("left_blazingFastElement", left_blazingFastElement)


    // }, [])
    
    return (
        <>
        <div ref={blazingFast} id='blazingFast' className="blazingFast border-2 min-h-[100vh] px-auto max-w-screen mb-[150px] flex justify-center lg:mb-0 relative">
            <div ref={container} style={{}} className="container border-2 relative border-mainPink min-h-[400px] text-white max-w-[90vw] 
            2xl:max-w-[1600px] 2xl:min-w-[1600px]">
                <h1 className='text-mainPink font-[TT-Autonomous-Mono-Variable] font-thin max-w-fit text-[1rem]
                text-[1.9rem] 2xl:text-[3rem]'>
                    BLAZING FAST DEVELOPMENT WORKFLOW.</h1>
                <div className='text-white text-center mt-[60px] font-[TT-Autonomous-Mono-Variable] font-light flex flex-wrap height-fit text-[1.7rem]
                md:text-[1.5rem]
                2xl:text-[3rem]'>
                    <p className='text-left absolute opacity-20'>Charlemagne is designed with speed in mind, in query simplicity, in an integrated AI tool for schema creation and in response times, so that you can ship a high quality app fast.</p>
                    <p className='text-left blazingFastText absolute'>Charlemagne is designed with speed in mind, in query simplicity, in an integrated AI tool for schema creation and in response times, so that you can ship a high quality app fast.</p>
                    {/* {splitWords(phrase)} */}
                </div>
            </div>
        </div>

        </>
    );
}
 
export default FeatureAnimation;