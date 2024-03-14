import { constructUrl } from "../utils/urlutils";
import { Link } from 'react-router-dom';

const Seven = () => {

    return (
        <>
            <div id="containingBox" className="min-h-[700px] mx-w-screen mx-[20px] flex justify-center lg:min-w-[1000px] pb-[100px] font-[TT-Autonomous-Mono-Reg]">
                <div className="min-h-[600px] border-2 w-[1100px] px-[50px] md:px-[100px] py-[100px] bg-[#0F0F0F] rounded-[30px] relative">
                    <div className="-[#F00] absolute z-10 min-h-[100%] text-white ">
                        <h5 className="border-l-mainPink border-l-[5px] sm:border-l-[10px] mb-[40px] max-w-[200px] py-[5px] pl-[20px]">Start here</h5>
                        <h1 className="text-[1.5rem] sm:text-[2rem] sm:pl-[25px] font-[TT-Travels-Next-Reg] pr-[20px]">Build the next big thing. 
                        </h1>
                        <h1 className="text-[1.3rem] sm:text-[1.5rem] sm:pl-[25px] font-[TT-Travels-Next-Bold] text-mainPink pr-[20px]">( Do it fast with Charlemagne )</h1>
                        <h3 className="text-[#6b6b6b] sm:pl-[25px] font-[TT-Autonomous-Mono-Variable] font-light text-[1rem] sm:text-[1.2rem] max-w-[550px]">Build the applications of tomorrow with the tools of tomorrow.</h3>
                        <Link to={constructUrl('/pricing')}>
                            <button className="bg-mainPink rounded-[10px] px-[40px] py-[20px] text-black sm:ml-[25px] hover:bg-white mt-[20px] sm:mt-[40px]">Try for free</button>
                        </Link>
                    </div>

                    <svg viewBox="0 0 285 80" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <mask id="mask" x="0" y="0" width="100%" height="100%">
                                <rect x="0" y="0" width="100%" height="100%"/>
                            </mask>
                        </defs>

                        <rect style={{fill: "white", mask: "url(#mask)"}} x="0" y="0" width="100%" height="100%"/>
                    </svg>
                </div>


            </div>
        </>
    );
}
 
export default Seven;