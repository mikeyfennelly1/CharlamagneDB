import { useState } from "react";

const DocsSidebar = (props) => {

    const docs = props.docs;
    // Information for the docs

    // some way to construct the sidebar button for each doc

    // some way to construct the actual document

    // All while linking them together
    const [state, setState] = useState();

    const clickTitle = () => {
        setState()
    }


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
                            <div className="pr-auto" key={ doc.id }>
                                <button className="min-h-[50px]"> { doc.title }</button>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
}
 
export default DocsSidebar;