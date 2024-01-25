import { useContext } from "react";
import DashboardContext from "../dashboardContext";

const QuickstartVisibleClasses = "text-white visible"
const QuickstartInvisibleClasses = "text-white hidden"


const Quickstart = () => {
    const [dashboardContext] = useContext(DashboardContext)
    return (
        <>
            <div className={(dashboardContext === "Quickstart" ? QuickstartVisibleClasses : QuickstartInvisibleClasses)}>
                <p>Quickstart</p>
            </div>
        </>
    );
}
 
export default Quickstart;