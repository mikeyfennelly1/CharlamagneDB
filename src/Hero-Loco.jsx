import LocoServer from "./Loco-serverSVG";

const HeroLoco = () => {
    return (
        <>
        <div className="max-h-screen min-h-screen max-h-screen">
            <div className="xl:grid xl:grid-cols-2 max-w-[1600px] mx-auto my-auto mt-[40vh] min-h-[1500px]">
                <div className="pl-[50px]">
                    <h1 className="text-[2.5rem] text-white font-[TT-Autonomous-Mono-Variable] font-semibold max-w-[700px]"><span className="text-mainPink">CharlemagneDB Loco.</span> <br/>The multi-cloud developer data platform.</h1>
                    <h3 className="text-[1.5rem] text-white font-[TT-Autonomous-Mono-Reg] max-w-[700px] my-[20px]">An integrated suite of cloud database and data services to accelerate and simplify how you build with data.</h3>
                    <div className="pl-[20px] pt-[50px]">
                        <button className="bg-mainPink text-black px-[40px] py-[15px] rounded-sm">
                            Try Free
                        </button>
                        <div className="text-white inline pl-[100px]">
                            Benefits of CDB Loco
                        </div>
                    </div>
                </div>
                <div className="">
                        <LocoServer/>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default HeroLoco;