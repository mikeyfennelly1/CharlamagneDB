import { useContext } from "react";
import DashboardContext from "../dashboardContext";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../utils/firebase/firebaseAuth'

const DatabaseAccessVisibleClasses = "text-white visible visible text-white min-w-[1350px] max-w-[1350px] min-h-[200px] inline-block px-[200px] py-[20px] font-[TT-Autonomous-Mono-Reg]"
const DatabaseAccessInvisibleClasses = "text-white hidden"


const DatabaseAccess = () => {
    const [user] = useAuthState(auth)
    const [dashboardContext] = useContext(DashboardContext)
    return (
        <>
            <div className={(dashboardContext === "Database Access" ? DatabaseAccessVisibleClasses : DatabaseAccessInvisibleClasses)}>
                <h2 className="">Database Access</h2>
                <div className=" grid grid-cols-5 text-[0.8rem] flex space-around bg-[#111] border border-mainPink min-w-[100%]">
                    <div className="py-2 mx-auto">User Name</div>
                    <div className="py-2 mx-auto">Authentication Method</div>
                    <div className="py-2 mx-auto">MongoDB Roles</div>
                    <div className="py-2 mx-auto">Resources</div>
                    <div className="py-2 mx-auto">Actions</div>
                </div>
                <div className="grid grid-cols-5 text-[0.8rem] flex space-around bg-[#222] min-w-[100%]">
                    <div className="py-4 mx-auto">{user.displayName}</div>
                    <div className="py-4 mx-auto">SCRAM</div>
                    <div className="py-4 mx-auto">readWriteAnyDatabase@admin</div>
                    <div className="py-4 mx-auto">All Resources</div>
                    <div className="py-4 mx-auto">
                    <div className="mx-auto opacity-80">(No data)</div>
                    </div>
                </div>
                <div className="flex space-around p-20 min-w-[100%]">
                    <div className="mx-auto opacity-80">(No data)</div>
                </div>
            </div>
        </>
    );
}
 
export default DatabaseAccess;