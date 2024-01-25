import '../../documentationStyles.css'
import Note from '../../../doc-components/note'
import Tip from '../../../doc-components/tip'
import TabsSection from '../../../doc-components/tabs/TabsSection'


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
                                        <p className='font-bold'>Atlas Password Policy</p>
                                        <p>Your Atlas user account password must:</p>
                                        <ul>
                                            <li>Contain at least eight characters.</li>
                                            <li>Contain unique characters, numbers, or symbols.</li>
                                            <li>Exclude your email address and Atlas username.</li>
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

const TabsData = [
    {title: "Email Address", content: <EmailAddressContent />},
    {title: "Github Account", content: <GithubAccountContent />},
    {title: "Google Account", content: <GoogleAccountContent />},
]

const AtlasUI = () => {
    return (
        <>
            <div className="text-white bg-[#222] min-w-[300px] px-[80px] py-[40px]">
                <p>To register using the Atlas UI, start at the MongoDB Atlas registration page</p>
                <div className="">
                    <TabsSection 
                    data={TabsData}
                    />
                </div>
                <h2>Log in to your Atlas Account</h2>
                <p>Select a tab based on how you would like to log in:</p>
            </div>
        </>
    );
}
 
export default AtlasUI;