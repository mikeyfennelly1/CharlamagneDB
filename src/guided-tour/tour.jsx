import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { FaGithub } from 'react-icons/fa';
import ScrollTrigger from 'gsap/ScrollTrigger';


const Tour = () => {
  const ScrollTriggerLink = () => {
    return (
      <>
        <a rel="noreferrer" target="_blank" href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"><span className='text-[#ff8c00]'>GSAP ScrollTrigger</span></a>
      </>
    )
  }
  const TextPluginLink = () => {
    return (
      <>
          <a rel="noreferrer" target="_blank" href="https://gsap.com/docs/v3/Plugins/TextPlugin/"><span className='text-[#ff8c00]'>GSAP Text Plugin</span></a>
      </>
    )
  }
  const GSAPCoreLink = () => {
    return (
      <>
          <a rel="noreferrer" target="_blank" href="https://gsap.com/core/"><span className='text-[#ff8c00]'>GSAP core kit</span></a>
      </>
    )
  }
  const DrawSVGPluginLink = () => {
    return (
      <>
          <a rel="noreferrer" target="_blank" href="https://gsap.com/docs/v3/Plugins/DrawSVGPlugin/"><span className='text-[#ff8c00]'>GSAP DrawSVGPlugin</span></a>
      </>
    )
  }
  const FigmaLink = () => {
    return (
      <>
          <a rel="noreferrer" target="_blank" href="https://figma.com/"><span className='text-[#ff8c00]'>Figma</span></a>
      </>
    )
  }


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
            x: -2000,
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
                end: "1500 50%",
                scrub: true,
                markers: false,
            }
        })
        tourTl1.from("#tour1", {
            duration: 1.5,
            x: -2000,
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
                start: "2200 50%",
                end: "3000 50%",
                scrub: true,
                markers: false,
            }
        })
            tourTl2.from("#tour2", {
                duration: 1.5,
                x: -2000,
                ease: "power4.inOut"
              })
              tourTl2.to("#tour2", {
                duration: 1.5,
                delay: 5,
                x: 2000,
                ease: "power4.inOut"
              })

              const tourTl3 = new gsap.timeline({
                scrollTrigger: {
                    trigger: '#hero',
                    start: "3300 50%",
                    end: "4100 50%",
                    scrub: true,
                    markers: false,
                }
            })
                tourTl3.from("#tour3", {
                    duration: 1.5,
                    x: -2000,
                    ease: "power4.inOut"
                  })
                  tourTl3.to("#tour3", {
                    duration: 1.5,
                    delay: 5,
                    x: 2000,
                    ease: "power4.inOut"
                  })


                  const tourTl4 = new gsap.timeline({
                    scrollTrigger: {
                        trigger: '#hero',
                        start: "5100 50%",
                        end: "5900 50%",
                        scrub: true,
                        markers: false,
                    }
                })
                    tourTl4.from("#tour4", {
                        duration: 1.5,
                        x: -2000,
                        ease: "power4.inOut"
                      })
                      tourTl4.to("#tour4", {
                        duration: 1.5,
                        delay: 5,
                        x: 2000,
                        ease: "power4.inOut"
                      })
      })



    return (
        <>
              <a  rel="noreferrer" target="_blank" href="https://github.com/mikeyfennelly1/CharlamagneDB">
                <div style={{zIndex: 99}} id='viewOnGit' className='
                bottom-[230px] fixed right-[50px]
                hover:text-black hover:bg-white 
                text-white  border-white pl-[50px] py-[30px] min-w-[300px] bg-[#0a0a0a]'>
                    <FaGithub className='absolute scale-[2] left-[30px] top-[40px]'/><h1 className='my-auto inline m-[20px] text-[1.5rem]'>Click here to see the source code on GitHub.</h1>
                </div>
              </a>

              {/* Tour 1 */}
                <div style={{zIndex: 99}} id='tour1' className='text-white fixed right-[50px] bottom-[30px] border-white  px-[50px] py-[30px] min-w-[300px]  bg-[#0a0a0a] max-w-[90vw]'>
                    <h1 className='my-auto inline text-[1.5rem] text-[#ff8c00] text-bold'>GUIDED TOUR [PART 1]: <span className='text-white'>Hero section</span></h1>
                    <p>The animations for this page were done with the <GSAPCoreLink /> (for animating the opacity of the main title), and also the <TextPluginLink /> (for the text you see just above the "Try for free" button).</p>
                </div>

                {/* Tour 2 */}
                <div style={{zIndex: 99}} id='tour2' className='text-white fixed right-[50px] bottom-[30px] border-white  px-[50px] py-[30px] min-w-[300px]  bg-[#0a0a0a] max-w-[90vw]'>
                    <h1 className='my-auto inline text-[1.5rem] text-[#ff8c00] text-bold'>GUIDED TOUR [PART 2]: <span className='text-white'></span></h1>
                    <p>The animations for this page were done with the <ScrollTriggerLink /> in combination with the <TextPluginLink />. It also uses the <GSAPCoreLink /> to animate the opacity of the title on its appearance. Scub is set to 'true', which gives the user control of the progression of the animation by changing their scroll position. This section also has pinning set to true.</p>
                </div>

                {/* Tour 3 */}
                <div style={{zIndex: 99}} id='tour3' className='text-white fixed right-[50px] bottom-[30px] border-white  px-[50px] py-[30px] min-w-[300px]  bg-[#0a0a0a] max-w-[90vw]'>
                    <h1 className='my-auto inline text-[1.5rem] text-[#ff8c00] text-bold'>GUIDED TOUR [PART 3]: <span className='text-white'></span></h1>
                    <p>The animations for this page were again done with the <ScrollTriggerLink /> in combination with the <TextPluginLink /> and <GSAPCoreLink />. Scub is set to 'true' for the opacity of the pink panel, but set to false for the text generation in the terminal on the right. This is done to give the impression of how an LLM would generate a response to a prompt.</p>
                </div>


                {/* Tour 4 */}
                <div style={{zIndex: 99}} id='tour4' className='text-white fixed right-[50px] bottom-[30px] border-white  px-[50px] py-[30px] min-w-[300px]  bg-[#0a0a0a] max-w-[90vw]'>
                    <h1 className='my-auto inline text-[1.5rem] text-[#ff8c00] text-bold'>GUIDED TOUR [PART 4]: <span className='text-white'></span></h1>
                    <p>This section was made with the <ScrollTriggerLink /> again. I designed the SVG elemnts on <FigmaLink /> and used the <DrawSVGPluginLink /> to give the effect of the SVG elements being drawn as you scroll down the page. (Didn't notice? - try scrolling back up.)</p>
                </div>
        </>
    );
}
 
export default Tour;