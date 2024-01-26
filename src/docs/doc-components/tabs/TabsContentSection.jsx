import { TitlesContext } from "./titlesContext";
import { useContext } from "react";

const ActiveContentClasses = "visible text-white"
const InActiveContentClasses = "hidden text-white"

const TabsContentSection = (props) => {
    const ListOfContentsAndKeys = props.ListOfContentsAndKeys
    const [activityContextTabs, setActivityContextTabs] = useContext(TitlesContext)

    console.log(ListOfContentsAndKeys)
    return (
        <>
            <div>
                {ListOfContentsAndKeys.map((ContentAndKey) => (
                    <div onClick={() => setActivityContextTabs(ContentAndKey.key)} 
                    className={( ContentAndKey.key === activityContextTabs ? ActiveContentClasses : InActiveContentClasses) } 
                    key={ContentAndKey.key} >
                        {ContentAndKey.content}
                    </div>
                ))}
            </div>
        </>
    );
}
 
export default TabsContentSection;