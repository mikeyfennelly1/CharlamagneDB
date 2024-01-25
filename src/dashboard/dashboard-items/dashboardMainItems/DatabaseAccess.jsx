import { useContext } from "react";
import DashboardContext from "../dashboardContext";

const DatabaseAccessVisibleClasses = "text-white visible"
const DatabaseAccessInvisibleClasses = "text-white hidden"

const DatabaseAccess = () => {
    const [dashboardContext] = useContext(DashboardContext)
    return (
        <>
            <div className={(dashboardContext === "Database Access" ? DatabaseAccessVisibleClasses : DatabaseAccessInvisibleClasses)}>
                <p>Database Access</p>
            </div>
        </>
    );
}
 
export default DatabaseAccess;