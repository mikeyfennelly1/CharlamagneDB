import { Link } from 'react-router-dom';
import { constructUrl } from '../utils/urlutils';

const Eight = () => {
    return (
        <>
            <div className="block border-2 bg-white max-w-screen">
                <div className="block min-h-[200px] mx-auto grid grid-cols-1  max-w-[3000px] my-[100px]
                                xl:grid-cols-2 ">
                    <div className="mx-[30px] lg:ml-[100px]">
                        <div className="text-black font-[TT-Travels-Next-Med] text-[1.5rem] my-[50px] mb-[150px]
                                        2xl:text-[3rem] lg:text-[2rem]">
                            Subscribe to the Charlemagne newsletter to stay up-to-date with the latest releases.
                        </div>
                        <div className="text-mainPink border-b border-mainPink mb-[100px] text-[1.3rem] py-[10px]">
                            <input type="text" placeholder="Email Address" className="outline-none w-[100%] placeholder-mainPink" />
                        </div>
                    </div>

                    <div className="grid pt-[50px] font-[TT-Autonomous-Mono-Reg] ml-[30px] grid-cols-2 max-w-[500px]
                                    
                                    lg:min-w-[800px] lg:max-w-[800px] lg:max-w-[50%] xl:ml-auto lg:grid-cols-3">
                        <div className="border-black md:mr-[200px]">
                            <ul>
                                <a href="/" className="block text-[1.3rem] font-bold mb-[14px] font-[TT-Autonomous-Mono-Variable] ">Company</a>
                                <a href="/" className="block cursor-pointer mb-[6px]">About</a>
                                <a href="/" className="block cursor-pointer mb-[6px]">Blog</a>
                                <Link to={constructUrl("/login")} className="block cursor-pointer mb-[6px]">Contact Us</Link>
                            </ul>
                        </div>
                        <div className="block border-black md:mr-[200px] min-w-fit">
                            <ul>
                                <a href="/" className="block text-[1.3rem] font-bold mb-[14px] font-[TT-Autonomous-Mono-Variable] ">CharlemagneDB</a>
                                <a href="/pricing" className="block cursor-pointer mb-[6px]">Pricing</a>
                                <a href="/loco" className="block cursor-pointer mb-[6px]">Showcase</a>
                                <a href="/docs" className="block cursor-pointer mb-[6px]">Resources</a>
                                <a href="/" className="block cursor-pointer mb-[6px]">Community</a>
                            </ul>
                        </div>
                        <div className="block border-black md:mr-[200px] min-w-fit">
                            <ul>
                                <a href="/" className="block text-[1.3rem] font-bold mb-[14px] font-[TT-Autonomous-Mono-Variable] ">Connect</a>
                                <a href="https://www.linkedin.com" className="block cursor-pointer mb-[6px]">LinkedIn</a>
                                <a href="https://www.github.com" className="block cursor-pointer mb-[6px]">GitHub</a>
                                <a href="https://www.facebook.com" className="block cursor-pointer mb-[6px]">Facebook</a>
                                <a href="https://www.x.com" className="block cursor-pointer mb-[6px]">X</a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Eight;