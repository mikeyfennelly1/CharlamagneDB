import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';


const Six = () => {

    
    useEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        const delayTime1 = 0;
        const delayTime2 = 7200;
        const delayTime3 = 7200 * 2;

        (setTimeout(() => {
            createAnimations1()
        }, delayTime1));

        (setTimeout(() => {
            createAnimations2()
        }, delayTime2));
        (setTimeout(() => {
            createAnimations3()
        }, delayTime3));


    }, [])
    



    const createAnimations1 = () => {
        const tl = gsap.timeline({
            onComplete: function () {
                
              tl.restart();
            }
          });
        tl.to(".image1", {
            delay: 14.4,
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
            autoAlpha: 0,
            duration: 0,
            x: -250,
            y: 0,
            ease: "power4.in",
        }, ">");
    }
    const createAnimations2 = () => {
        const tl = gsap.timeline({
            onComplete: function () {
              tl.restart();
            }
          });
        tl.to(".image2", {
            delay: 14.4,
            autoAlpha: 0,
            duration: 0.6,
            x: -250,
            y: 0,
            ease: "power4.out",
        });
        tl.to(".image2", {
            autoAlpha: 1,
            duration: 0.6,
            x: 0,
            y: 0,
            ease: "power4.out",
        }, ">");
        tl.to(".image2", {
            autoAlpha: 1,
            delay: 5,
            duration: 1,
            x: 250,
            y: 0,
            ease: "power4.in",
        }, ">");
        tl.to(".image2", {
            autoAlpha: 0,
            duration: 0,
            x: -250,
            y: 0,
            ease: "power4.in",
        }, ">");
    }
    const createAnimations3 = () => {
        const tl = gsap.timeline({
            onComplete: function () {
              tl.restart();
            }
          });
        tl.to(".image3", {
            delay: 14.4,
            autoAlpha: 0,
            duration: 0.6,
            x: -250,
            y: 0,
            ease: "power4.out",
        });
        tl.to(".image3", {
            autoAlpha: 1,
            duration: 0.6,
            x: 0,
            y: 0,
            ease: "power4.out",
        }, ">");
        tl.to(".image3", {
            autoAlpha: 1,
            delay: 5,
            duration: 1,
            x: 0,
            y: 150,
            ease: "power4.in",
        }, ">");
        tl.to(".image3", {
            autoAlpha: 0,
            duration: 0,
            x: -250,
            y: 0,
            ease: "power4.in"
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
                    <div className="overflow-hidden min-h-[200px] items-center mb-[100px] mt-[70px] lg:my-[150px] mx-[30px] relative">
                        <div className='grid grid-cols-2 lg:grid-cols-4 py-[20px] absolute max-w-[1600px] min-w-[100%]'>
                            <div className='max-w mx-[10px] overflow-hidden max-w-[250px] mx-auto'>
                                <img className="opacity-0 image1 borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/aws-logo 1.png" alt="" />
                            </div>
                            <div className='max-w mx-[10px] overflow-hidden max-w-[250px] mx-auto'>
                                <img className="opacity-0 image3 borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/bloomberg-logo-white 1.png" alt="" />
                            </div>
                            <div className='max-w mx-[10px] overflow-hidden max-w-[250px] mx-auto'>
                                <img className="opacity-0 image2 borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/intelLogo 1.png" alt="" />
                            </div>
                            <div className='max-w mx-[10px] overflow-hidden max-w-[250px] mx-auto'>
                                <img className="opacity-0 image1 borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/openaiLogo 1.png" alt="" />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 lg:grid-cols-4 py-[20px] absolute max-w-[1600px] min-w-[100%]'>
                            <div className='max-w mx-[10px] overflow-hidden max-w-[250px] mx-auto'>
                                <img className="opacity-0 image2 borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/shopifyLogo 1.png" alt="" />
                            </div>
                            <div className='max-w mx-[10px] overflow-hidden max-w-[250px] mx-auto'>
                                <img className="opacity-0 image1 borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/youtubeLogo 1.png" alt="" />
                            </div>
                            <div className='max-w mx-[10px] overflow-hidden max-w-[250px] mx-auto'>
                                <img className="opacity-0 image3 borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/jpMorganChaseLogo.png" alt="" />
                            </div>
                            <div className='max-w mx-[10px] overflow-hidden max-w-[250px] mx-auto'>
                                <img className="opacity-0 image2 borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/bostonScientificLogo.png" alt="" />
                            </div>
                        </div>
                        

                        <div className='grid grid-cols-2 lg:grid-cols-4 py-[20px] absolute max-w-[1600px] min-w-[100%]'>
                            <div className='max-w mx-[10px] overflow-hidden max-w-[250px] mx-auto'>
                                <img className="opacity-0 image3 borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/deloitteLogo.png" alt="" />
                            </div>
                            <div className='max-w mx-[10px] overflow-hidden max-w-[250px] mx-auto'>
                                <img className="opacity-0 image2 borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/stripeLogo.png" alt="" />
                            </div>
                            <div className='max-w mx-[10px] overflow-hidden max-w-[250px] mx-auto'>
                                <img className="opacity-0 image1 borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/salesForceLogo.png" alt="" />
                            </div>
                            <div className='max-w mx-[10px] overflow-hidden max-w-[250px] mx-auto'>
                                <img className="opacity-0 image3 borer-2 border-green max-h-[100px] max-h-[100px] inline mx-auto pb-[50px]" src="../images/companyLogos/asosLogo.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Six;