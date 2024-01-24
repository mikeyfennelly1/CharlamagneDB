import { Link } from 'react-router-dom';

const CardsLoco = () => {
    return (
        <>
                <div className="pt-[200px]">
                    <h1 className="text-[2.3rem] text-mainPink font-[TT-Travels-Next-Med] max-w-fit mx-auto">CharlemagneDB Loco</h1>
                    <h3 className="text-center max-w-fit mx-auto">The multi-cloud developer data platform available on AWS, Azure, and Google Cloud</h3>
                </div>
                <div className="mx-auto grid 2xl:grid-cols-3 min-h-[800px] max-w-[1600px] pt-[150px]">
                    <div className="bg-[#0F0F0F] rounded-[7px] mx-auto min-w-[500px] p-[50px] font-[TT-Autonomous-Mono-Reg] text-[1.5rem] max-w-[400px] my-5">
                        <h1  className="text-mainPink font-[TT-Travels-Next-Med]">Serverless</h1>
                        <h3 className="text-[1.2rem]">from $0.10/million reads</h3>
                        <Link to="/CharlamagneDB/login">
                            <button href='' className="text-[1.3rem] bg-mainPink text-black px-[30px] py-[10px] my-[50px] hover:bg-black hover:text-white">Sign Up</button>
                        </Link>
                        <p className="text-[1.2rem] my-[50px]">For serverless applications with variable or infrequent traffic. Minimal configuration required.</p>
                        <ul className="text-[1rem]">
                            <li className="mb-[20px]">• Up to 1TB of storage</li>
                            <li className="mb-[20px]">• Resources scale seamlessly to meet your workload</li>
                            <li className="mb-[20px]">• Pay only for the operations you run</li>
                            <li className="mb-[20px]">• Always-on security and backups</li>
                        </ul>
                    </div>
                    <div className="bg-[#0F0F0F] rounded-[7px] mx-auto min-w-[500px] p-[50px] font-[TT-Autonomous-Mono-Reg] text-[1.5rem] max-w-[400px] my-5">
                        <h1  className="text-mainPink font-[TT-Travels-Next-Med]">Dedicated</h1>
                        <h3 className="text-[1.2rem]">from $57 a month</h3>
                        <Link to="/CharlamagneDB/login">
                            <button to='/CharlamagneDB/login' className="text-[1.3rem] bg-mainPink text-black px-[30px] py-[10px] my-[50px] hover:bg-black hover:text-white">Sign Up</button>
                        </Link>
                        <p className="text-[1.2rem] my-[50px]">For production applications with sophisticated workload requirements. Advanced configuration controls.</p>
                        <ul className="text-[1rem]">
                            <li className="mb-[20px]">• 10GB to 4TB of storage</li>
                            <li className="mb-[20px]">• 2GB to 768GB RAM</li>
                            <li className="mb-[20px]">• Network isolation and fine-grained access controls</li>
                            <li className="mb-[20px]">• Multi-region and multi-cloud options available</li>
                        </ul>
                    </div>
                    <div className="bg-[#0F0F0F] rounded-[7px] mx-auto min-w-[500px] p-[50px] font-[TT-Autonomous-Mono-Reg] text-[1.5rem] max-w-[400px] my-5">
                        <h1  className="text-mainPink font-[TT-Travels-Next-Med]">Shared</h1>
                        <h3 className="text-[1.2rem]">from $0 a month</h3>
                        <Link to="/CharlamagneDB/login">
                            <button to='/CharlamagneDB/login' className=" text-[1.3rem] bg-mainPink text-black px-[30px] py-[10px] my-[50px] hover:bg-black hover:text-white">Try For Free</button>
                        </Link>
                        <p className="text-[1.2rem] my-[50px]">For learning and exploring MongoDB in a cloud environment. Basic configuration options.</p>
                        <ul className="text-[1rem]">
                            <li className="mb-[20px]">• 512MB to 5GB of storage</li>
                            <li className="mb-[20px]">• Shared RAM</li>
                            <li className="mb-[20px]">• Upgrade to dedicated clusters for full functionality</li>
                            <li className="mb-[20px]">• No credit card required to start</li>
                        </ul>
                    </div>
                </div>
        </>
    );
}
 
export default CardsLoco;