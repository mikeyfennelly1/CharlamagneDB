import { useState } from 'react';
import DashboardNavbar from './dashboard-items/dashboardNavbar';
import DashboardProjectBar from './dashboard-items/dashboardProjectBar';
import DashboardMain from './dashboard-items/dashboardMain';
import DashboardSidebar from './dashboard-items/dashboardSidebar'
import DashboardContext from './dashboard-items/dashboardContext';

const dashboardSidebarItems = [
    { title: 'Quickstart', body: "lorem"},
    { title: 'Backup', body: "lorem"},
    { title: 'Database Access', body: "lorem"},
    { title: 'Network Access', body: "lorem"},
    { title: 'Advanced', body: "lorem"},
];

const Dashboard = () => {
    return (
        <>
        <DashboardContext.Provider value={useState("Overview")}> 
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