function Hero() {
    return(
        <>
        <div className="h-[calc(100vh-60px)]">
            <div className="max-w-fit mx-auto mt-[40vh] flex flex-col relative z-10">
                <h1 className="text-3xl text-mainPink font-[TT-Travels-Next-Light] mx-auto mb-5 text-center 
                               sm:text-5xl sm:mb-4">
                    The emperor of all databases.</h1>
                <h3 className="font-[TT-Autonomous-Mono-Reg] text-center text-white mx-auto text-md max-w-[800px] px-10
                                sm:text-lg">
                    Find out for yourself why Charlemagne was voted as the most loved NoSQL database by developers in 2025.</h3>
                <button className="font-[TT-Autonomous-Mono-Reg] text-white mx-auto  text-center border-2 rounded-full mt-5 py-1 px-3
                                sm:text-lg sm:py-2 sm:px-5 sm:mt-7
                                hover:bg-white hover:text-black hover:font-black">
                    Try For Free</button>
            </div>
            <div className="max-w-fit mx-auto mt-[25vh] flex flex-col">
                <h3 className="text-white px-auto hover:cursor-pointer">
                    Learn More about Charlemagne.</h3>
            </div>
        </div>
        </>
    );
}

export default Hero;