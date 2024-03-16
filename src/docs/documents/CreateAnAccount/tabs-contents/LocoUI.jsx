import '../../documentationStyles.css'
import Note from '../../../doc-components/note'
import Tip from '../../../doc-components/tip'
import TabsSection from '../../../doc-components/tabs/TabsSection'
import CodeSnippet from '../../../doc-components/codeSnippet'

const EmailAddressContent = () => {
    return (
        <>
            <div className='text-white pl-[30px] py-[50px]'>
                <ol className='list-[lower-alpha]'>
                    <li>Please provide the following information about yourself:
                        <ul className='font-bold'>
                            <li>Email Address</li>
                            <li>First Name</li>
                            <li>Last Name</li>
                            <li>Password
                                <Note message={
                                    <div>
                                        <p className='font-bold'>Loco Password Policy</p>
                                        <p>Your Loco user account password must:</p>
                                        <ul>
                                            <li>Contain at least eight characters.</li>
                                            <li>Contain unique characters, numbers, or symbols.</li>
                                            <li>Exclude your email address and Loco username.</li>
                                            <li>Differ from your previous four passwords.</li>
                                            <li>Differ from the most commonly used passwords.</li>
                                        </ul>
                                    </div>
                                } />
                            </li>
                            <li>(Optional) Company Name</li>
                        </ul>
                    </li>
                    <li>Review the Terms of Service and the Privacy Policy.</li>
                    <li>Click the checkbox to accept the Terms and Policy.</li>
                    <li>Verify that you're not a robot.</li>
                    <li>Click Sign up.</li>
                </ol>
            </div>
        </>
    );
}

const GithubAccountContent = () => {
    return (
        <>
            <div className='text-white'>
                This is some content 2
            </div>
        </>
    );
}

const GoogleAccountContent = () => {
    return (
        <>
            <div className='text-white'>
                This is some content 3
            </div>
        </>
    );
}

const AccountOrEmailTabsData = [
    {title: "Email Address", content: <EmailAddressContent />},
    {title: "Github Account", content: <GithubAccountContent />},
    {title: "Google Account", content: <GoogleAccountContent />},
]


const LocoCLITabContent = () => {
    return (
        <>
            <div className='text-white pl-[30px] py-[50px]'>
                <p>To authenticate with Loco using the Loco CLI, run the following command:</p>
                <CodeSnippet code={"loco auth login [options]"}/>
                <p>To learn more about the command syntax and parameters, see the Loco CLI documentation for loco auth login.</p>
                <Tip tip={
                    <ul>
                        <li>Install the Loco CLI</li>
                        <li>Connect to the Loco CLI</li>
                    </ul>
                }/>
                <p>For step-by-step instructions on logging in using the Loco CLI, see Connect from the Loco CLI.</p>
                <h3>Create A Loco Organization and Project</h3>
                <p>Loco creates an organization and project for you. You can also create them on your own.</p>
                <p>At the Organization level, you can implement security controls and create users which work across one or more Projects. To learn more, see The Organization Level.</p>
                <p>You can create project-level Loco users and roles with appropriate access to the different production and development application environments. To learn more, see The Project Level.</p>
                <p>Create an Loco organization and then create a project in this organization. You will deploy your first cluster in this project.</p>
            
                <h3>Next Steps</h3>
                <p>With your Loco account, open the organization and its project, and then proceed to Deploy a Free Cluster.</p>
                <Tip tip={"To learn about shortcuts you can use to navigate your new Loco account, see Quickly Navigate with Loco Goto."}/>
            </div>
        </>
    );
}

const LocoUITabContent = () => {
    return (
        <>
            <div className='text-white pl-[30px] py-[50px]'>
                <p>To log in using the Loco UI:</p>
                <p>If you already created a CharlemagneDB account using your email address, sign in to your account:</p>
                <ol className='mt-[30px]'>
                    <li>Navigate to CharlemagneDB Loco login page.</li>
                    <li>Enter your email address.</li>
                    <li>Click Next.</li>
                    <li>Follow the prompts to log in to your account.</li>
                </ol>

                <h2>Create a Loco Organization and Project</h2>
                <p>Loco creates an organization and project for you. You can also create them on your own.</p>
                <p>At the Organization level, you can implement security controls and create users which work across one or more Projects. To learn more, see The Organization Level.</p>
                <p>You can create project-level Loco users and roles with appropriate access to the different production and development application environments. To learn more, see The Project Level.</p>
                <p>Create a Loco organization and then create a project in this organization. You will deploy your first cluster in this project.</p>

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

const TabsData = [
    {title: "Loco CLI", content: <LocoCLITabContent />},
    {title: "Loco UI", content: <LocoUITabContent />},
]


const LocoUI = () => {
    return (
        <>
            <div className="text-white bg-[#222] min-w-[300px] px-[80px] py-[40px]">
                <p>To register using the Loco UI, start at the CharlemagneDB Loco registration page.</p>
                <div className="">
                    <TabsSection 
                    data={AccountOrEmailTabsData}
                    />
                </div>

                
                <h2>Log in to your Loco Account</h2>
                <p>Select a tab based on how you would like to log in:</p>
                <div className="">
                    <TabsSection 
                    data={TabsData}
                    />
                </div>
            </div>
        </>
    );
}
 
export default LocoUI;