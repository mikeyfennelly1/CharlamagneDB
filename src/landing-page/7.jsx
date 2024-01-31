import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import MorphSVGPlugin from 'gsap/MorphSVGPlugin';

const Seven = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const circleTl = new gsap.timeline({
            scrollTrigger: {
                trigger: '#containingBox',
                start: 'top 100%',
                end: 'bottom 100%',
                scrub: false,
                markers: true,
            }
        })
    })

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
                        <circle className='' strokeOpacity="0.25" id='circle5' cx="150" cy="150" r="150" stroke="white" strokeWidth="2" fill="none"/>
                    </svg>

                    <div className="absolute min-w-[400px] min-h-[40px] top-[450px] left-[600px] bg-black rounded-[100%] z-0">

                    </div>
                
                </div>


            </div>
        </>
    );
}
 
export default Seven;