import Eight from "./8";
import Navbar from "./Navbar";
import DocsPage1 from "./docsPage1";
import ActiveIDContext from "./ActiveIDContext";
import { useState } from "react";

const Docs = () => {

    const [activeID, setActiveID] = useState(1)

    return (
        <>
            <Navbar/>
            <ActiveIDContext.Provider value={activeID}>
                <DocsPage1/>
            </ActiveIDContext.Provider>
            <Eight/>
        </>
    );
}
 
export default Docs;