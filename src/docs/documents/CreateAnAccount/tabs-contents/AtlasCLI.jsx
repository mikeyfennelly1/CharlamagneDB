import '../../documentationStyles.css'
import CodeSnippet from '../../../doc-components/codeSnippet'
import Tip from '../../../doc-components/tip'
import Note from '../../../doc-components/note'
import InlineCodeSnippet from '../../../doc-components/inlineCodeSnippet'

const AtlasCLI = () => {
    return (
        <>
            <div className="text-white bg-[#222] min-w-[300px] px-[80px] py-[40px]">
            <h2>Register a new Atlas Account</h2>
                <p>Select a tab based on how you would like to register your account:</p>

                <CodeSnippet code={"atlas auth register [options]"}/>
                <p>To learn more about the command syntax and parameters, see the Atlas CLI documentation for atlas auth register.</p>
                <Tip tip={
                    <ul>
                        <li>Install the Atlas CLI</li>
                        <li>Connect to the Atlas CLI</li>
                    </ul>
                }/>
                <Note message={
                    <p>If you run <InlineCodeSnippet code={"atlas setup"}/> with the default selections, you don't need to run <InlineCodeSnippet code={"atlas auth register"}/>.</p>
                }/>
                <p>To authenticate with Atlas using the Atlas CLI, run the following command:</p>
                <CodeSnippet code={"atlas auth login [options]"}/>
                <p>To learn more about the command syntax and parameters, see the Atlas CLI documentation for atlas auth login.</p>
                <Tip tip={
                    <ul>
                        <li>Install the Atlas CLI</li>
                        <li>Connect to the Atlas CLI</li>
                    </ul>
                }/>
                <p>For step-by-step instructions on logging in using the Atlas CLI, see Connect from the Atlas CLI.</p>
                <h3>Create an Atlas Organization and Project</h3>
                <p>Atlas creates an organization and project for you. You can also create them on your own.</p>
                <p>At the Organization level, you can implement security controls and create users which work across one or more Projects. To learn more, see The Organization Level.</p>
                <p>You can create project-level Atlas users and roles with appropriate access to the different production and development application environments. To learn more, see The Project Level.</p>
                <p>Create an Atlas organization and then create a project in this organization. You will deploy your first cluster in this project.</p>

                <h3>Next Steps</h3>
                <p>With your Atlas account, open the organization and project, and then proceed to Deploy a Free Cluster.</p>
                <Tip tip={
                    <div>
                        <p className='font-bold'>See Also:</p>
                        <p>To learn about shortcuts you can use to navigate your new Atlas account, see Quickly Navigate with Atlas Goto.</p>
                    </div>

                } />
            </div>
        </>
    );
}
 
export default AtlasCLI;