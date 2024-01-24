import { useContext, useState } from "react"
import ActivityContextTabs from "../TabsSection"

const ActiveTitleClasses = "text-white inline-block bg-[#222] px-[20px] py-[10px]"
const InActiveTitleClasses = "text-white inline-block bg-[#222] px-[20px] py-[10px] opacity-80"

const TitlesBar = (props) => {
    console.log("ActivityContextTabs: " + ActivityContextTabs)
    const ListOfTitlesAndKeys = props.ListOfTitlesAndKeys
    const [activityContext, setActivityContext] = useContext(ActivityContextTabs)
    console.log("activityContext: " + activityContext)
    
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
 
export default TitlesBar;
