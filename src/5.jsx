import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import serverSVG from './serverSVG.jsx';
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";


gsap.registerPlugin(DrawSVGPlugin);

const Five = () => {

    const container = useRef(null)

    const createAnimations = () => {
        const tl = gsap.timeline();
        tl.to('.draw-me', {
            drawSVG: "0 100%",
            delay: 0.5,
        });
    }
    createAnimations()

    return (
        <>
            <div className="mb-[200px] mt-[200px] max-w-screen overflow-x-hidden">
                <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 min-h-[500px]">
                    <div className="m-auto">
                            <serverSVG />
                    </div>
                    <div className="my-auto mx-auto container border-2" style={{x: 0}} ref={container}>
                        <svg width="602" height="343" viewBox="0 0 602 343" fill="none" xmlns="http://www.w3.org/2000/svg">

                            {/* base gradient */}
                            {/* <path
                                                        
                            d="M93.7536 182.626C64.1503 180.293 19.5832 169.359 1 99.3769V342.417H632.26V199.538C621.873 212.368 587.758 237.678 534.394 236.278C467.689 234.529 471.828 60.1577 426.547 63.6568C381.265 67.1558 370.31 214.117 353.512 215.867C336.714 217.616 331.359 170.962 291.433 172.128C251.508 173.295 237.144 26.3332 202.088 20.5014C167.031 14.6696 130.758 185.541 93.7536 182.626Z" fill="url(#paint0_linear_297_4068)"/>

                            {/* Second gradient overlay */}
                            {/* <path */}
                            
                            //  d="M93.7535 182.626C64.1503 180.293 19.5832 163.958 1 93.9764V342.417H426.546V63.6568C381.265 67.1558 370.31 214.117 353.512 215.867C336.714 217.616 331.358 170.962 291.433 172.128C251.508 173.295 237.144 26.3332 202.088 20.5014C167.031 14.6696 130.758 185.541 93.7535 182.626Z" fill="url(#paint1_linear_297_4068)"/>

                            {/* bright Pink path  */}
                            <path
                            id='path'
                            className='draw-me stroke-[#FF00E5]'
                             d="M1 93.9764C19.5832 163.958 64.1503 180.293 93.7535 182.626C130.758 185.541 167.031 14.6696 202.088 20.5014C237.144 26.3332 251.508 173.295 291.433 172.128C331.358 170.962 336.714 217.616 353.512 215.867C370.31 214.117 381.265 67.1559 426.546 63.6568" stroke="#FF00E5" stroke-opacity="0.7"/> */}

                            {/* White line key/pointer */}
                            <path
                             d="M424.367 63.0735C424.367 64.5462 425.56 65.7402 427.033 65.7402C428.506 65.7402 429.7 64.5462 429.7 63.0735C429.7 61.6007 428.506 60.4068 427.033 60.4068C425.56 60.4068 424.367 61.6007 424.367 63.0735ZM426.533 63.0735V343H427.533V63.0735H426.533Z" fill="url(#paint2_linear_297_4068)" fill-opacity="0.7"/>

                             
                            <defs>
                            <linearGradient id="paint0_linear_297_4068" x1="326.246" y1="-234.348" x2="270.733" y2="385.555" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF00E5" stop-opacity="0.17"/>
                            <stop offset="1" stop-color="#5200FF" stop-opacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_297_4068" x1="326.246" y1="-234.348" x2="270.732" y2="385.555" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF00E5" stop-opacity="0.17"/>
                            <stop offset="1" stop-color="#5200FF" stop-opacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_297_4068" x1="427.533" y1="63.0735" x2="427.533" y2="343" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Five;