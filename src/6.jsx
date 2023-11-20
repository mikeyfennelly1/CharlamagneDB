import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';


const Six = () => {

    
    useEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        createAnimationsA()
    }, [])
    
    const createAnimationsA = () => {
        const tl = gsap.timeline({
            onComplete: function () {
              tl.restart();
            }
          });
        tl.to(".image1", {
            autoAlpha: 0,
            duration: 0.6,
            x: -250,
            y: 0,
            ease: "power4.out",
        });
        tl.to(".image1", {
            autoAlpha: 1,
            duration: 0.6,
            x: 0,
            y: 0,
            ease: "power4.out",
        }, ">");
        tl.to(".image1", {
            autoAlpha: 1,
            delay: 5,
            duration: 1,
            x: 0,
            y: -150,
            ease: "power4.in",
        }, ">");
        tl.to(".image1", {
            autoAlpha: 1,
            duration: 0,
            x: -250,
            y: 0,
            ease: "power4.in",
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
                    <div className="overflow-hidden border-2 border-white min-h-[400px] grid grid-cols-4 items-center my-[150px]">
                            <div className='border-2 border-white max-w overflow-hidden max-w-[250px] mx-auto'>
                                <img className="opacity-0 image1 borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/aws-logo 1.png" alt="" />
                            </div>
                            <div className='border-2 border-white max-w overflow-hidden max-w-[250px] mx-auto'>
                                <img className="opacity-0 image1 borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/bloomberg-logo-white 1.png" alt="" />
                            </div>
                            <div className='border-2 border-white max-w overflow-hidden max-w-[250px] mx-auto'>
                                <img className="opacity-0 image1 borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/intelLogo 1.png" alt="" />
                            </div>
                            <div className='border-2 border-white max-w overflow-hidden max-w-[250px] mx-auto'>
                                <img className="opacity-0 image1 borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/openaiLogo 1.png" alt="" />
                            </div>
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