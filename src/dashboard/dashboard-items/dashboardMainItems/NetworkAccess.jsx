import { useContext } from "react";
import DashboardContext from "../dashboardContext";

const NetworkAccessVisibleClasses = "text-white visible"
const NetworkAccessInvisibleClasses = "text-white hidden"

const NetworkAccess = () => {
    const [dashboardContext] = useContext(DashboardContext)
    return (
        <>
            <div className={(dashboardContext === "Network Access" ? NetworkAccessVisibleClasses : NetworkAccessInvisibleClasses)}>
                <p>Network Access</p>
            </div>
        </>
    );
}
 
export default NetworkAccess;