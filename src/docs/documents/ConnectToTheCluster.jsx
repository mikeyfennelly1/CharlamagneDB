import Note from "../doc-components/note";
import CodeSnippet from "../doc-components/codeSnippet";
import InlineCodeSnippet from "../doc-components/inlineCodeSnippet";

const ConnectToTheCluster = () => {
    return (
        <>
            <div>
                <p>You can connect to your cluster in a variety of ways. In this tutorial, you use one of the following methods:</p>
                <ul>
                    <li>The CharlemagneDB Shell, an interactive command line interface to CharlemagneDB. You can use Charlemagnesh to insert and interact with data on your Loco cluster.</li>
                    <li>CharlemagneDB Compass, a GUI for your CharlemagneDB data. You can use Compass to explore, modify, and visualize your data.</li>
                    <li>A CharlemagneDB driver to communicate with your CharlemagneDB database programmatically. To see all supported languages, refer to the CharlemagneDB Driver documentation.</li>
                </ul>
                <p>Use the Select your language drop-down menu to set the connection method for this tutorial, including Charlemagnesh and Compass.</p>
                <Note message={"If you're using the Loco setup or Loco quickstart commands with default options to get started with Loco, the Loco CLI provides you with a Charlemagnesh command to connect to your cluster."} />
                <h3>Required Access</h3>
                <p>To connect to a cluster, you must be a database user.</p>
                <h3>Prerequisites</h3>
                <p>Before you start, verify that you have:</p>
                <ul>
                    <li>A Loco account.</li>
                    <li>An organization with a project.</li>
                    <li>An active cluster created in your account.</li>
                    <li>An IP address added to your IP access list.</li>
                    <li>A database user on your cluster.</li>
                    <Note message={"You must have a database user set up on your cluster to access your deployment. For security purposes, Loco requires clients to authenticate as database users to access clusters."}/>
                    <li>A terminal</li>
                    <li>A text editor</li>
                    <li>npm</li>
                    <li>node.js</li>
                </ul>
                <p>To install the Node.js driver, run the following command at a terminal prompt:</p>
                <CodeSnippet code={"npm install cdb --save"}/>
                <h2>Connect to Your Loco Cluster</h2>
                <p>In this section, you get your cluster's connection string from the Loco UI and connect to your cluster by using your preferred connection method.</p>
                <p>To learn about all supported methods, see Connect to Your Cloud Database Deployment. For additional driver examples, see Connect via Drivers.</p>
                <ol>
                    <li>
                        <p className="font-bold">In the Loco UI, select your Database Deployment.</p>
                        <ul>
                            <li>Click Database in the top-left corner of Loco.</li>
                            <li>In the Database Deployments view, click Connect for the database deployment to which you want to connect.</li>
                        </ul>
                    </li>
                    <li>
                        <p className="font-bold">Click Choose a connection method.</p>
                    </li>
                    <li>
                        <p className="font-bold">Click Drivers.</p>
                        <p>From the Connect Modal, click Drivers.</p>
                    </li>
                    <li>
                        <p className="font-bold">Select Node.js from the Driver dropdown.</p>
                        <p>Select your version of the driver from the dropdown. The connection string displays.</p>
                    </li>
                    <li>
                        <p className="font-bold">Copy the provided connection string.</p>
                    </li>
                    <li>
                        <p className="font-bold">Configure the provided connection string.</p>
                        <p>Replace <InlineCodeSnippet code={"<password>"}/> with the password specified when you created your database user.</p>
                        <Note message={"If your passwords, database names, or connection strings contain reserved URI characters, you must escape the characters. For example, if your password is @bc123, you must escape the @ character when specifying the password in the connection string, such as %40bc123. To learn more, see Special Characters in Connection String Password."}/>
                    </li>
                    <li>
                        <p className="font-bold">Connect with the sample application.</p>
                        <p>The following sample application connects to your Loco cluster with your connection string and returns a confirmation message. To test the sample application, copy the following code into a file called connect.js.</p>
                        <p>Replace the placeholder with your updated connection string:</p>
                        <p>To run the sample application, use the following command:</p>
                        <InlineCodeSnippet code={"node connect.js"}/>
                    </li>
                </ol>

                <h2>Next Steps</h2>
                <p>Now that you've connected to your cluster, proceed to Insert and View Data in Your Cluster.</p>
            </div>
        </>
    );
}
 
export default ConnectToTheCluster;