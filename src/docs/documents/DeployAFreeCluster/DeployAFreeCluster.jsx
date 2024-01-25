import Note from "../../doc-components/note";
import TabsSection from "../../doc-components/tabs/TabsSection";
import CodeSnippet from "../../doc-components/codeSnippet";
import Tip from "../../doc-components/tip";
import InlineCodeSnippet from "../../doc-components/inlineCodeSnippet";
import Important from "../../doc-components/important"

import '../documentationStyles.css'

const AtlasCLITabContent = () => {
    return (
        <>
            <div className="bg-[#222] px-[80px] py-[50px]">
                <p>To create one cluster, load sample data, add your IP address to your project IP access list, and create a MongoDB user for your cluster using the Atlas CLI, run the following command:</p>
                <CodeSnippet code={"atlas setup [options]"} />
                <p>To learn more about the command syntax and parameters, see the Atlas CLI documentation for atlas setup.</p>
                <p>For step-by-step instructions on using this command, see Create and Configure an Atlas Cluster using the Atlas CLI.</p>
                <Tip tip={
                    <div>
                        <p className="font-bold">
                            <ul>
                                <li>Install the Atlas CLI</li>
                                <li>Connect to the Atlas CLI</li>
                            </ul>
                        </p>
                    </div>
                }/>
                <h2>Next Steps</h2>
                <p>Now that your cluster is provisioned, proceed to Manage the Database Users for Your Cluster.</p>
            </div>
        </>
    );
}
const AtlasAdministrationAPITabContent = () => {
    return (
        <>
            <div className="bg-[#222] px-[80px] py-[50px]">
                <p>To create a free cluster using the Atlas Administration API, send a POST request to the <InlineCodeSnippet code={"clusters"}/> endpoint with the <InlineCodeSnippet code={"instanceSize"}/> set to <InlineCodeSnippet code={"M0"}/>. To learn more about the resource and parameters, see Create.</p>
                <h2>Next Steps</h2>
                <p>Now that your cluster is provisioned, proceed to Manage the Database Users for Your Cluster.</p>
            </div>
        </>
    );
}
const AtlasUITabContent = () => {
    return (
        <>
            <div className="bg-[#222] px-[80px] py-[50px]">
                <p>To create a free cluster through the Atlas UI:</p>
                <Important message={"The following procedure applies to creating your very first database deployment in the Atlas UI."}/>
                <ol>
                    <li>
                        <h3>Log in to Atlas.</h3>
                        <p>Complete any welcome prompts. If you're logging in for the first time, Atlas sometimes skips the next two steps.</p>
                    </li>
                    <li>
                        <h3>Go to the Overview page for your project.</h3>
                        <ol>
                            <li>If it is not already displayed, select the organization that contains your desired project from the  Organizations menu in the navigation bar.</li>
                            <li>If it is not already displayed, select your desired project from the Projects menu in the navigation bar.</li>
                            <li>If the Overview page is not already displayed, click Overview in the sidebar.</li>
                        </ol>
                    </li>
                    <li>
                        <h3>Create a cluster.</h3>
                        <p>Click the Create button to create a cluster.</p>
                    </li>
                    <li>
                        <h3>Select the M0 option.</h3>
                        <p>M0 clusters are free forever and suitable for users learning MongoDB or developing small proof-of-concept applications.</p>
                    </li>
                    <li>
                        <h3>Specify a name for your cluster in the Name box.</h3>
                        <p>You can specify any name for your cluster. The cluster name can contain ASCII letters, numbers, and hyphens.</p>
                        <p>You can't change the cluster name after Atlas deploys the cluster. Cluster names can't exceed 64 characters in length.</p>
                    </li>
                    <li>
                        <h3>Automate security setup.</h3>
                        <p>Select the Automate security setup checkbox.</p>
                        <p>To learn more about the security features available, see Configure Security Features for Database Deployments.</p>
                    </li>
                    <li>
                        <h3>Add the sample dataset.</h3>
                        <p>Select the Add sample dataset checkbox.</p>
                        <p>You can use the sample dataset to quickly start experimenting with data in MongoDB and using tools such as the Atlas UI and MongoDB Charts.</p>
                    </li>
                    <li>
                        <h3>Select your preferred Provider.</h3>
                        <p>Atlas supports M0 free clusters on Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure.</p>
                    </li>
                    <li>
                        <h3>Select your preferred Region.</h3>
                        <p>Atlas displays only the cloud provider regions that support M0 free clusters.</p>
                    </li>
                    <li>
                        <h3>Click Create Deployment to deploy the cluster.</h3>
                        <p>The Connect wizard appears.</p>
                        <p>Once you deploy your cluster, it can take up to 10 minutes for your cluster to provision and become ready to use.</p>
                    </li>
                    <li>
                        <h3>Create a database user.</h3>
                        <p>Since you selected the Automate security setup checkbox, Atlas automatically adds your IP address to the IP access list.</p>
                        <ol>
                            <li>Specify a Username for your database user.</li>
                            <li>Specify a Password or copy the secure password that Atlas suggests.</li>
                            <li>Click Create Database User.</li>
                            <p>To learn more about the security features available, see Configure Security Features for Database Deployments.</p>
                        </ol>
                    </li>
                </ol>

                <h2>Next Steps</h2>
                <p>Now that your cluster is provisioned, proceed to Manage the Database Users for Your Cluster.</p>
            </div>
        </>
    );
}

const TabsData = [
    {title: "Atlas CLI", content: <AtlasCLITabContent/>},
    {title: "Atlas Administration API", content: <AtlasAdministrationAPITabContent/>},
    {title: "Atlas UI", content: <AtlasUITabContent/>},
]

const DeployAFreeCluster = () => {
    return (
        <>
            <p>Atlas free clusters provide a small-scale development environment to host your data. Free clusters never expire, and provide access to a subset of Atlas features and functionality.</p>
            <p>Paid clusters provide full access to Atlas features, configuration options, and operational capabilities. For more information on paid clusters, including deployment instructions, see Create a Cluster.</p>
            
            <Note message={"You can deploy only one free cluster per Atlas project."} />
            
            <h2>Procedure</h2>
            <p>You can create free clusters through the Atlas CLI, Atlas User Interface, and Atlas Administration API. Select the appropriate tab based on how you would like to create the free clusters.</p>
            <TabsSection data={TabsData} />
        </>
    );
}
 
export default DeployAFreeCluster;