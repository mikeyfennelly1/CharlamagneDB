import React from 'react'
import { createContext, useState, useContext } from "react";
// import TitlesBar from "./tabs/TitlesBar";

export const ActivityContextTabs = React.createContext(null)

const TabsSection = (props) => {
    const Data = props.data
    const ListOfTitlesAndKeys = Data.map(({ title, key }) => ({ title, key }));

    return (
        <>
        <ActivityContextTabs.Provider value={ActivityContextTabs}>        
            <TitlesBar ListOfTitlesAndKeys={ListOfTitlesAndKeys}/>
        </ActivityContextTabs.Provider>
        </>
    );
}
 
export default TabsSection;

const TitlesBar = (props) => {
    const ListOfTitlesAndKeys = props.ListOfTitlesAndKeys
    const [activityContext, setActivityContext] = useContext(ActivityContextTabs)
    
    console.log(activityContext)
    console.log(ListOfTitlesAndKeys)


    return (
        <>
            <div>
                {ListOfTitlesAndKeys.map((TitleAndKey) => (
                    <div className={ ActiveTitleClasses } 
                    key={TitleAndKey.key} >
                        {TitleAndKey.title}
                    </div>
                ))}
            </div>
        </>
    );
}