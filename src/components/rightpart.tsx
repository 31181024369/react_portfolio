import About from "./content/about";
import Contact from "./content/contact";
import HomeCV from "./content/homecv";
import Project from "./content/project";
import Skills from "./content/skill";

interface IProps{
    hideLeftPart:boolean;
    setHideLeftPart:(value:boolean)=>void
}
const RightPart=(props:IProps)=>{
    return (
        <div className={props.hideLeftPart ? "arlo_tm_rightpart opened":"arlo_tm_rightpart"}>
            <div className="rightpart_inner">
                <HomeCV></HomeCV>
                
                {/* <-- ABOUT --> */}
               <About></About>
                {/* <-- /ABOUT --> */}
                
                {/* <-- SKILLS --> */}
             <Skills></Skills>
                {/* <-- /SKILLS --> */}
                
                {/* <-- SERVICES --> */}
                
                {/* <-- /SERVICES --> */}
                <Project></Project>
              

                {/* <-- CONTACT & FOOTER --> */}
               <Contact></Contact>
                {/* <-- /CONTACT & FOOTER --> */}
                
            </div>
        </div>
    )
}
export default RightPart;