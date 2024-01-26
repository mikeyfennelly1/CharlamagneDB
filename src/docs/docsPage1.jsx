import { createContext, useState, useContext } from "react";
import CreateAnAccount from "./documents/CreateAnAccount/CreateAnAccount";
import ConnectToTheCluster from "./documents/ConnectToTheCluster/ConnectToTheCluster";
import DeployAFreeCluster from "./documents/DeployAFreeCluster/DeployAFreeCluster";
import InsertAndViewADocument from "./documents/InsertAndViewADocument/InsertAndViewADocument";
import ManageTheIPAccessList from "./documents/ManageTheIPAccessList/ManageTheIPAccessList";

const docs = [
    { title: 'Create account', body: <CreateAnAccount/>, id: 1 },
    { title: 'Deploy a free cluster', body: <DeployAFreeCluster/>, id: 2 },
    { title: 'Manage the IP access List', body: <ManageTheIPAccessList/>, id: 3 },
    { title: 'Connect to the cluster', body: <ConnectToTheCluster/>, id: 5 },
    { title: 'Insert and view a document', body: <InsertAndViewADocument/>, id: 6 },
];

const ActivityContext = createContext(null)

const DocsPage1 = () => {
    return (
        <>
            <div className="min-h-screen flex flex-cols-2">
                <ActivityContext.Provider value={useState(1)}> 
                    <DocsSidebar docs={docs} />
                    <DocsContent docs={docs} />
                </ActivityContext.Provider>
            </div>
        </>
    );
}
 
export default DocsPage1;

const sidebarActiveClasses = "text-mainPink"
const sidebarInactiveClasses = "text-white opacity-80"

const DocsSidebar = (props) => {
    const [activityContext, setActivityContext] = useContext(ActivityContext)
    const docs = props.docs;
    return (
        <>
            <section className="grid grid-cols-2 text-white font-[TT-Autonomous-Mono-Reg]">
                <div className="text-white  min-h-screen min-w-[500px] font-[TT-Autonomous-Mono-Reg] mt-[100px] bg-[#121212] pl-[50px] pt-[50px]">
                    <div>
                        <h2 className="font-[TT-Travels-Next-Med] text-mainPink text-lg">CharlemagneDB Documentation</h2>
                        <h2 className="text-white mb-[50px] text-lg mt-[20px]  font-semibold">CharlemagneDB Loco</h2>
                    </div>
                    <div>
                        <h2 className="text-white mb-[10px] text-lg mt-[20px] font-semibold">Get Started with Loco</h2>
                        {docs.map((doc) => (
                            <div className={(doc.id === activityContext ? sidebarActiveClasses : sidebarInactiveClasses)} key={ doc.id } >
                                <button
                                onClick={() => setActivityContext(doc.id)}>
                                    { doc.title }
                                </button>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
}

const bodyActiveClasses = "visible"
const bodyInactiveClasses = "hidden"

const DocsContent = (props) => {
    const docs = props.docs;
    const [activityContext] = useContext(ActivityContext)

    return (
        <>
                <div className="px-[150px] my-[200px] max-w-[1400px]">
                    {docs.map((doc) => (
                        <div className={(doc.id === activityContext ? bodyActiveClasses : bodyInactiveClasses)} key={ doc.id }>
                            <h1 className="mb-[50px] font-[TT-Travels-Next-Med] text-mainPink text-2xl">{ doc.title }</h1>
                            <div className="font-[TT-Autonomous-Mono-Reg] text-white text-xl">{ doc.body }</div>
                        </div>
                    ))}
                </div>
        </>
    );
}