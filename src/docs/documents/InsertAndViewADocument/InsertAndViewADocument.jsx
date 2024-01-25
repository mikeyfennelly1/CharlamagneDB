import Tip from "../../doc-components/tip";
import Note from "../../doc-components/note";
import CodeSnippet from "../../doc-components/codeSnippet";
import InlineCodeSnippet from "../../doc-components/inlineCodeSnippet";

const InsertAndViewADocument = () => {
    return (
        <>
            <div>
                <p>After you've connected to your Loco cluster, you can interact with it. In this tutorial, you insert data into your cluster and read the new data by using csh, the Loco UI, CharlemagneDB Compass, or a supported CharlemagneDB driver.</p>
                <h3>Required Access</h3>
                <p>To interact with a cluster, you must be a database user.</p>
                <h3>Prerequisites</h3>
                <p>Before you start, you must configure your preferred connection method. To learn more, see Connect to Your Cluster.</p>
                <h3>Insert and View Data</h3>
                <p>The following sample application:</p>
                <ul>
                    <li>Establishes a connection to your Loco cluster.</li>
                    <li>Inserts a document to a collection called people in the gettingStarted database.</li>
                    <li>Searches the people collection for documents that have a name.last value of Turing and returns the document.</li>
                </ul>
                <p>Create a file called <InlineCodeSnippet code={"insert-data.js"}/> and copy the following code into the file:</p>
                <Note message={"Replace the placeholder with your Loco connection string."}/>
                
{/* Multi Line Code block needed here */}

                <p>To run the sample application, use the following command:</p>
                <CodeSnippet code={"node insert-data.js"}/>

                <Note message={"You might see a different value for ObjectId, because it is a system-generated value."}/>
                <Tip message={"To learn more about querying data with Node.js, see the Node.js documentation."} />
                <h2>Next Steps</h2>
                <p>If you continue to grow your cluster, consider scaling your cluster to support more users and operations.</p>
                <p>Since you selected the Add sample dataset checkbox when you created your first cluster, Loco automatically loads the sample data. To learn more, see loading sample data.</p>
                <p>You can also generate synthetic data. To learn more, see Generate Synthetic Data.</p>
            </div>

        </>
    );
}
 
export default InsertAndViewADocument;