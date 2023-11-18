const HeroSVG = () => {
    return (
        <>
            <svg
             className="absolute pointer-events-none scale-300 hidden max-w-screen
            left-[calc(50vw-350px)] top-[700px]"
             width="729" height="517" viewBox="0 0 729 517" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M728 63V457.5" stroke="url(#paint0_linear_315_17)"/>
                <path d="M1 445.5L1 51" stroke="url(#paint1_linear_315_17)"/>
                <path d="M1 1.00003L395.5 1.00001" stroke="url(#paint2_linear_315_17)"/>
                <path d="M727.5 516H333" stroke="url(#paint3_linear_315_17)"/>
                <defs>
                <linearGradient id="paint0_linear_315_17" x1="728.5" y1="63" x2="728.5" y2="457.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#CC00FF"/>
                <stop offset="1" stop-color="#FFA800" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_315_17" x1="0.5" y1="445.5" x2="0.5" y2="51" gradientUnits="userSpaceOnUse">
                <stop stop-color="#CC00FF"/>
                <stop offset="1" stop-color="#FFA800" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint2_linear_315_17" x1="1" y1="0.500031" x2="395.5" y2="0.500013" gradientUnits="userSpaceOnUse">
                <stop stop-color="#CC00FF"/>
                <stop offset="1" stop-color="#FFA800" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint3_linear_315_17" x1="727.5" y1="516.5" x2="333" y2="516.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#CC00FF"/>
                <stop offset="1" stop-color="#FFA800" stop-opacity="0"/>
                </linearGradient>
                </defs>
            </svg>
        </>
    );
}
 
export default HeroSVG;