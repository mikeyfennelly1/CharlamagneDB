import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { FaGithub } from 'react-icons/fa';
import ScrollTrigger from 'gsap/ScrollTrigger';


const Tour = () => {

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        const viewOnGithubTlIn = new gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: "1100 50%",
                end: "+=1400 50%",
                scrub: true,
                markers: false,
            }
        })
          viewOnGithubTlIn.from("#viewOnGit", {
            duration: 1.5,
            x: 2000,
            ease: "power4.inOut"
          })
          viewOnGithubTlIn.to("#viewOnGit", {
            duration: 1.5,
            delay: 5,
            x: 2000,
            ease: "power4.inOut"
          })

          const tourTl1 = new gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: "700 50%",
                end: "+=1400 50%",
                scrub: true,
                markers: false,
            }
        })
        tourTl1.from("#tour1", {
            duration: 1.5,
            x: 2000,
            ease: "power4.inOut"
          })
          tourTl1.to("#tour1", {
            duration: 1.5,
            delay: 5,
            x: 2000,
            ease: "power4.inOut"
          })

          const tourTl2 = new gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: "700 50%",
                end: "+=1400 50%",
                scrub: true,
                markers: false,
            }
        })
            tourTl2.from("#tour2", {
                duration: 1.5,
                x: 2000,
                ease: "power4.inOut"
              })
              tourTl2.to("#tour2", {
                duration: 1.5,
                delay: 5,
                x: 2000,
                ease: "power4.inOut"
              })

      })

    return (
        <>
              <a target="_blank" href="https://github.com/mikeyfennelly1/CharlamagneDB">
                <div style={{zIndex: 99}} id='viewOnGit' className='
                top-[calc(100vh-300px)] fixed right-[50px]
                hover:text-black hover:bg-white
                text-white  border-white pl-[50px] py-[30px] min-w-[300px] bg-[#0a0a0a]'>
                    <FaGithub className='absolute scale-[2] left-[30px] top-[40px]'/><h1 className='my-auto inline m-[20px] text-[1.5rem]'>Click here to see the source code on GitHub.</h1>
                </div>
              </a>

              {/* Tour 1 */}
                <div style={{zIndex: 99}} id='tour1' className='text-white fixed right-[50px] top-[calc(100vh-175px)] border-white  px-[50px] py-[30px] min-w-[300px]  bg-[#0a0a0a] max-w-[90vw]'>
                    <h1 className='my-auto inline text-[1.5rem] text-mainPink text-bold'>GUIDED TOUR: <span className='text-white'>Hero section</span></h1>
                    <p>The animations for this page were done with the <span className='text-mainPink'>GSAP core kit</span> (for animating the opacity of the main title), and also the <span className='text-mainPink'>GSAP Text Plugin</span> (for the text you see just above the "Try for free" button).</p>
                </div>

                {/* Tour 2
                {/* <div style={{zIndex: 99}} id='tour2' className='text-white fixed right-[50px] top-[calc(100vh-175px)] border-white  px-[50px] py-[30px] min-w-[300px]  bg-[#0a0a0a] max-w-[90vw]'>
                    <h1 className='my-auto inline text-[1.5rem] text-mainPink text-bold'>GUIDED TOUR: <span className='text-white'>Hero section</span></h1>
                    <p>The animations for this page were done with the <span className='text-mainPink'>GSAP core kit</span> (for animating the opacity of the main title), and also the <span className='text-mainPink'>GSAP Text Plugin</span> (for the text you see just above the "Try for free" button).</p>
                </div> */}


        </>
    );
}
 
export default Tour;