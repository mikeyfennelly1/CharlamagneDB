const ManageTheIPAccessList = () => {
    return (
        <>
            <div>
                <p>An IP is a unique numeric identifier for a device connecting to a network. In Atlas, you can only connect to a cluster from a trusted IP address. Within Atlas, you can create a list of trusted IP addresses, referred to as a IP access list, that can be used to connect to your cluster and access your data.</p>
                <h3>Required Access</h3>
                <p>To add your IP address to an IP access list, you must have Project Data Access Read/Write access or higher to the project.</p>
                <h3>Procedure</h3>
                <p>Since you selected the Automate security setup checkbox when you created your first cluster, Atlas automatically adds your IP address to the IP access list.</p>
                <p>To add other IP access list entries, see Configure IP Access List Entries.</p>
                <p>To learn more about the security features available, see Configure Security Features for Database Deployments.</p>
                <h2>Next Steps</h2>
                <p>Now that you added your connection IP address to the IP access list, proceed to Connect to Your Cluster.</p>
            </div>
        </>
    );
}
 
export default ManageTheIPAccessList;