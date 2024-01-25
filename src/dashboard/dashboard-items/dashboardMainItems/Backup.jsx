import { useContext } from "react";
import DashboardContext from "../dashboardContext";

const BackupVisibleClasses = "text-white visible"
const BackupInvisibleClasses = "text-white hidden"

const Backup = () => {
    const [dashboardContext] = useContext(DashboardContext)
    return (
        <>
            <div className={(dashboardContext === "Backup" ? BackupVisibleClasses : BackupInvisibleClasses)}>
                <p>Backup</p>
            </div>
        </>
    );
}
 
export default Backup;