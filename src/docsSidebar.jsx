import { useState, memo } from "react";

const DocsSidebar = (props) => {

    const docs = props.docs;
    // Need to know which is active
    // We want the active doc title to have a pink background
    // Style it appropriately
    // const [activeDocID, setActiveDocID] = useState(1)
    // const [docClasses, setDocCLasses] = useState()
    const activeDocClasses = "pr-auto bg-mainPink bg-opacity-10"
    const inactiveDocClasses = "pr-auto"
    
    // console.log("child page rendered | activeDocID: " + activeDocID)

    return (
        <>
            <section className="grid grid-cols-2 text-white font-[TT-Autonomous-Mono-Reg]">
                <div className="text-white  min-h-screen min-w-[500px] font-[TT-Autonomous-Mono-Reg] mt-[100px] bg-[#121212] pl-[50px] pt-[50px]">
                    <div>
                        <h2 className="font-[TT-Travels-Next-Med] text-mainPink text-lg">CharlemagneDB Documentation</h2>
                        <h2 className="text-white mb-[50px] text-lg mt-[20px]">CharlemagneDB Loco</h2>
                    </div>
                    <div>
                        {docs.map((doc) => (
                            <div className={doc.id} key={ doc.id } >
                                <button className="min-h-[50px]" > { doc.title }</button>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
}
 
export default DocsSidebar;