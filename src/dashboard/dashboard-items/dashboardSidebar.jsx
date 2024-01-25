import { useContext } from "react"
import CreateADatabaseUser from "./dashboardContext"
import DashboardContext from "./dashboardContext"

const sidebarActiveClasses = "text-mainPink"
const sidebarInactiveClasses = "text-white opacity-80"

const DashboardSidebar = (props) => {
    const [activityContext, setActivityContext] = useContext(DashboardContext)
    const dashboardSidebarItems = props.dashboardSidebarItems;
    return (
        <>
            <section className="text-white font-[TT-Autonomous-Mono-Reg] inline-block max-w-fit">
                <div className="min-h-screen max-w-fit bg-[#121212] p-[50px] inline-block">
                    <div>
                        <h2 className="font-[TT-Travels-Next-Med] text-mainPink text-2xl">Overview</h2>
                        <ul className="mb-[50px] mt-[40px]">
                            <h2 className="mb-[10px] text-xl mt-[40px]">Deployment</h2>
                            <li className='opacity-80'>Databases</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-[10px] text-xl mt-[40px]">Security</h2>
                        {dashboardSidebarItems.map((item) => (
                            <div className={(item.id === activityContext ? sidebarActiveClasses : sidebarInactiveClasses)} key={ item.id } >
                                <button
                                onClick={() => setActivityContext(item.id)}>
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