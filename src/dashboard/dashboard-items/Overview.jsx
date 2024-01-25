import { useContext } from "react";
import DashboardContext from "./dashboardContext";

const Overview = () => {
    const [dashboardContext, setDashboardContext] = useContext(DashboardContext)
    console.log(dashboardContext)
    return (
        <>
        <div className="text-white min-w-[1400px] max-w-[1400px] min-h-[200px] inline-block px-[200px] py-[100px] font-[TT-Autonomous-Mono-Reg]">
            <h1 className="text-mainPink text-2xl font-[TT-Travels-Next-Reg]">Overview</h1>
            <div className="border-2 min-w-max min-h-[600px] mt-[40px] rounded-[40px] border-mainPink bg-[#111] relative">
                <div className="pt-[50px] pl-[80px]">
                    <h1 className="top-[60px] left-[60px]  text-[1.3rem]">Database Deployments</h1>
                </div>
                <div className="mt-[40px] mx-[80px] border-b">
                    <h2 className="border-b m-0 max-w-fit pr-[20px] text-[1.2rem] text-white hover:cursor-pointer ">ExampleCluster</h2>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Overview;