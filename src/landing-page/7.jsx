import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import MorphSVGPlugin from 'gsap/MorphSVGPlugin';

const Seven = () => {
    const diskVisibility = ''

    const scaleYConst = 0.4
    const scaleXConst = 0.6
    const leftConstant = -0
    const radius = 100
    const initialYConstant = 350
    const separationConst = 0.3


    const separation = (x) => {
        const result = 100 + 100*(x * separationConst)
        return result
    }

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(MorphSVGPlugin)
        MorphSVGPlugin.convertToPath("#circle1");
        MorphSVGPlugin.convertToPath("#circle2");
        MorphSVGPlugin.convertToPath("#circle3");
        MorphSVGPlugin.convertToPath("#circle4");
        MorphSVGPlugin.convertToPath("#circle5");
        const holeTl = new gsap.timeline({
            scrollTrigger: {
                trigger: '#containingBox',
                start: 'top 100%',
                end: 'top 100%',
                scrub: false,
                markers: true,
            }
        })
        holeTl.from('#hole', {
            duration: 1,
            ease: "back.inOut",
            scale: 0,
            opacity: 0.2,
        })
        
        const circleTl1 = new gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: '#containingBox',
                start: 'top 100%',
                end: 'top 100%',
                scrub: false,
                markers: true,
            }
        })
        circleTl1.from('#circle1', {
            duration: 1.5,
            ease: "power4.inOut",
            y: initialYConstant,
            opacity: 0.2,
        })
        circleTl1.to('#circle1', {
            morphSVG: '#oval',
            duration: 1.5,
            scaleX: scaleXConst,
            scaleY: scaleYConst,
            x: leftConstant,
            y: separation(0),
            ease: "power4.inOut",
        })

        const circleTl2 = new gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: '#containingBox',
                start: 'top 100%',
                end: 'top 100%',
                scrub: false,
                markers: true,
            }
        })
        circleTl2.from('#circle2', {
            duration: 1.5,
            ease: "power4.inOut",
            y: initialYConstant,
            opacity: 0.2,
        })
        circleTl2.to('#circle2', {
            morphSVG: '#oval',
            duration: 1.5,
            scaleX: scaleXConst,
            scaleY: scaleYConst,
            x: leftConstant,
            y: separation(1),
            ease: "power4.inOut",
        })

        const circleTl3 = new gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: '#containingBox',
                start: 'top 100%',
                end: 'top 100%',
                scrub: false,
                markers: true,
            }
        })
        circleTl3.from('#circle3', {
            duration: 1.5,
            ease: "power4.inOut",
            y: initialYConstant,
            opacity: 0.2,
        })
        circleTl3.to('#circle3', {
            morphSVG: '#oval',
            duration: 1.5,
            scaleX: scaleXConst,
            scaleY: scaleYConst,
            x: leftConstant,
            y: separation(2),
            ease: "power4.inOut",
        })

        const circleTl4 = new gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: '#containingBox',
                start: 'top 100%',
                end: 'top 100%',
                scrub: false,
                markers: true,
            }
        })
        circleTl4.from('#circle4', {
            duration: 1.5,
            ease: "power4.inOut",
            y: initialYConstant,
            opacity: 0.2,
        })
        circleTl4.to('#circle4', {
            morphSVG: '#oval',
            duration: 1.5,
            scaleX: scaleXConst,
            scaleY: scaleYConst,
            x: leftConstant,
            y: separation(-1),
            ease: "power4.inOut",
        })

        const circleTl5 = new gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: '#containingBox',
                start: 'top 100%',
                end: 'top 100%',
                scrub: false,
                markers: true,
            }
        })
        circleTl5.from('#circle5', {
            duration: 1.5,
            ease: "power4.inOut",
            y: initialYConstant,
            opacity: 0.2,
        })
        circleTl5.to('#circle5', {
            morphSVG: '#oval',
            duration: 1.5,
            scaleX: scaleXConst,
            scaleY: scaleYConst,
            x: leftConstant,
            y: separation(-2),
            ease: "power4.inOut",
        })
    }, [])

    return (
        <>
            <div id="containingBox" className="min-h-[700px] flex justify-center min-w-[1000px]  pb-[100px] font-[TT-Autonomous-Mono-Reg]">


                <div className="min-h-[600px] w-[1100px] px-[100px] py-[100px] bg-[#0F0F0F] rounded-[30px] relative">
                    <div className="-[#F00] absolute z-10 min-h-[100%] text-white ">
                        <h5 className="border-l-mainPink border-l-[10px] mb-[40px] max-w-[200px] py-[5px] pl-[20px]">Start here</h5>
                        <h1 className="text-[2rem] pl-[25px] font-[TT-Travels-Next-Reg]">Build the next big thing. 
                        </h1>
                        <h1 className="text-[1.5rem] pl-[25px] font-[TT-Travels-Next-Bold] text-mainPink">( Do it fast with Charlemagne )</h1>
                        <h3 className="text-[#6b6b6b] pl-[25px] font-[TT-Autonomous-Mono-Variable] font-light text-[1.2rem] max-w-[550px]">Build the applications of tomorrow with the tools of tomorrow.</h3>
                        <button className="bg-mainPink rounded-[10px] px-[40px] py-[20px] text-black ml-[25px] hover:bg-white mt-[40px]">Try for free</button>
                    </div>

                    <svg className='block absolute top-[100px] left-[575px] mx-auto mb-5' width="600" height="450" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <clipPath id="myClip">
                        <circle cx="150" cy="180" r="200" className="absolute y-[100px]"/>
                    </clipPath>
                        <path className='absolute invisible' id='oval' d="M448 97.5C448 110.293 442.025 122.643 430.887 134.054C419.74 145.475 403.513 155.851 383.304 164.608C342.893 182.119 286.925 193 225 193C163.075 193 107.107 182.119 66.6962 164.608C46.4873 155.851 30.2597 145.475 19.1128 134.054C7.97491 122.643 2 110.293 2 97.5C2 84.7065 7.97491 72.3566 19.1128 60.9456C30.2597 49.5254 46.4873 39.1494 66.6962 30.3922C107.107 12.8806 163.075 2 225 2C286.925 2 342.893 12.8806 383.304 30.3922C403.513 39.1494 419.74 49.5254 430.887 60.9456C442.025 72.3566 448 84.7065 448 97.5Z" stroke="white" strokeWidth="2"/>
                        <circle clip-path="#myClip"  className={diskVisibility} strokeOpacity="0.25" id='circle1' cx="150" cy="160" r={radius} stroke="white" strokeWidth="2" fill="none"/>
                        <circle clip-path="#myClip"  className={diskVisibility} strokeOpacity="0.25" id='circle2' cx="150" cy="160" r={radius} stroke="white" strokeWidth="2" fill="none"/>
                        <circle clip-path="#myClip"  className={diskVisibility} strokeOpacity="0.25" id='circle3' cx="150" cy="160" r={radius} stroke="white" strokeWidth="2" fill="none"/>
                        <circle clip-path="#myClip"  className={diskVisibility} strokeOpacity="0.25" id='circle4' cx="150" cy="160" r={radius} stroke="white" strokeWidth="2" fill="none"/>
                        <circle clip-path="#myClip"  className={diskVisibility} strokeOpacity="0.25" id='circle5' cx="150" cy="160" r={radius} stroke="white" strokeWidth="2" fill="none"/>
                    </svg>

                    <div id="hole" className="absolute min-w-[400px] min-h-[40px] top-[450px] left-[605px] bg-black rounded-[100%] z-0">

                    </div>
                
                </div>


            </div>
        </>
    );
}
 
export default Seven;