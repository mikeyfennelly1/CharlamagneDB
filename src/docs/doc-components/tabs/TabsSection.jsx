import { TitlesContext } from "./titlesContext.jsx";
import TitlesBar from "./TitlesBar.jsx";
import { useState } from "react";
import TabsContentSection from "./TabsContentSection.jsx";

const TabsSection = (props) => {
    const Data = props.data
    
    
    const TabsDataWithKey = Data.map((tab, index) => ({
        ...tab,
        key: index + 1
    }));
    
    const ListOfTitlesAndKeys = TabsDataWithKey.map(({ title, key }) => ({ title, key }));
    const ListOfContentsAndKeys = TabsDataWithKey.map(({ content, key }) => ({ content, key }));
    
    return (
        <>
        <TitlesContext.Provider value={useState(1)}>
            <div className="mt-[50px]">
                <TitlesBar ListOfTitlesAndKeys={ListOfTitlesAndKeys}/>
                <TabsContentSection ListOfContentsAndKeys={ListOfContentsAndKeys}/>
            </div>
        </TitlesContext.Provider>
        </>
    );
}
 
export default TabsSection;