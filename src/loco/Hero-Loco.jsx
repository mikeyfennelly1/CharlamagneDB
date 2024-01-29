import LocoServer from "./Loco-serverSVG";
import { Link } from 'react-router-dom';
import { constructUrl } from "../utils/urlutils";

const HeroLoco = () => {
    return (
        <>
        <div className="max-h-[50vh]">
            <div className="xl:grid xl:grid-cols-2 max-w-[1600px] mx-auto my-auto mt-[30vh] min-h-[1500px]">
                <div className="pl-[50px]">
                    <h1 className="text-[2.5rem] text-white font-[TT-Autonomous-Mono-Variable] font-medium max-w-[700px]"><span className="text-mainPink font-[TT-Travels-Next-Med]">CharlemagneDB Loco.</span> <br/>The multi-cloud developer data platform.</h1>
                    <h3 className="text-[1.5rem] text-white font-[TT-Autonomous-Mono-Reg] max-w-[700px] my-[20px]">An integrated suite of cloud database and data services to accelerate and simplify how you build with data.</h3>
                    <div className="pl-[20px] pt-[50px]">
                        <Link to={constructUrl("CharlamagneDB/pricing")}>
                            <button className="bg-mainPink border-2 border-mainPink font-[TT-Autonomous-Mono-Variable] text-black px-[40px] py-[15px] rounded-sm hover:bg-black hover:text-white">
                                Try Free
                            </button>
                        </Link>
                        <div className="text-white inline pl-[100px] font-[TT-Autonomous-Mono-Variable]">
                            <a href="/docs" className="hover:text-mainPink">Benefits of CDB Loco</a>
                        </div>
                    </div>
                </div>
                <div className="invisible xl:visible ">
                        <LocoServer/>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default HeroLoco;