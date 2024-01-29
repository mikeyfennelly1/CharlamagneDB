import { constructUrl } from "../utils/urlutils";

const Seven = () => {
    return (
        <>
            <div className="max-w-screen">
                <div className="min-h-[200px]">
                    <div className="max-w-fit mb-[100px] mx-auto">
                        <img src={constructUrl("../images/officePhoto.jpg")} alt="" className="max-h-[800px] mx-auto max-w-[80vw] rounded-[50px] opacity-60"/>
                            <h1 className=" ml-[50px] text-[1.7rem] max-w-[80vw] xl:text-[3rem] mt-[75px] text-mainPink font-[TT-Travels-Next-Med]">Work at CharlemagneDB</h1>
                        <a href="https://linkedin.com">
                            <button className=" ml-[50px] text-[1.2rem] xl:text-[1.8rem] my-[30px] xl:my-[50px] text-white font-[TT-Autonomous-Mono-Reg] border-2 border-white max-w-fit px-[20px] rounded-full opacit">View Job Openings</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Seven;