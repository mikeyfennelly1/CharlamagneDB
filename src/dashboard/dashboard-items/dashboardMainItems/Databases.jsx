import { useContext } from "react";
import DashboardContext from "../dashboardContext";

const DatabasesVisibleClasses = "visible text-white min-w-[1350px] max-w-[1350px] min-h-[200px] inline-block px-[200px] py-[100px] font-[TT-Autonomous-Mono-Reg]"
const DatabasesInvisibleClasses = "hidden"

const Databases = () => {
    const [dashboardContext] = useContext(DashboardContext)
    return (
        <>
            <div className={(dashboardContext === "Databases" ? DatabasesVisibleClasses : DatabasesInvisibleClasses)}>
                <h1 className="text-mainPink text-2xl font-[TT-Travels-Next-Reg]">Databases</h1>
                <div className="border-2 min-w-max min-h-[600px] mt-[40px] rounded-[40px] border-mainPink bg-[#111] relative">
                    <div className="pt-[50px] pl-[80px]">
                        <p className="text-mainPink font-bold">ExampleCluster</p>
                        <button className="cursor-[not-allowed] bg-[#222] p-2 ">Connect</button>
                        <button className="cursor-[not-allowed] bg-[#222] p-2 ml-10">View Monitoring</button>
                        <button className="cursor-[not-allowed] bg-[#222] p-2 ml-10">Browse Collections</button>
                    </div>
                    <div className="mt-[40px] max-w-[900px] mx-[80px] border-t">
                        <p className="text-center px-[100px] mt-[100px] opacity-60">Your cluster has been automatically paused due to prolonged inactivity. Resume your cluster to connect to it and to gain access to your data.</p>
                        <button className="block bg-[#222] p-2 cursor-[not-allowed] mx-auto opacity-60">Resume</button>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Databases;