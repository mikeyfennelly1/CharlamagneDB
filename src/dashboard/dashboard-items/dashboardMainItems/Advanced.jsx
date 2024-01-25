import { useContext } from "react";
import DashboardContext from "../dashboardContext";

const AdvancedVisibleClasses = "text-white visible"
const AdvancedInvisibleClasses = "text-white hidden"

const Advanced = () => {
    const [dashboardContext] = useContext(DashboardContext)
    return (
        <>
            <div className={(dashboardContext === "Advanced" ? AdvancedVisibleClasses : AdvancedInvisibleClasses)}>
                <p>Advanced</p>
            </div>
        </>
    );
}
 
export default Advanced;