import { useState } from "react";

const DocsSidebar = () => {
    const [docs, setDocs] = useState([
        { title: 'Create an account', body: 'lorem ipsum...', id: 1 },
        { title: 'Deploy a free cluster', body: 'lorem ipsum...', id: 2 },
        { title: 'Manage the IP access List', body: 'lorem ipsum...', id: 3 },
        { title: 'Create a Database User', body: 'lorem ipsum...', id: 4 },
        { title: 'Connect to the cluster', body: 'lorem ipsum...', id: 5 },
        { title: 'Insert and view a document', body: 'lorem ipsum...', id: 6 },
    ])

    return (
        <>
            <div className="text-white font-[TT-Travels-Next-Med] min-h-screen max-w-[500px] mt-[100px] bg-[#121212] pl-[50px] pt-[50px]">
                <h2 className="text-mainPink text-lg">CharlemagneDB Documentation</h2>
                <h2 className="text-white font-[TT-Autonomous-Mono-Reg] text-lg mt-[20px]">CharlemagneDB Loco</h2>
            </div>
        </>
    );
}
 
export default DocsSidebar;