import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';


const Six = () => {

    
    useEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        createAnimations()
    }, [])
    
    const createAnimations = () => {
        const tl = gsap.timeline({
            onComplete: function () {
              tl.restart();
            }
          });
        tl.to(".image1", {
            duration: 1.5,
            autoAlpha: 0,
            x: 0,
            y: 0,
        });
        tl.to(".image1", {
            duration: 1.5,
            autoAlpha: 1,
            x: 50,
            y: 0,
        }, ">");
        tl.to(".image1", {
            duration: 1.5,
            autoAlpha: 0,
            x: 50,
            y: -50,
        }, ">");
    }



    return (
        <>
            <div className="">
                <div className="max-w-[1600px] lg:mx-auto">
                    <div className="text-mainPink font-[TT-Travels-Next-Med] mx-[50px] font-thin border-2 rounded-full max-w-fit max-h-fit px-6 py-2 text-center
                                    lg:text-[1.3rem] lg:mx-auto">
                        Companies using Charlemagne as their Primary DB
                    </div>
                    <div className=" min-h-[400px] grid grid-cols-4 items-center my-[150px]">
            <img className="opacity-0 image1 borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/aws-logo 1.png" alt="" />
            <img className="opacity-0 image1 borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/bloomberg-logo-white 1.png" alt="" />
            <img className="opacity-0 image1 borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/intelLogo 1.png" alt="" />
            <img className="opacity-0 image1 borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/openaiLogo 1.png" alt="" />
            <img className="borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/shopifyLogo 1.png" alt="" />
            <img className="borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/youtubeLogo 1.png" alt="" />
            <img className="borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/jpMorganChaseLogo.png" alt="" />
            <img className="borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/bostonScientificLogo.png" alt="" />
            <img className="borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/deloitteLogo.png" alt="" />
            <img className="borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/stripeLogo.png" alt="" />
            <img className="borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/salesForceLogo.png" alt="" />
            <img className="borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/asosLogo.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Six;