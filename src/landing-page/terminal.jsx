import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { constructUrl } from '../utils/urlutils';

gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(ScrollTrigger)

const Terminal = () => {
    const terminalContainer = useRef(null)
    
    const { scrollYProgress } = useScroll({
        target: terminalContainer,
        offset: ["start end", "end start",]
    });
    
    const opacity = useTransform(scrollYProgress, [0.1, 0.23], [0, 1])

//   });

    useEffect( () => {
        const terminalTl = new gsap.timeline({
            scrollTrigger: {
                trigger: '.terminal',
                start: 'top 70%',
                end: 'bottom 70%',
                scrub: false,
            }
        });
        terminalTl.to('.cdb-more', {
            duration: 5,
            ease: 'none',
            text: {
                value: "<br><br>const customerSchema = new cdb.Schema {<br>        name: {<br>              type: String, <br>              required: true, <br>        }, <br>        subscribedToChannel: {<br>              type: String,<br>              required: true,<br>        },<br>        subscribeDate: {<br>               type: Date,<br>               required: true,<br>               default: Date.now<br>        },<br>}",
                preserveSpaces: true,
                newClass: "text-white"
            }
        })
    })

    return (
        <>
        <motion.div ref={terminalContainer} style={{ opacity }} className=' lg:mx-auto lg:max-w-[1600px] max-w-[90vw]'>
            <div className='border-2 border-mainPink max-h-fit max-w-[1600px] bg-gradient-to-b from-[#101] bg-opacity-20 
                            grid xl:grid-cols-2    lg:p-[150px]   p-[50px] 
                            w-screen lg:min-w-[1600px]'>
                 <div className='lg:pr-[75px] max-w-[600px]'>
                    <p className='text-xl font-[TT-Travels-Next-Med] border-2 border-mainPink rounded-full max-w-fit text-white px-4 mt-[50px] py-[0.5rem]'>AI Driven</p>
                    <h2 className='text-mainPink text-[1.9rem] lg:text-5xl pb-[50px] pt-[30px] font-[TT-Autonomous-Mono-Variable] block max-w-[500px]'>SCHEMA CREATION</h2>
                    <p className='text-white text-[1rem] max-w-[300px] lg:text-[1.5rem] pt-[50px] font-[TT-Autonomous-Mono-Variable] inline max-w-[500px]'>The first databse to have easy query prompting through the command line. We have integrated generative AI to build schemas for you from the ground up, so you can spend less time doing and more time delivering.</p>
                </div>

                <div className='relative py-[80px] lg:block text-[0.8rem] max-w-screen'>
                    <img src={constructUrl("../images/terminal3.png")} alt="" className='terminal max-w-screen lg:max-w-[700px] inline min-h-[500px] lg:min-h-[600px]'/>
                        <p className=' text-[0.7rem] sm:text-[1rem] font-[SourceCodePro-Medium] text-mainPink absolute top-[150px] left-8 max-w-[700px] font-bold'>cdb prompt: <span className=' text-white'>"Create a schema in JS for my ecommerce store, so that I can track my customers' names, orders and locations."</span></p>
                            <p className='text-[0.7rem] sm:text-[1rem] response font-[SourceCodePro-Medium] text-[#00ff9d] absolute top-[230px] left-8 cdb-more'></p>
                </div>
            </div>
           
        </motion.div>
        </>
    );
}
 
export default Terminal;