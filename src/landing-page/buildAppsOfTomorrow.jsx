// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import MorphSVGPlugin from 'gsap/MorphSVGPlugin';
import { constructUrl } from "../utils/urlutils";

const Seven = () => {
    // const diskClasses = 'scale-y-[0.2] absolute'

    // const preDuration = 1
    // const scaleYConst = 0.2
    // const scaleXConst = 0.6
    // const leftConstant = -0
    // const radius = 150
    // const initialYConstant = 350
    // const separationConst = 0.3

    // const separation = (x) => {
    //     const result = 100 + 100*(x * separationConst)
    //     return result
    // }

    return (
        <>
            <div id="containingBox" className="min-h-[700px] mx-w-screen mx-[20px] flex justify-center lg:min-w-[1000px] pb-[100px] font-[TT-Autonomous-Mono-Reg]">
                <div className="min-h-[600px] border-2 w-[1100px] px-[50px] md:px-[100px] py-[100px] bg-[#0F0F0F] rounded-[30px] relative">
                    <div className="-[#F00] absolute z-10 min-h-[100%] text-white ">
                        <h5 className="border-l-mainPink border-l-[10px] mb-[40px] max-w-[200px] py-[5px] pl-[20px]">Start here</h5>
                        <h1 className="text-[2rem] pl-[25px] font-[TT-Travels-Next-Reg]">Build the next big thing. 
                        </h1>
                        <h1 className="text-[1.5rem] pl-[25px] font-[TT-Travels-Next-Bold] text-mainPink">( Do it fast with Charlemagne )</h1>
                        <h3 className="text-[#6b6b6b] pl-[25px] font-[TT-Autonomous-Mono-Variable] font-light text-[1.2rem] max-w-[550px]">Build the applications of tomorrow with the tools of tomorrow.</h3>
                        <a href={constructUrl('/pricing')}>
                            <button className="bg-mainPink rounded-[10px] px-[40px] py-[20px] text-black ml-[25px] hover:bg-white mt-[40px]">Try for free</button>
                        </a>
                    </div>

                    <svg viewBox="0 0 285 80" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <mask id="mask" x="0" y="0" width="100%" height="100%">
                                <rect x="0" y="0" width="100%" height="100%"/>
                            </mask>
                        </defs>

                        <rect style={{fill: "white", mask: "url(#mask)"}} x="0" y="0" width="100%" height="100%"/>
                    </svg>

                    {/* <svg className='block absolute top-[100px] left-[575px] mx-auto mb-5' width="600" height="450" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='absolute invisible' id='oval' d="M448 97.5C448 110.293 442.025 122.643 430.887 134.054C419.74 145.475 403.513 155.851 383.304 164.608C342.893 182.119 286.925 193 225 193C163.075 193 107.107 182.119 66.6962 164.608C46.4873 155.851 30.2597 145.475 19.1128 134.054C7.97491 122.643 2 110.293 2 97.5C2 84.7065 7.97491 72.3566 19.1128 60.9456C30.2597 49.5254 46.4873 39.1494 66.6962 30.3922C107.107 12.8806 163.075 2 225 2C286.925 2 342.893 12.8806 383.304 30.3922C403.513 39.1494 419.74 49.5254 430.887 60.9456C442.025 72.3566 448 84.7065 448 97.5Z" stroke="white" strokeWidth="2"/>
                        // <circle clip-path="#myClip"  className={`${diskClasses}  + top-`} strokeOpacity="0.25" id='circle1' cx="150" cy="160" r={radius} stroke="white" strokeWidth="2" fill="none"/>
                        <circle clip-path="#myClip"  className={`${diskClasses}  + top-[220px]`} strokeOpacity="0.25" id='circle2' cx="150" cy="160" r={radius} stroke="white" strokeWidth="2" fill="none"/>
                        <circle clip-path="#myClip"  className={`${diskClasses}  + top-`} strokeOpacity="0.25" id='circle3' cx="150" cy="160" r={radius} stroke="white" strokeWidth="2" fill="none"/>
                        <circle clip-path="#myClip"  className={`${diskClasses}  + top-`} strokeOpacity="0.25" id='circle4' cx="150" cy="160" r={radius} stroke="white" strokeWidth="2" fill="none"/>
                        <circle clip-path="#myClip"  className={`${diskClasses}  + top-`} strokeOpacity="0.25" id='circle5' cx="150" cy="160" r={radius} stroke="white" strokeWidth="2" fill="none"/>
                    </svg>

                    <div id="hole" className="absolute min-w-[400px] min-h-[40px] top-[450px] left-[605px] bg-black rounded-[100%] z-0">

                    </div> */}
                
                </div>


            </div>
        </>
    );
}
 
export default Seven;