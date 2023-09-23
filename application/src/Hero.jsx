import AiOutlineDown from "react-icons/ai";

function Hero() {
    return(
        <>
        <div className="max-w-fit mx-auto mt-[35vh] flex flex-col relative z-10">
            <h1 className="text-mainPink font-[TT-Travels-Next-Light] mx-auto text-5xl mb-10">The emperor of all databases.</h1>
            <h3 className="font-[TT-Autonomous-Mono-Reg] text-white mx-auto text-xl text-center">Find out for yourself why Charlemagne was voted as the most loved <br/> NoSQL database by developers in 2025.</h3>
            <button className="font-[TT-Autonomous-Mono-Reg] text-white mx-auto text-lg text-center border-2 rounded-full py-2 px-5 mt-7
                             hover:bg-white hover:text-black hover:font-black">
                Try For Free</button>
        </div>
        <div className="max-w-fit mx-auto mt-[35vh] flex flex-col">
            <h3 className="text-white px-auto hover:cursor-pointer">Learn More about Charlemagne.</h3>
        </div>
        <div className="hover:cursor-pointer min-w-[20px] min-h-[20px]">
            <downIcon icon={<downIcon size="28" />}/>
        </div>
        </>
    );
}

const downIcon = ({ icon }) => {
    <div className="downIcon">
      {icon}
    </div>
  }

export default Hero;