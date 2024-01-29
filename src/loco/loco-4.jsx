import { constructUrl } from "../utils/urlutils";

const Loco4 = () => {
    return (
        <>
            <div className="mt-[200px] font-[TT-Travels-Next-Med]">
                <div className="text-white md:text-[3rem] text-[2rem] max-w-[1000px] text-center mx-auto">
                    <h1 className="mx-auto max-w-fit">Build faster with a suite of integrated services.</h1>
                </div>
                <div className="grid grid-cols-3 my-[200px] max-w-[1300px] mx-auto">
                    <div>
                        <div className=" max-w-fit mx-auto">
                            <img className='scale-125 mx-auto ' src={constructUrl("../images/dbIcon.png")} alt="" />
                            <h1 className="text-white mt-[30px] block text-center">Unlimited Scalability</h1>
                        </div>
                    </div>
                    <div>
                        <div className=" max-w-fit mx-auto">
                            <img className='scale-125' src={constructUrl("../images/searchIcon.png")} alt="" />
                            <h1 className="text-white mt-[30px] block">Search</h1>
                        </div>
                    </div>
                    <div>
                        <div className=" max-w-fit mx-auto">
                            <img  className='scale-125 mx-auto ' src={constructUrl("../images/chartIcon.png")} alt="" />
                            <h1 className="text-white mt-[30px] block">Charts</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Loco4;