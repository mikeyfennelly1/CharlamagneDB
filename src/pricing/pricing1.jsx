import {useState} from 'react';
import CardsLoco from './pricingCards-Loco.jsx';
import CardsEnterPrise from './pricingCards-Enterprise.jsx';

const Pricing1 = () => {
    
    const activeClasses = "cursor-pointer py-[30px] px-[50px] rounded-[10px] bg-[#0F0F0F] border-2 border-mainPink mx-auto min-w-[400px] max-w-[400px]";
    const inactiveClasses = "cursor-pointer py-[30px] px-[50px] rounded-[10px] border-2 border-[#0F0F0F] bg-[#0F0F0F] mx-auto min-w-[400px] max-w-[400px]";

    const [activityStateA, setActivityStateA] = useState(activeClasses)
    const [activityStateB, setActivityStateB] = useState(inactiveClasses)
    
    const [state, setState] = useState(<CardsLoco/>);

    const clickA = () => {
        setState(<CardsLoco/>)
        setActivityStateA(activeClasses)
        setActivityStateB(inactiveClasses)
    }

    const clickB = () => {
        setState(<CardsEnterPrise/>)
        setActivityStateA(inactiveClasses)
        setActivityStateB(activeClasses)
    }

    return (
        <>
            <div className="text-white min-h-screen text-white border-mainPink font-[TT-Autonomous-Mono-Reg]">
                <div className="">
                    <h1 className="text-[2.3rem] text-mainPink font-[TT-Travels-Next-Med] max-w-fit mx-auto mt-[20vh]">CharlemagneDB Pricing</h1>
                    <h3 className="text-[1.4rem] max-w-fit mx-auto text-center">The data platform built by - and for - developers</h3>
                </div>
                <div className="grid xl:grid-cols-2 max-w-[1000px] mx-auto pt-[100px]">
                    <div onClick={clickA} className={activityStateA}>
                        <h1 className="text-mainPink font-[TT-Travels-Next-Med]">Loco</h1>
                        <h2 className='text-[1.3rem]'>Developer Data Platform</h2>
                    </div>
                    <div onClick={clickB} className={activityStateB}>
                        <h1 className="text-mainPink font-[TT-Travels-Next-Med]">Enterprise</h1>
                        <h2 className='text-[1.3rem]'>Self-Managed Database & Services</h2>
                    </div>
                </div>


                <p>{state}</p>
            </div>
        </>
    );
}
 
export default Pricing1;