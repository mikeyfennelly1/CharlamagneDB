import { createContext, useContext, useState } from 'react';
import DashboardNavbar from './dashboardNavbar';
import DashboardProjectBar from './dashboardProjectBar';
import DashboardMain from './dashboardMain';

const ActivityContext = createContext(null)

const dashboardSidebarItems = [
    { title: 'Quickstart', body: "lorem", id: 1 },
    { title: 'Backup', body: "lorem", id: 2 },
    { title: 'Database Access', body: "lorem", id: 3 },
    { title: 'Network Access', body: "lorem", id: 4 },
    { title: 'Advanced', body: "lorem", id: 5 },
];

const Dashboard = () => {

    return (
        <>
        <ActivityContext.Provider value={useState(1)}> 
            <DashboardNavbar />
            <DashboardProjectBar />
            <div className='flex'>
                <DashboardSidebar dashboardSidebarItems={dashboardSidebarItems} />
                <DashboardMain />
            </div>
        </ActivityContext.Provider>
        </>
    );
}
 
export default Dashboard;

const sidebarActiveClasses = "text-mainPink"
const sidebarInactiveClasses = "text-white opacity-80"

const DashboardSidebar = (props) => {
    const [activityContext, setActivityContext] = useContext(ActivityContext)
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