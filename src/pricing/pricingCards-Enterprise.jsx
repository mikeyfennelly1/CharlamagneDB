import { Link } from 'react-router-dom';
import { constructUrl } from '../utils/urlutils';

const CardsEnterPrise = () => {
    return (
        <>
            <div>
                    <div className="pt-[200px]">
                        <h1 className="text-[2.3rem] text-mainPink font-[TT-Travels-Next-Med] max-w-fit mx-auto">CharlemagneDB Enterprise</h1>
                        <h3 className=" max-w-fit text-[1.2rem] mx-auto">The best way to run CharlemagneDB on-premises or in your private cloud</h3>
                    </div>


                    <div className="grid grid-cols-2 max-w-[1000px] mx-auto mt-[100px]">
                        <div className="border-mainPink px-[50px]">
                            <ul className="">
                                <li className="mt-[10px]">• CharlemagneDB Enterprise Server</li>
                                <li className="mt-[10px]">• Ops Manager, the management platform for CharlemagneDB</li>
                                <li className="mt-[10px]">• Kubernetes Operator</li>
                                <li className="mt-[10px]">• Enterprise security features</li>
                                <li className="mt-[10px]">• Business intelligence integration and visualization</li>
                            </ul>
                        </div>
                        <div className="border-mainPink px-[50px]">
                            <ul>
                                <li className="mt-[10px]">• Commercial license</li>
                                <li className="mt-[10px]">• Self-serve training content</li>
                                <li className="mt-[10px]">• Rich onboarding and regular check-ins</li>
                                <li className="mt-[10px]">• Consultative support with fast initial response goals</li>
                            </ul>
                        </div>
                    </div>

                    <div className="min-h-[100px]">
                        <div className="border-mainPink my-[50px] m-auto max-w-fit">
                            <Link className="mx-[30px]"  to={constructUrl("/docs")}>
                                <button className="bg-[#0F0F0F] border-[1px] py-[10px] px-[20px] rounded-[7px]">
                                    Learn More
                                </button>
                            </Link>
                            <Link className="mx-[30px]" to={constructUrl("/login")}>
                                <button className="bg-[#0F0F0F] border-[1px] py-[10px] px-[20px] rounded-[7px]">
                                    Contact Sales
                                </button>
                            </Link>Link
                        </div>
                    </div>
            </div>
        </>
    );
}
 
export default CardsEnterPrise;