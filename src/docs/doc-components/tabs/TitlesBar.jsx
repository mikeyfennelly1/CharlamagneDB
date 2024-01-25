import { useContext, useState } from "react"
import { TitlesContext } from "./titlesContext"

const ActiveTitleClasses = "text-white inline-block bg-[#222] px-[20px] py-[10px]"
const InActiveTitleClasses = "text-white inline-block bg-[#222] px-[20px] py-[10px] opacity-80"

const TitlesBar = (props) => {
    const ListOfTitlesAndKeys = props.ListOfTitlesAndKeys
    const [activityContextTabs, setActivityContextTabs] = useContext(TitlesContext)

    return (
        <>
            <div>
                {ListOfTitlesAndKeys.map((TitleAndKey) => (
                    <div className={( TitleAndKey.key === activityContextTabs ? ActiveTitleClasses : InActiveTitleClasses) } 
                    key={TitleAndKey.key} >
                        {TitleAndKey.title}
                    </div>
                ))}
            </div>
        </>
    );
}
 
export default TitlesBar;