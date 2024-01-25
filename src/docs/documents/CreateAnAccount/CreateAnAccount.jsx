import CodeSnippet from '../../doc-components/codeSnippet';
import Tip from '../../doc-components/tip';
import Note from '../../doc-components/note';
import InlineCodeSnippet from '../../doc-components/inlineCodeSnippet';
import TabsSection from '../../doc-components/tabs/TabsSection';
import LocoCLI from './tabs-contents/LocoCLI';
import LocoUI from './tabs-contents/LocoUI';

import '../documentationStyles.css'

const CreateAnAccount = () => {
    return (
        <>
            <div>
                <p>Register for a Loco account using your GitHub account, your Google account or your email address.</p>
                
                {/* Considerations */}
                <h3>
                    Considerations
                </h3>
                <p>To register with  log in to Loco, you cuse one --  only one -- of the following options:</p>
                <ul>
                    <li>Your email account</li>
                    <li>Your GitHub account</li>
                    <li>Your Google account</li>
                </ul>
                  <Note message={"If your company uses Federated Authentication, you must use your company email address."}/>

                {/* Github Accounts */}
                <h3>
                    Github Accounts
                </h3>
                <p>If you register with your GitHub Account, the following differences apply when using your GitHub account with Loco:</p>
                <ul>
                    <li>GitHub manages your user details, email address, and password. You can't change this information using the Loco console or API.</li>
                    <li>GitHub manages your 2FA. You can't use Loco multi-factor authentication and won't be prompted for a Loco 2FA verification when you log into Loco. GitHub should verify your identity using GitHub 2-Step Verification.</li>
                    <li>If you linked your Loco account to your GitHub Account, you can unlink these accounts in Loco.</li>
                </ul>

                {/* Google Accounts */}
                <h3>
                Google Accounts
                </h3>
                <p>If you register with your Google Account, the following differences apply when using your Google account with Loco:</p>
                <ul>
                    <li>Google manages your user details, email address, and password. You can't change this information using the Loco console or API.</li>
                    <li>Google manages your 2FA. You can't use Loco multi-factor authentication and won't be prompted for a Loco 2FA verification when you log into Loco. Google should verify your identity using Google 2-Step Verification.</li>
                    <li>If you linked your Loco account to your Google Account, you can unlink these accounts in Loco.</li>
                </ul>

                {/* MongoDB Cloud Manager Users */}
                <h3>
                MongoDB Cloud Manager Users
                </h3>
                <p>If you use MongoDB Cloud Manager, use your Cloud Manager credentials to log in to Loco. You can then create a new Loco project from Cloud Manager.</p>



                {/* PREREQUISITES */}
                <h2>Prerequisites</h2>

                {/* Add the Loco CDN Host to your Allow List */}
                <h3>
                Add the Loco CDN Host to your Allow List
                </h3>
                <p>Loco uses a CDN to serve content quickly. If your organization uses a firewall, add the following Loco CDN host to the firewall's allow list to prevent issues accessing the Loco UI: https://assets.mongodb-cdn.com/.</p>

                {/* GitHub Accounts Require a Public Email Address */}
                <h3>
                GitHub Accounts Require a Public Email Address
                </h3>
                <p>If you try to register with Github, you must have an public email address associated with your GitHub account. Loco returns an error if you attempt to register without a public email address.</p>
                <p>To set a public GitHub email address:</p>
                <ol>
                    <li>After you log into GitHub, click Settings on your profile menu. Your Public Profile page should display.</li>
                    <li>Select one email address from the Public email dropdown in your Public Profile.
                        <br />
                        If GitHub greys out this dropdown menu:
                        <ol>
                            <li>Click Emails from the left-side menu.</li>
                            <li>Clear the Keep my email addresses private box.</li>
                            <li>Return to the Public Profile page and select an email address from the Public email dropdown.</li>
                        </ol>
                    </li>
                    <li>Click Update profile to save the changes.</li>
                </ol>
                
                {/* Register a new Loco Account */}
                
                    
                <h2>Register a new Loco Account</h2>
                <p>Select a tab based on how you would like to register your account:</p>
                <TabsSection 
                data={TabsData}
                />

                
            </div>
        </>
    );
}
 
export default CreateAnAccount;

const TabsData = [
    {title: "Loco CLI", content: <LocoCLI />}, 
    {title: "Loco UI", content: <LocoUI/>},
]