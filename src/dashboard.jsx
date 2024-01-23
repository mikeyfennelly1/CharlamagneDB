import { createContext, useContext, useState } from 'react';
import DashboardNavbar from './dashboardNavbar';
import DashboardProjectBar from './dashboardProjectBar';

const ActivityContext = createContext(null)

const dashboardSidebarItems = [
    { title: 'Create an account', body: "lorem", id: 1 },
    { title: 'Deploy a free cluster', body: "lorem", id: 2 },
    { title: 'Manage the IP access List', body: "lorem", id: 3 },
    { title: 'Create a Database User', body: "lorem", id: 4 },
    { title: 'Connect to the cluster', body: "lorem", id: 5 },
    { title: 'Insert and view a document', body: "lorem", id: 6 },
];

const Dashboard = () => {

    return (
        <>
        <ActivityContext.Provider value={useState(1)}> 
            <DashboardNavbar />
            <DashboardProjectBar />
            <DashboardSidebar dashboardSidebarItems={dashboardSidebarItems}/>
        </ActivityContext.Provider>
        </>
    );
}
 
export default Dashboard;

const sidebarActiveClasses = "text-mainPink"
const sidebarInactiveClasses = "text-white"

const DashboardSidebar = (props) => {
    const [activityContext, setActivityContext] = useContext(ActivityContext)
    const dashboardSidebarItems = props.dashboardSidebarItems;
    return (
        <>
            <section className="grid grid-cols-2 text-white font-[TT-Autonomous-Mono-Reg]">
                <div className="text-white  min-h-screen min-w-[500px] font-[TT-Autonomous-Mono-Reg] mt-[100px] bg-[#121212] pl-[50px] pt-[50px]">
                    <div>
                        <h2 className="font-[TT-Travels-Next-Med] text-mainPink text-lg">CharlemagneDB Documentation</h2>
                        <h2 className="text-white mb-[50px] text-lg mt-[20px]">CharlemagneDB Loco</h2>
                    </div>
                    <div>
                        {dashboardSidebarItems.map((doc) => (
                            <div className={(doc.id === activityContext ? sidebarActiveClasses : sidebarInactiveClasses)} key={ doc.id } >
                                <button
                                onClick={() => setActivityContext(doc.id)}>
                                    { doc.title }
                                </button>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
}