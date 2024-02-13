import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger) 
gsap.registerPlugin(TextPlugin)

const FeatureAnimation = () => {
    useGSAP(() => {
            const tl2 = gsap.timeline({
              scrollTrigger: {
                trigger: "#outerDiv",
                start: "-=200 25%",
                end: "200 25%",
                scrub: true,
              },
            });
            tl2.from("#title", {
              autoAlpha: 0
            })
            tl2.to("#title", {
              autoAlpha: 1
            })


            const tl = gsap.timeline({
                scrollTrigger: {
                  pin: true,
                  trigger: "#outerDiv",
                  start: "top 25%",
                  end: "bottom 25%",
                  scrub: true,
                },
              });
              tl.to("#typingText", {
                text: "Charlemagne is designed with speed in mind, in query simplicity, in an integrated AI tool for schema creation and in response times, so that you can ship a high quality app fast.",
                ease: "none",
                duration: 2,
              });
              
        })

    return (
        <>
        <div id='outerDiv' className="h-[350px] sm:h-[700px]
        max-w-screen mb-[150px] flex justify-center">
        
            <div id='innerDiv' className="
            max-h-[600px] px-[50px] sm:px-[100px] min-w-[100%] 2xl:max-w-[1600px] 2xl:min-w-[1600px] 
            ">
                <h1 id="title" className='text-mainPink font-[TT-Autonomous-Mono-Variable] font-thin max-w-fit
                text-[0.8rem]
                md:text-[2rem]
                lg:text-[2.4rem] 2xl:text-[3rem]'>
                    BLAZING FAST DEVELOPMENT WORKFLOW.</h1>
                    
                <div className=' text-white text-center mt-[30px] sm:mt-[60px] font-[TT-Autonomous-Mono-Variable] font-light flex flex-wrap height-fit
                text-[2rem] relative
                2xl:text-[3rem]'>
                    <p id='typingText' className='text-left absolute text-[1.4rem] md:text-[1.5rem] 2xl:text-[3rem]'></p>
                </div>
            </div>
        </div>

        </>
    );
}
 
export default FeatureAnimation;