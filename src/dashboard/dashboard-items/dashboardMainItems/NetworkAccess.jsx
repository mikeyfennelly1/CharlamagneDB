import { useContext } from "react";
import DashboardContext from "../dashboardContext";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../utils/firebase'

const DatabaseAccessVisibleClasses = "text-white visible visible text-white min-w-[1350px] max-w-[1350px] min-h-[200px] inline-block px-[200px] py-[20px] font-[TT-Autonomous-Mono-Reg]"
const DatabaseAccessInvisibleClasses = "text-white hidden"

const NetworkAccess = () => {
    const [user] = useAuthState(auth)
    const [dashboardContext] = useContext(DashboardContext)
    return (
        <>
            <div className={(dashboardContext === "Network Access" ? DatabaseAccessVisibleClasses : DatabaseAccessInvisibleClasses)}>
                <h2 className="">Network Access</h2>
                <div className=" grid grid-cols-4 text-[0.8rem] flex space-around bg-[#111] border border-mainPink min-w-[100%]">
                    <div className="py-2 mx-auto">IP Address</div>
                    <div className="py-2 mx-auto">Comment</div>
                    <div className="py-2 mx-auto">Status</div>
                    <div className="py-2 mx-auto">Actions</div>
                </div>
                <div className="grid grid-cols-4 text-[0.8rem] flex space-around bg-[#222] min-w-[100%]">
                    <div className="py-4 mx-auto">(your current IP address)</div>
                    <div className="py-4 mx-auto">inactive</div>
                    <div className="py-4 mx-auto">All Resources</div>
                    <div className="py-4 mx-auto opacity-80">(No data)</div>
                </div>
                <div className="flex space-around p-20 min-w-[100%]">
                    <div className="mx-auto opacity-80">(No data)</div>
                </div>
            </div>
        </>
    );
}
 
export default NetworkAccess;