import { useContext } from "react";
import DashboardContext from "../dashboardContext";

const overviewVisibleClasses = "visible text-white min-w-[1350px] max-w-[1350px] min-h-[200px] inline-block px-[200px] py-[100px] font-[TT-Autonomous-Mono-Reg]"
const overviewInvisibleClasses = "hidden"

const Overview = () => {
    const [dashboardContext] = useContext(DashboardContext)
    return (
        <>
        <div className={(dashboardContext === "Overview" ? overviewVisibleClasses : overviewInvisibleClasses)}>
            <h1 className="text-mainPink text-2xl font-[TT-Travels-Next-Reg]">Overview</h1>
            <div className="border-2 min-w-max min-h-[600px] mt-[40px] rounded-[40px] border-mainPink bg-[#111] relative">
                <div className="pt-[50px] pl-[80px]">
                    <h1 className="top-[60px] left-[60px]  text-[1.3rem]">Database Deployments</h1>
                </div>
                <div className="mt-[40px] mx-[80px] border-b">
                    <h2 className="border-b m-0 max-w-fit pr-[20px] text-[1.2rem] text-white hover:cursor-pointer ">ExampleCluster</h2>
                </div>
                <div className="mt-[40px] max-w-[900px] mx-[80px]">
                        <p className="text-center px-[100px] mt-[100px] opacity-60">Your cluster has been automatically paused due to prolonged inactivity. Resume your cluster to connect to it and to gain access to your data.</p>
                        <button className="block bg-[#222] p-2 cursor-[not-allowed] mx-auto opacity-60">Resume</button>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Overview;