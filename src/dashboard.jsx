import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './utils/firebase'
import DashboardNavbar from './dashboardNavbar';
import DashboardProjectBar from './dashboardProjectBar';

const Dashboard = () => {

    return (
        <>
            <DashboardNavbar />
            <DashboardProjectBar />
        </>
    );
}
 
export default Dashboard;