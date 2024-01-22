import { useState } from "react";

const DocsContent = (props) => {
    const docs = props.docs;
    const activeDocID = props.activeDocID;

    const [activeClasses, inactiveClasses] = useState()

    console.log(docs)
    return (
        <>
                <div className="px-[150px] my-[200px]">
                    {docs.map((doc) => (
                        <div key={ doc.id }>
                            <h1 className="mb-[50px] font-[TT-Travels-Next-Med] text-mainPink text-2xl">{ doc.id===activeDocID && doc.title }</h1>
                            <p className="font-[TT-Autonomous-Mono-Reg] text-white text-xl">{ doc.id===activeDocID && doc.body }</p>
                        </div>
                    ))}
                </div>
        </>
    );
}
 
export default DocsContent;