import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import BlazingFastText from './blazingFastText'

gsap.registerPlugin(ScrollTrigger) 

const FeatureAnimation = () => {
        useGSAP(() => {
    
            const tl = gsap.timeline({
                scrollTrigger: {
                  pin: true,
                  trigger: "#outerDiv",
                  start: "top 25%",
                  markers: true,
                  pinReparent: true,
                  end: "bottom 25%",
                },
              });
            
        })
    return (
        <>
        <div id='outerDiv' className="h-[1000px]
        max-w-screen mb-[150px] flex justify-center border-[20px] border-mainPink">
        
            <div id='innerDiv' className="
            border-8 border-[#F00] max-h-[400px] 2xl:max-w-[1600px] 2xl:min-w-[1600px]
            ">
                <h1 className='text-mainPink font-[TT-Autonomous-Mono-Variable] font-thin max-w-fit text-[1rem]
                text-[1.9rem] 2xl:text-[3rem]'>
                    BLAZING FAST DEVELOPMENT WORKFLOW.</h1>
                    
                <div className=' text-white text-center mt-[60px] font-[TT-Autonomous-Mono-Variable] font-light flex flex-wrap height-fit text-[1.7rem]
                md:text-[1.5rem] relative
                2xl:text-[3rem]'>
                    <p className='text-left opacity-20'>Charlemagne is designed with speed in mind, in query simplicity, in an integrated AI tool for schema creation and in response times, so that you can ship a high quality app fast.</p>
                    <p className='text-left absolute'>Charlemagne is designed with speed in mind, in query simplicity, in an integrated AI tool for schema creation and in response times, so that you can ship a high quality app fast.</p>
                </div>
            </div>
        </div>

        </>
    );
}
 
export default FeatureAnimation;