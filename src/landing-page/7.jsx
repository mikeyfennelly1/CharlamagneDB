import { constructUrl } from "../utils/urlutils";
import Slider from "react-slick";    
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Seven = () => {
    var settings = {
      dots: true,
      autoPlay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    
    return (
        <>
            <div className="max-w-screen">
                <div className="min-h-[200px]">
                    <div className="mb-[100px] mx-auto">
                        <Slider {...settings}>
                                <img src={constructUrl("../images/officePhoto.jpg")} alt="" className="mx-[10px] hover:cursor-grab max-h-[800px] mx-auto max-w-[80vw] rounded-[50px]"/>
                                <img src={constructUrl("../images/officePhoto.jpg")} alt="" className="mx-[10px] hover:cursor-grab max-h-[800px] mx-auto max-w-[80vw] rounded-[50px]"/>
                                <img src={constructUrl("../images/officePhoto.jpg")} alt="" className="mx-[10px] hover:cursor-grab max-h-[800px] mx-auto max-w-[80vw] rounded-[50px]"/>
                                <img src={constructUrl("../images/officePhoto.jpg")} alt="" className="mx-[10px] hover:cursor-grab max-h-[800px] mx-auto max-w-[80vw] rounded-[50px]"/>
                                <img src={constructUrl("../images/officePhoto.jpg")} alt="" className="mx-[10px] hover:cursor-grab max-h-[800px] mx-auto max-w-[80vw] rounded-[50px]"/>
                                <img src={constructUrl("../images/officePhoto.jpg")} alt="" className="mx-[10px] hover:cursor-grab max-h-[800px] mx-auto max-w-[80vw] rounded-[50px]"/>
                        </Slider>
                            <h1 className=" ml-[50px] text-[1.7rem] max-w-[80vw] xl:text-[3rem] mt-[75px] text-mainPink font-[TT-Travels-Next-Med]">Work at CharlemagneDB</h1>
                        <a href="https://linkedin.com">
                            <button className=" ml-[50px] text-[1.2rem] xl:text-[1.8rem] my-[30px] xl:my-[50px] text-white font-[TT-Autonomous-Mono-Reg] border-2 border-white max-w-fit px-[20px] rounded-full opacit hover:bg-mainPink hover:text-black hover:border-mainPink">View Job Openings</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Seven;