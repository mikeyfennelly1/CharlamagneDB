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
                            Email Address
                        </div>
                    </div>

                    <div className="grid pt-[50px] font-[TT-Autonomous-Mono-Reg] ml-[30px] grid-cols-2 max-w-[500px]
                                    
                                    lg:min-w-[800px] lg:max-w-[800px] lg:max-w-[50%] xl:ml-auto lg:grid-cols-3">
                        <div className="border-black md:mr-[200px]">
                            <ul>
                                <a className="block text-[1.3rem] font-bold mb-[14px] font-[TT-Autonomous-Mono-Variable] ">Company</a>
                                <a className="block cursor-pointer mb-[6px]">About</a>
                                <a className="block cursor-pointer mb-[6px]">Blog</a>
                                <a className="block cursor-pointer mb-[6px]">Contact Us</a>
                            </ul>
                        </div>
                        <div className="block border-black md:mr-[200px] min-w-fit">
                            <ul>
                                <a className="block text-[1.3rem] font-bold mb-[14px] font-[TT-Autonomous-Mono-Variable] ">CharlemagneDB</a>
                                <a className="block cursor-pointer mb-[6px]">Pricing</a>
                                <a className="block cursor-pointer mb-[6px]">Showcase</a>
                                <a className="block cursor-pointer mb-[6px]">Resources</a>
                                <a className="block cursor-pointer mb-[6px]">Community</a>
                            </ul>
                        </div>
                        <div className="block border-black md:mr-[200px] min-w-fit">
                            <ul>
                                <a className="block text-[1.3rem] font-bold mb-[14px] font-[TT-Autonomous-Mono-Variable] ">Connect</a>
                                <a className="block cursor-pointer mb-[6px]">LinkedIn</a>
                                <a className="block cursor-pointer mb-[6px]">GitHub</a>
                                <a className="block cursor-pointer mb-[6px]">Facebook</a>
                                <a className="block cursor-pointer mb-[6px]">X</a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Eight;