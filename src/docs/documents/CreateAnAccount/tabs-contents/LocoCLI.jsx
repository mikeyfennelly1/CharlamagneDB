import '../../documentationStyles.css'
import CodeSnippet from '../../../doc-components/codeSnippet'
import Tip from '../../../doc-components/tip'
import Note from '../../../doc-components/note'
import InlineCodeSnippet from '../../../doc-components/inlineCodeSnippet'

const LocoCLI = () => {
    return (
        <>
            <div className="text-white bg-[#222] min-w-[300px] px-[80px] py-[40px]">
            <h2>Register a new Loco Account</h2>
                <p>Select a tab based on how you would like to register your account:</p>

                <CodeSnippet code={"Loco auth register [options]"}/>
                <p>To learn more about the command syntax and parameters, see the Loco CLI documentation for Loco auth register.</p>
                <Tip tip={
                    <ul>
                        <li>Install the Loco CLI</li>
                        <li>Connect to the Loco CLI</li>
                    </ul>
                }/>
                <Note message={
                    <p>If you run <InlineCodeSnippet code={"Loco setup"}/> with the default selections, you don't need to run <InlineCodeSnippet code={"Loco auth register"}/>.</p>
                }/>

                <h2>Log in to your new Loco Account</h2>
                <p>Select a tab based on how you would like to log in to your account:</p>
                <p>To authenticate with Loco using the Loco CLI, run the following command:</p>
                <CodeSnippet code={"Loco auth login [options]"}/>
                <p>To learn more about the command syntax and parameters, see the Loco CLI documentation for Loco auth login.</p>
                <Tip tip={
                    <ul>
                        <li>Install the Loco CLI</li>
                        <li>Connect to the Loco CLI</li>
                    </ul>
                }/>
                <p>For step-by-step instructions on logging in using the Loco CLI, see Connect from the Loco CLI.</p>
                <h2>Create an Loco Organization and Project</h2>
                <p>Loco creates an organization and project for you. You can also create them on your own.</p>
                <p>At the Organization level, you can implement security controls and create users which work across one or more Projects. To learn more, see The Organization Level.</p>
                <p>You can create project-level Loco users and roles with appropriate access to the different production and development application environments. To learn more, see The Project Level.</p>
                <p>Create an Loco organization and then create a project in this organization. You will deploy your first cluster in this project.</p>

                <h2>Next Steps</h2>
                <p>With your Loco account, open the organization and project, and then proceed to Deploy a Free Cluster.</p>
                <Tip tip={
                    <div>
                        <p className='font-bold'>See Also:</p>
                        <p>To learn about shortcuts you can use to navigate your new Loco account, see Quickly Navigate with Loco Goto.</p>
                    </div>

                } />
            </div>
        </>
    );
}
 
export default LocoCLI;