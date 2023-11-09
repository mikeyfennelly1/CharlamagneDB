const Eight = () => {
    return (
        <>
            <div className="border-2 bg-white">
                <div className="border-2 border-black min-h-[200px] mx-[200px] grid grid-cols-2">

                    <div className="border-2 border-black">
                        <div className="text-black text-[3rem] my-[50px] mb-[150px]">
                            Subscribe to the Charlemagne newsletter to stay up-to-date with the latest releases.
                        </div>
                        <div className="text-mainPink border-b border-mainPink mb-[100px] text-[1.3rem] py-[10px]">
                            Email Address
                        </div>
                    </div>

                    <div className="grid grid-cols-3 max-w-[50%] mx-auto pt-[50px]">
                        <div className="border-black mr-[200px]">
                            <ul>
                                <li className="font-bold mb-[14px]">Company</li>
                                <li className="mb-[6px]">About</li>
                                <li className="mb-[6px]">Blog</li>
                                <li className="mb-[6px]">Contact Us</li>
                            </ul>
                        </div>
                        <div className="border-black mr-[200px]">
                            <ul>
                                <li className="font-bold mb-[14px]">CharlemagneDB</li>
                                <li className="mb-[6px]">Pricing</li>
                                <li className="mb-[6px]">Showcase</li>
                                <li className="mb-[6px]">Resources</li>
                                <li className="mb-[6px]">Community</li>
                            </ul>
                        </div>
                        <div className="border-black mr-[200px]">
                            <ul>
                                <li className="font-bold mb-[14px]">Connect</li>
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