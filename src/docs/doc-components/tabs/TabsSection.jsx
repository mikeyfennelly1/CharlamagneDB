import { TitlesContext } from "./titlesContext.jsx";
import TitlesBar from "./TitlesBar.jsx";
import { useState } from "react";
import TabsContentSection from "./TabsContentSection.jsx";

const TabsSection = (props) => {
    const Data = props.data
    const ListOfTitlesAndKeys = Data.map(({ title, key }) => ({ title, key }));
    const ListOfContentsAndKeys = Data.map(({ content, key }) => ({ content, key }));

    return (
        <>
        <TitlesContext.Provider value={useState(1)}>
            <TitlesBar ListOfTitlesAndKeys={ListOfTitlesAndKeys}/>
            <TabsContentSection ListOfContentsAndKeys={ListOfContentsAndKeys}/>
        </TitlesContext.Provider>
        </>
    );
}
 
export default TabsSection;