import gsap from 'gsap'
import MorphSVGPlugin from 'gsap/MorphSVGPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(MorphSVGPlugin)
gsap.registerPlugin(ScrollTrigger)

const Loco2 = () => {

    useEffect(() => {
        MorphSVGPlugin.convertToPath("#circle1");
        MorphSVGPlugin.convertToPath("#circle2");
        MorphSVGPlugin.convertToPath("#circle3");
        MorphSVGPlugin.convertToPath("#circle4");
        MorphSVGPlugin.convertToPath("#circle5");
        const c1Tl = new gsap.timeline({
            scrollTrigger: {
                trigger: '#oval1',
                scrub: false,
                start: "70% 70%",
                end: "70% 70%",
            }
        })
        c1Tl.to("#circle1", {
            duration: 1.5,
            delay: 0,
            y: 120,
            morphSVG: "#oval1",
            ease: "power4.in",
        })
        c1Tl.to("#circle1", {
            duration: 1.5,
            y: 0,
            ease: "power4.out"
        }, '>')


        const c2Tl = new gsap.timeline({
            scrollTrigger: {
                trigger: '#oval1',
                scrub: false,
                start: "70% 70%",
                end: "70% 70%",
            }
        })
        c2Tl.to("#circle2", {
            duration: 1.5,
            delay: 0,
            y: 120,
            morphSVG: "#oval1",
            ease: "power4.in",
        })
        c2Tl.to("#circle2", {
            duration: 1.5,
            y: 60,
            ease: "power4.out"
        }, '>')

        const c3Tl = new gsap.timeline({
            scrollTrigger: {
                trigger: '#oval1',
                scrub: false,
                start: "70% 70%",
                end: "70% 70%",
            }
        })
        c3Tl.to("#circle3", {
            duration: 1.5,
            delay: 0,
            y: 120,
            morphSVG: "#oval1",
            ease: "power4.in",
        })
        c3Tl.to("#circle3", {
            duration: 1.5,
            y: 120,
            ease: "power4.out"
        }, '>')

        const c4Tl = new gsap.timeline({
            scrollTrigger: {
                trigger: '#oval1',
                scrub: false,
                start: "70% 70%",
                end: "70% 70%",
            }
        })
        c4Tl.to("#circle4", {
            duration: 1.5,
            delay: 0,
            y: 120,
            morphSVG: "#oval1",
            ease: "power4.in",
        })
        c4Tl.to("#circle4", {
            duration: 1.5,
            y: 180,
            ease: "power4.out"
        }, '>')

        const c5Tl = new gsap.timeline({
            scrollTrigger: {
                trigger: '#oval1',
                scrub: false,
                start: "70% 70%",
                end: "70% 70%",
            }
        })
        c5Tl.to("#circle5", {
            duration: 1.5,
            delay: 0,
            y: 120,
            morphSVG: "#oval1",
            ease: "power4.in",
        })
        c5Tl.to("#circle5", {
            duration: 1.5,
            y: 240,
            ease: "power4.out"
        }, '>')
    }, [])

    return (
        <>

        <div className=" mb-[300px]">
            <div className="xl:grid xl:grid-cols-2 max-w-[1600px] mx-auto my-auto">

                <div className="2xl:pl-[50px] mb-5">
                    <div className="2xl:pl-[20px] pt-[50px] mb-5">
                        <svg  className='block relative mx-auto mb-5' width="450" height="450" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle id='circle1' cx="225" cy="225" r="223" stroke="white" strokeWidth="2"/>
                        <path className='invisible absolute' id='oval1' d="M448 97.5C448 110.293 442.025 122.643 430.887 134.054C419.74 145.475 403.513 155.851 383.304 164.608C342.893 182.119 286.925 193 225 193C163.075 193 107.107 182.119 66.6962 164.608C46.4873 155.851 30.2597 145.475 19.1128 134.054C7.97491 122.643 2 110.293 2 97.5C2 84.7065 7.97491 72.3566 19.1128 60.9456C30.2597 49.5254 46.4873 39.1494 66.6962 30.3922C107.107 12.8806 163.075 2 225 2C286.925 2 342.893 12.8806 383.304 30.3922C403.513 39.1494 419.74 49.5254 430.887 60.9456C442.025 72.3566 448 84.7065 448 97.5Z" stroke="white" strokeWidth="2"/>
                        <circle className='' id='circle2' cx="225" cy="225" r="223" stroke="white" strokeWidth="2"/>
                        <path className='invisible absolute' id='oval1' d="M448 97.5C448 110.293 442.025 122.643 430.887 134.054C419.74 145.475 403.513 155.851 383.304 164.608C342.893 182.119 286.925 193 225 193C163.075 193 107.107 182.119 66.6962 164.608C46.4873 155.851 30.2597 145.475 19.1128 134.054C7.97491 122.643 2 110.293 2 97.5C2 84.7065 7.97491 72.3566 19.1128 60.9456C30.2597 49.5254 46.4873 39.1494 66.6962 30.3922C107.107 12.8806 163.075 2 225 2C286.925 2 342.893 12.8806 383.304 30.3922C403.513 39.1494 419.74 49.5254 430.887 60.9456C442.025 72.3566 448 84.7065 448 97.5Z" stroke="white" strokeWidth="2"/>
                        <circle className='' id='circle3' cx="225" cy="225" r="223" stroke="white" strokeWidth="2"/>
                        <path className='invisible absolute' id='oval1' d="M448 97.5C448 110.293 442.025 122.643 430.887 134.054C419.74 145.475 403.513 155.851 383.304 164.608C342.893 182.119 286.925 193 225 193C163.075 193 107.107 182.119 66.6962 164.608C46.4873 155.851 30.2597 145.475 19.1128 134.054C7.97491 122.643 2 110.293 2 97.5C2 84.7065 7.97491 72.3566 19.1128 60.9456C30.2597 49.5254 46.4873 39.1494 66.6962 30.3922C107.107 12.8806 163.075 2 225 2C286.925 2 342.893 12.8806 383.304 30.3922C403.513 39.1494 419.74 49.5254 430.887 60.9456C442.025 72.3566 448 84.7065 448 97.5Z" stroke="white" strokeWidth="2"/>
                        <circle className='' id='circle4' cx="225" cy="225" r="223" stroke="white" strokeWidth="2"/>
                        <path className='invisible absolute' id='oval1' d="M448 97.5C448 110.293 442.025 122.643 430.887 134.054C419.74 145.475 403.513 155.851 383.304 164.608C342.893 182.119 286.925 193 225 193C163.075 193 107.107 182.119 66.6962 164.608C46.4873 155.851 30.2597 145.475 19.1128 134.054C7.97491 122.643 2 110.293 2 97.5C2 84.7065 7.97491 72.3566 19.1128 60.9456C30.2597 49.5254 46.4873 39.1494 66.6962 30.3922C107.107 12.8806 163.075 2 225 2C286.925 2 342.893 12.8806 383.304 30.3922C403.513 39.1494 419.74 49.5254 430.887 60.9456C442.025 72.3566 448 84.7065 448 97.5Z" stroke="white" strokeWidth="2"/>
                        <circle className='' id='circle5' cx="225" cy="225" r="223" stroke="white" strokeWidth="2"/>
                        <path className='invisible absolute' id='oval1' d="M448 97.5C448 110.293 442.025 122.643 430.887 134.054C419.74 145.475 403.513 155.851 383.304 164.608C342.893 182.119 286.925 193 225 193C163.075 193 107.107 182.119 66.6962 164.608C46.4873 155.851 30.2597 145.475 19.1128 134.054C7.97491 122.643 2 110.293 2 97.5C2 84.7065 7.97491 72.3566 19.1128 60.9456C30.2597 49.5254 46.4873 39.1494 66.6962 30.3922C107.107 12.8806 163.075 2 225 2C286.925 2 342.893 12.8806 383.304 30.3922C403.513 39.1494 419.74 49.5254 430.887 60.9456C442.025 72.3566 448 84.7065 448 97.5Z" stroke="white" strokeWidth="2"/>
                        </svg>
                        
                    </div>

                </div>

                <div className="my-auto  font-[TT-Autonomous-Mono-Variable] text-left max-w-[800px] md:mx-auto mx-5 pl-[50px]">
                    <h1 className='text-mainPink text-[1.9rem] font-[TT-Travels-Next-Med] pt-5 text-left'>Document model explained</h1>
                    <h3 className='text-white mt-[30px] text-[1.3rem]'>Discover a more flexible and intuitive way to handle your data with the CharlemagneDB document model. Store data in rich, nested structures for effortless organization and querying, all while experiencing top-notch performance and scalability. Ready to transform your data management? Learn more about the document model with CDB.</h3>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Loco2;