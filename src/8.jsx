const Eight = () => {
    return (
        <>
            <div className="border-2 bg-white max-w-screen">
                <div className="min-h-[200px] mx-auto grid grid-cols-1  max-w-[3000px] my-[100px]
                                xl:grid-cols-2 ">
                    <div className="mx-[30px] lg:ml-[100px]">
                        <div className="text-black font-[TT-Travels-Next-Med] text-[1.5rem] my-[50px] mb-[150px]
                                        2xl:text-[3rem] lg:text-[2rem]">
                            Subscribe to the Charlemagne newsletter to stay up-to-date with the latest releases.
                        </div>
                        <div className="text-mainPink border-b border-mainPink mb-[100px] text-[1.3rem] py-[10px]">
                            Email Address
                        </div>
                    </div>

                    <div className="grid pt-[50px] font-[TT-Autonomous-Mono-Reg] ml-[30px] grid-cols-2 max-w-[500px]
                                    
                                    lg:min-w-[800px] lg:max-w-[800px] lg:max-w-[50%] xl:ml-auto lg:grid-cols-3">
                        <div className="border-black md:mr-[200px]">
                            <ul>
                                <li className="text-[1.3rem] font-bold mb-[14px] font-[TT-Autonomous-Mono-Variable] ">Company</li>
                                <li className="mb-[6px]">About</li>
                                <li className="mb-[6px]">Blog</li>
                                <li className="mb-[6px]">Contact Us</li>
                            </ul>
                        </div>
                        <div className="border-black md:mr-[200px] min-w-fit">
                            <ul>
                                <li className="text-[1.3rem] font-bold mb-[14px] font-[TT-Autonomous-Mono-Variable] ">CharlemagneDB</li>
                                <li className="mb-[6px]">Pricing</li>
                                <li className="mb-[6px]">Showcase</li>
                                <li className="mb-[6px]">Resources</li>
                                <li className="mb-[6px]">Community</li>
                            </ul>
                        </div>
                        <div className="border-black md:mr-[200px] min-w-fit">
                            <ul>
                                <li className="text-[1.3rem] font-bold mb-[14px] font-[TT-Autonomous-Mono-Variable] ">Connect</li>
                                <li className="mb-[6px]">LinkedIn</li>
                                <li className="mb-[6px]">GitHub</li>
                                <li className="mb-[6px]">Facebook</li>
                                <li className="mb-[6px]">X</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Eight;