import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger) 

const FeatureAnimation = () => {

    useGSAP(() => {
        const outerDiv = document.getElementById('#outerDiv')
    }, [])
    
    
    // const createAnimations = () => {
    //     // const innerDiv = document.getElementById('#innerDiv')
        useGSAP(() => {
            gsap.to('#innerDiv', {y: 360})
    
            const tl = gsap.timeline({
                scrollTrigger: {
                  pin: true,
                  trigger: "#outerDiv",
                  start: "top 50%",
                  markers: true,
                  pinReparent: true,
                //   endTrigger: "#pin-windmill-wrap",
                  end: "bottom 50%",
                },
              });
              
              tl.to("#innerDiv", {
                y: -10,
              });
        })
    return (
        <>
        <div id='outerDiv' className="h-[1000px]
        max-w-screen mb-[150px] flex justify-center border-[20px] border-mainPink">
        
            <div id='innerDiv' className="
            border-8 border-[#F00] max-h-[400px] 2xl:max-w-[1600px] 2xl:min-w-[1600px]
            ">
                {/* <BlazingFastText></BlazingFastText> */}
            </div>
        </div>

        </>
    );
}
 
export default FeatureAnimation;