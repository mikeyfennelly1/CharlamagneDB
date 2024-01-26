import { useContext } from "react";
import DashboardContext from "../dashboardContext";

import '../../../docs/documents/documentationStyles.css'

const BackupVisibleClasses = "text-white visible visible text-white min-w-[1350px] max-w-[1350px] min-h-[200px] inline-block px-[200px] py-[20px] font-[TT-Autonomous-Mono-Reg]"
const BackupInvisibleClasses = "text-white hidden"

const Backup = () => {
    const [dashboardContext] = useContext(DashboardContext)
    return (
        <>
            <div className={(dashboardContext === "Backup" ? BackupVisibleClasses : BackupInvisibleClasses)}>
                <h2 className="">Backup</h2>
                <div className="flex space-around bg-[#222] min-w-[100%]">
                    <div className="p-4 mx-auto">Database Name</div>
                    <div className="p-4 mx-auto">Last Snapshot (UTC)</div>
                    <div className="p-4 mx-auto">Next Snapshot</div>
                    <div className="p-4 mx-auto">Oldest Snapshot</div>
                    <div className="p-4 mx-auto">Snapshot Region</div>
                </div>
                <div className="flex space-around p-20 min-w-[100%]">
                    <div className="mx-auto opacity-80">(No data)</div>
                </div>
            </div>
        </>
    );
}
 
export default Backup;