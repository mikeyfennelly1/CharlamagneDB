import Advanced from "./dashboardMainItems/Advanced";
import Backup from "./dashboardMainItems/Backup";
import DatabaseAccess from "./dashboardMainItems/DatabaseAccess";
import Databases from "./dashboardMainItems/Databases";
import NetworkAccess from "./dashboardMainItems/NetworkAccess";
import Overview from "./dashboardMainItems/Overview";
import Quickstart from "./dashboardMainItems/Quickstart";

const DashboardMain = () => {
    return (
        <>
            <Advanced />
            <Backup />
            <DatabaseAccess />
            <Databases />
            <NetworkAccess />
            <Overview />
            <Quickstart />
        </>
    );
}

export default DashboardMain;