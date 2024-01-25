import { TitlesContext } from "./titlesContext.jsx";
import TitlesBar from "./TitlesBar.jsx";
import { useState } from "react";

const TabsSection = (props) => {
    const Data = props.data
    const ListOfTitlesAndKeys = Data.map(({ title, key }) => ({ title, key }));

    return (
        <>
        <TitlesContext.Provider value={useState(1)}>
            <TitlesBar ListOfTitlesAndKeys={ListOfTitlesAndKeys}/>
        </TitlesContext.Provider>
        </>
    );
}
 
export default TabsSection;

// const TitlesBar = (props) => {
//     const ListOfTitlesAndKeys = props.ListOfTitlesAndKeys
//     const [activityContext, setActivityContext] = useContext(ActivityContextTabs)
    
//     console.log(activityContext)
//     console.log(ListOfTitlesAndKeys)


//     return (
//         <>
//             <div>
//                 {ListOfTitlesAndKeys.map((TitleAndKey) => (
//                     <div className={ ActiveTitleClasses } 
//                     key={TitleAndKey.key} >
//                         {TitleAndKey.title}
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// }