import { createContext, useContext, useState } from "react";
import DashboardContext from "../dashboardContext";
import '../../../docs/documents/documentationStyles.css'

const QuickstartVisibleClasses = "text-white visible visible text-white min-w-[1350px] max-w-[1350px] min-h-[200px] inline-block px-[200px] py-[100px] font-[TT-Autonomous-Mono-Reg]"
const QuickstartInvisibleClasses = "text-white hidden"

const CardContext1 = createContext(null)
const CardContext2 = createContext(null)

const Quickstart = () => {
    const [dashboardContext] = useContext(DashboardContext)
    return (
        <>
            <div className={(dashboardContext === "Quickstart" ? QuickstartVisibleClasses : QuickstartInvisibleClasses)}>
                <h2>Security Quickstart</h2>
                <p>To access data stored in Loco, you’ll need to create users and set up network security controls. Learn more about security setup</p>
                <h3>How would you like to authenticate your connection?</h3>
                <p>Your first user will have permission to read and write any data in your project.</p>

                <CardContext1.Provider value={useState("Username and Password")}>
                <div className="">
                    <UsernameAndPasswordCard />
                    <CertificateCard />
                    <UsernameAndPasswordContent />
                    <CertificateContent />
                </div>
                </CardContext1.Provider>

                <CardContext2.Provider value={useState("My Local Environment")}>
                    <h2>Where would you like to connect from?</h2>
                    <p>Enable access for any network(s) that need to read and write data to your cluster.</p>
                <div className="flex items-start">
                    <MyLocalEnvironmentCard/>
                    <CloudEnvironmentCard/>
                </div>
                    <MyLocalEnvironmentContent/>
                    <CloudEnvironmentContent/>
                </CardContext2.Provider>


            </div>
        </>
    );
}
 
export default Quickstart;

const UsernameAndPasswordCard = () => {

    const [cardContext, setCardContext] = useContext(CardContext1)
    return (
        <>
            <div onClick={() => setCardContext("Username and Password")}
            className={`rounded-[10px] hover:cursor-pointer mt-[50px] px-auto border inline-block min-w-[300px] ml-[20px] p-10 ` + (cardContext === "Username and Password" ? "border-mainPink text-mainPink" : null) }>Username and Password</div>
        </>
    );
}

const UsernameAndPasswordContent = () => {
    const [cardContext] = useContext(CardContext1)
    return (
        <>
            <div className={`text-white bg-[#222] p-10 mx-[20px] mt-[50px] rounded-[10px] ` + (cardContext === "Username and Password" ? null : "hidden") }>
                <p>Create a database user using a username and password. Users will be given the read and write to any database privilege by default. You can update these permissions and/or create additional users later. Ensure these credentials are different to your CDB Cloud username and password. You can manage existing users via the Database Access Page.</p>
                <p className="text-[1rem] pb-0 mb-0 opacity-60">Username</p>
                <input type="text" placeholder="Enter Username" className="bg-[#111] p-2 rounded-[10px] border min-w-[400px] mb-[20px]"/>

                <p className="text-[1rem] pb-0 mb-0 opacity-60">Password</p>
                <input type="text" placeholder="Enter Password" className="bg-[#111] p-2 rounded-[10px] border min-w-[400px] mb-[20px]"/>
                <button className="hover:cursor-[not-allowed] bg-[#111] p-2 rounded-[10px] border  px-4 ml-[20px]">Autogenerate Secure Password</button>
            </div>
        </>
    );
}

const CertificateContent = () => {
    const [cardContext] = useContext(CardContext1)
    return (
        <>
            <div className={`text-white bg-[#222] p-10 mx-[20px] mt-[50px] rounded-[10px] ` + (cardContext === "Certificate" ? null : "hidden") }>
                <p>Charlemagne uses X.509 certificates for passwordless authentication. Users will be given the read and write to any database privilege by default.</p>
                <p className="text-[1rem] pb-0 mb-0 opacity-60">Common Name</p>
                <input type="text" placeholder="e.g. new-user_31" className="bg-[#111] p-2 rounded-[10px] border min-w-[400px] mb-[20px]"/>
            </div>
        </>
    );
}

const CertificateCard = () => {

    const [cardContext, setCardContext] = useContext(CardContext1)
    return (
        <>
            <div onClick={() => setCardContext("Certificate")}
            className={`rounded-[10px] hover:cursor-pointer mt-[50px] px-auto border inline-block min-w-[300px] ml-[20px] p-10 ` + (cardContext === "Certificate" ? "border-mainPink text-mainPink" : null) }>Certificate</div>
        </>
    );
}

