import LeftPart from "../components/leftpart";
import Menu from "../components/mobile/menu";
import Preloader from "../components/preloader";
import RightPart from "../components/rightpart";

const Portfolio=()=>{
    return (
    <div className="arlo_tm_wrapper_all">

    <div id="arlo_tm_popup_blog">
        <div className="container">
            <div className="inner_popup scrollable"></div>
        </div>
        <span className="close"><a href="#"></a></span>
    </div>

    {/* <-- PRELOADER --> */}
   {/* <Preloader></Preloader> */}
    {/* <-- /PRELOADER --> */}

    {/* <-- MOBILE MENU --> */}
   <Menu></Menu>
    {/* <-- /MOBILE MENU --> */}

    {/* <-- CONTENT --> */}
    <div className="arlo_tm_content">
        
        {/* <-- LEFTPART --> */}
       <LeftPart></LeftPart>
        {/* <-- /LEFTPART --> */}
        
        {/* <-- RIGHTPART --> */}
        <RightPart></RightPart>
        {/* <-- /RIGHTPART --> */}
        
        <a className="arlo_tm_totop" href="#"></a> 
        
    </div>
    </div>
    )
}
export default Portfolio;