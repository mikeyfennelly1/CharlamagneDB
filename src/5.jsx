import ServerSVG from './serverSVG.jsx'
import GraphSVG from './graphSVG.jsx';

const Five = () => {
    

    
    return (
        <>
            <div className="lg:mb-[200px] mt-[50px] xl:mt-[200px] max-w-screen overflow-x-hidden">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 max-h-[600px]">
                    <div className="min-h-[400px] lg:mx-auto mb-[100px] lg:mb-[100px] ml-[50px] border-mainPink max-w-fit">
                            <ServerSVG />
                    </div>
                    <div className="mx-auto lg:block">
                            <GraphSVG />
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Five;