const MyLocalEnvironmentCard = () => {

    const [cardContext, setCardContext] = useContext(CardContext2)
    return (
        <>
            <div onClick={() => setCardContext("My Local Environment")}
            className={`rounded-[10px] hover:cursor-pointer mt-[50px] px-auto border inline-block max-w-[400px] ml-[20px] p-10 ` + (cardContext === "My Local Environment" ? "border-mainPink text-mainPink" : null) }>My Local Environment
            <p className="text-[0.8rem] opacity-80 text-white">Use this to add network IP addresses to the IP Access List. This can be modified at any time.</p>
            </div>
        </>
    );
}

const MyLocalEnvironmentContent = () => {
    const [cardContext] = useContext(CardContext2)
    return (
        <>
        <div className={(cardContext === "My Local Environment" ? "" : "hidden") }>
            <p className="mt-[50px] mx-[20px]">Add entries to your IP Access List</p>
            <div className="block text-white bg-[#222] p-10 mx-[20px] rounded-[10px] ">
                <p>Only an IP address you add to your Access List will be able to connect to your project's clusters. You can manage existing IP entries via the Network Access Page.</p>
                <div className="mt-[30px]">
                    <div className="inline-block text-white">
                        <p className="font-bold">IP Address</p>
                        <input type="text" placeholder="Enter IP Address" className="bg-[#111] p-2 rounded-[10px] border min-w-[300px] mb-[20px]" />
                    </div>
                    <div className="inline-block text-white ml-10">
                        <p className="font-bold">Description</p>
                        <input type="text" placeholder="Enter Description" className="bg-[#111] p-2 rounded-[10px] border min-w-[300px] mb-[20px]" />
                    </div>
                </div>
                <div>
                    <button className="bg-[#111] p-2 rounded-[10px] border ">Add Entry</button>
                </div>
            </div>
        </div>
        </>
    );
}

const CloudEnvironmentCard = () => {

    const [cardContext, setCardContext] = useContext(CardContext2)
    return (
        <>
            <div onClick={() => setCardContext("Cloud Environment")}
            className={`rounded-[10px] hover:cursor-pointer mt-[50px] px-auto border inline-block max-w-[400px] ml-[20px] p-10 ` + (cardContext === "Cloud Environment" ? "border-mainPink text-mainPink" : null) }>Cloud Environment
            <p className="text-[0.8rem] opacity-80 text-white">Use this to configure network access between Loco and your cloud or on-premise environment. Specifically, set up IP Access Lists, Network Peering, and Private Endpoints.</p>
            </div>
        </>
    );
}

const CloudEnvironmentContent = () => {

    const [cardContext] = useContext(CardContext2)
    return (
        <>
            <div className={"" + (cardContext === "Cloud Environment" ? null : "hidden") }>
            <p className="mt-[50px] mx-[20px]">Set your network security with any of the following options</p>
            <div className="block text-white bg-[#222] p-10 mx-[20px] rounded-[10px] ">
                <p>Only an IP address you add to your Access List will be able to connect to your project's clusters. You can manage existing IP entries via the Network Access Page.</p>
                <div className="mt-[30px]">
                    <div className="inline-block text-white">
                        <p className="font-bold">IP Address</p>
                        <input type="text" placeholder="Enter IP Address" className="bg-[#111] p-2 rounded-[10px] border min-w-[300px] mb-[20px]" />
                    </div>
                    <div className="inline-block text-white ml-10">
                        <p className="font-bold">Description</p>
                        <input type="text" placeholder="Enter Description" className="bg-[#111] p-2 rounded-[10px] border min-w-[300px] mb-[20px]" />
                    </div>
                </div>
                <div>
                    <button className="bg-[#111] p-2 rounded-[10px] border ">Add Entry</button>
                </div>
            </div>
            <div className="mx-[20px] flex justify-start mt-[50px]">
                <div className="inline-block p-10 bg-[#222] max-w-[300px] rounded-[10px] mr-[20px]">
                    <p className="opacity-60">VC Peering</p>
                    <p className="max-w-[250px] text-[0.9rem]">Peer your VPC with your Loco cluster's VPC to ensure that traffic does not traverse the public internet. Requires an M10 cluster or higher.</p>
                    <button className="inline-block1 hover:cursor-[not-allowed]">Configure</button>
                </div>
                <div className="inline-block p-10 bg-[#222] max-w-[300px] rounded-[10px] mr-[20px]">
                    <p className="opacity-60">Private Endpoint</p>
                    <p className="max-w-[250px] text-[0.9rem]">Use your Private Endpoint to create a one-way connection from your VPC to your CDB Loco VPC, ensuring Loco cannot initiate connections back to your network. Requires an M10 cluster or higher.</p>
                    <button className="inline-block1 hover:cursor-[not-allowed]">Configure</button>
                </div>
            </div>
            </div>
        </>
    );
}