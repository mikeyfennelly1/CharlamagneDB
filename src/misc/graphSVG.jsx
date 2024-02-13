import {gsap} from 'gsap';
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);


const GraphSVG = () => {

    useGSAP(() => {
        const mainlineTl = new gsap.timeline({
            scrollTrigger: {
                trigger: '.draw-mainLine',
                start: 'top 100%',
                end: '700 100%',
                scrub: true,
            }
        })
            mainlineTl.to('.draw-mainLine', {
                duration: 0,
                autoAlpha: 1,
                drawSVG: 0,
            })
            mainlineTl.to('.draw-mainLine', {
                delay: 2,
                duration: 2,
                autoAlpha: 1,
                drawSVG: "100%",
            }, '>')

        const keyTl = new gsap.timeline({
            scrollTrigger: {
                trigger: '.draw-mainLine',
                start: '300 100%',
                end: '1000 100%',
                scrub: true,
            }
        })
            keyTl.to('.draw-key', {
                duration: 0,
                autoAlpha: "0%"
            })
            keyTl.to('.draw-key', {
                delay: 4,
                duration: 2,
                autoAlpha: "100%"
            }, '>')

        
        const b1Tl = new gsap.timeline({
            scrollTrigger: {
                trigger: '.draw-mainLine',
                start: '700 100%',
                end: '1000 100%',
                scrub: true,
            }
        })
            b1Tl.from('.background1', {
                autoAlpha: 0
            })
            b1Tl.to('.background1', {
                delay: 4,
                duration: 0,
                autoAlpha: "0%",
            })
            b1Tl.to('.background1', {
                duration: 2,
                autoAlpha: "100%",
            }, ">")

        
        const b2Tl = new gsap.timeline({
            scrollTrigger: {
                trigger: '.draw-mainLine',
                start: '400 100%',
                end: '7000 100%',
                scrub: true,
            }
        })
            b2Tl.from('.background2', {
                autoAlpha: 0,
            })
            b2Tl.to('.background2', {
                delay: 5,
                duration: 2,
                autoAlpha: "0%",
            })
            b2Tl.to('.background2', {
                duration: 2,
                autoAlpha: "100%",
            }, ">")

            const changeToVisible = new gsap.timeline({
                paused: true,
                scrollTrigger: {
                    trigger: '.changeToVisible',
                    start: 'top 100%',
                    end: 'bottom 100%',
                    scrub: false,
                }
            })
            changeToVisible.to('.changeToVisible', {
                autoAlpha: 0,
            })
            changeToVisible.to('.changeToVisible', {
                autoAlpha: 1,
                duration: 0,
            })
    
    }, [])


    return (
        <>
                    <div className="scale-75 hidden lg:block xl:scale-100 relative">
                        <svg style={{opacity: 0, visibility: 'hidden'}}  className='changeToVisible' width="602" height="343" viewBox="0 0 602 343" fill="none" xmlns="http://www.w3.org/2000/svg">

                            {/* base gradient */}
                            <path
                            className='background1'                   
                            d="M93.7536 182.626C64.1503 180.293 19.5832 169.359 1 99.3769V342.417H632.26V199.538C621.873 212.368 587.758 237.678 534.394 236.278C467.689 234.529 471.828 60.1577 426.547 63.6568C381.265 67.1558 370.31 214.117 353.512 215.867C336.714 217.616 331.359 170.962 291.433 172.128C251.508 173.295 237.144 26.3332 202.088 20.5014C167.031 14.6696 130.758 185.541 93.7536 182.626Z" fill="url(#paint0_linear_297_4068)"/>

                            {/* Second gradient overlay */}
                            <path
                            className='background2'
                             d="M93.7535 182.626C64.1503 180.293 19.5832 163.958 1 93.9764V342.417H426.546V63.6568C381.265 67.1558 370.31 214.117 353.512 215.867C336.714 217.616 331.358 170.962 291.433 172.128C251.508 173.295 237.144 26.3332 202.088 20.5014C167.031 14.6696 130.758 185.541 93.7535 182.626Z" fill="url(#paint1_linear_297_4068)"/>

                            {/* bright Pink path  */}
                            <path
                            id='path'
                            className='draw-mainLine stroke-[#FF00E5]'
                             d="M1 93.9764C19.5832 163.958 64.1503 180.293 93.7535 182.626C130.758 185.541 167.031 14.6696 202.088 20.5014C237.144 26.3332 251.508 173.295 291.433 172.128C331.358 170.962 336.714 217.616 353.512 215.867C370.31 214.117 381.265 67.1559 426.546 63.6568" stroke="#FF00E5" strokeOpacity="0.7" strokeWidth="4"/>

                            {/* White line key/pointer */}
                            <path style={{opacity: 0}}
                            className='draw-key'
                             d="M424.367 63.0735C424.367 64.5462 425.56 65.7402 427.033 65.7402C428.506 65.7402 429.7 64.5462 429.7 63.0735C429.7 61.6007 428.506 60.4068 427.033 60.4068C425.56 60.4068 424.367 61.6007 424.367 63.0735ZM426.533 63.0735V343H427.533V63.0735H426.533Z" fill="url(#paint2_linear_297_4068)" fillOpacity="1"  />

                             
                            <defs>
                            <linearGradient id="paint0_linear_297_4068" x1="326.246" y1="-234.348" x2="270.733" y2="385.555" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF00E5" stopOpacity="0.17"/>
                            <stop offset="1" stopColor="#5200FF" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_297_4068" x1="326.246" y1="-234.348" x2="270.732" y2="385.555" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF00E5" stopOpacity="0.17"/>
                            <stop offset="1" stopColor="#5200FF" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_297_4068" x1="427.533" y1="63.0735" x2="427.533" y2="343" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </div>
        </>
    );
}
 
export default GraphSVG;