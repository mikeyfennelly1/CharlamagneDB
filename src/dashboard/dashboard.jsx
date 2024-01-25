import { useState } from 'react';
import DashboardNavbar from './dashboard-items/dashboardNavbar';
import DashboardProjectBar from './dashboard-items/dashboardProjectBar';
import DashboardMain from './dashboard-items/dashboardMain';
import DashboardSidebar from './dashboard-items/dashboardSidebar'
import DashboardContext from './dashboard-items/dashboardContext';

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
        <DashboardContext.Provider value={useState(1)}> 
            <DashboardNavbar />
            <DashboardProjectBar />
            <div className='flex'>
                <DashboardSidebar dashboardSidebarItems={dashboardSidebarItems} />
                <DashboardMain />
            </div>
        </DashboardContext.Provider>
        </>
    );
}
 
export default Dashboard;