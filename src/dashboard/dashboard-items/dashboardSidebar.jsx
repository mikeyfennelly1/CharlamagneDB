import { useContext } from "react"
import DashboardContext from "./dashboardContext"

const sidebarActiveClasses = "text-mainPink"
const sidebarInactiveClasses = "text-white opacity-80"

const overviewActiveClasses = "hover:cursor-pointer font-[TT-Travels-Next-Med] text-mainPink text-2xl"
const overviewInctiveClasses = "hover:cursor-pointer font-[TT-Travels-Next-Med] text-white text-2xl opacity-80"

const DashboardSidebar = (props) => {
    const [dashboardContext, setDashboardContext] = useContext(DashboardContext)
    console.log(dashboardContext)
    const dashboardSidebarItems = props.dashboardSidebarItems;
    return (
        <>
            <section className="text-white font-[TT-Autonomous-Mono-Reg] max-w-fit">
                <div className=" max-w-fit bg-[#121212] min-h-[100%] p-[50px]">
                    <div>
                        <h2 onClick={() => setDashboardContext("Overview")} className={("Overview" === dashboardContext ? overviewActiveClasses : overviewInctiveClasses)}>Overview</h2>
                        <ul className="mb-[50px] pl-0 mt-[40px]">
                            <h2 className=" mb-[10px] text-2xl mt-[40px] text-white">Deployment</h2>
                            <button onClick={() => setDashboardContext("Databases")} className={("Databases" === dashboardContext ? sidebarActiveClasses : sidebarInactiveClasses)}>Databases</button>
                        </ul>
                    </div>
                    <div>
                        <h2 className=" mb-[10px] text-2xl mt-[40px] text-white">Security</h2>
                        {dashboardSidebarItems.map((item) => (
                            <div className={(item.title === dashboardContext ? sidebarActiveClasses : sidebarInactiveClasses)} key={ item.title } >
                                <button
                                onClick={() => setDashboardContext(item.title)}>
                                    { item.title }
                                </button>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
}

export default DashboardSidebar;