import desktopLogo from '@/assets/img/logo/desktop-logo.png';
import { useState } from 'react';
import { AiFillFacebook } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


interface IProps{
    hideLeftPart:boolean;
    setHideLeftPart:(value:boolean)=>void
}
const LeftPart=(props: IProps)=>{
    const [activeTab,setActiveTab]=useState<string>("home");
    const handleClickTab=(tab:string,event:React.MouseEvent<HTMLAnchorElement,MouseEvent>)=>{
        event.preventDefault();
        setActiveTab(tab);
        const section=document.querySelector(`#${tab}`);
        if(section){
            section.scrollIntoView({behavior:'smooth', block:'start'});
        }

    }
    return (
        <div className={props.hideLeftPart===true ? "arlo_tm_leftpart_wrap opened":"arlo_tm_leftpart_wrap"}>
            <div className="leftpart_inner">
                <div className="logo_wrap">
                    <a href="#"><img src={desktopLogo} alt="desktop-logo" /></a>
                </div>
                <div className="menu_list_wrap">
                    <ul className="anchor_nav">
                        <li><a href="#home" className={activeTab==='home'?"active":""} onClick={(event:React.MouseEvent<HTMLAnchorElement,MouseEvent>)=>handleClickTab('home',event)}>Home</a></li>
                        <li><a href="#about" className={activeTab==='about'?"active":""} onClick={(event:React.MouseEvent<HTMLAnchorElement,MouseEvent>)=>handleClickTab('about',event)}>About Me</a></li>
                        <li><a href="#skills" className={activeTab==='skills'?"active":""} onClick={(event:React.MouseEvent<HTMLAnchorElement,MouseEvent>)=>handleClickTab('skills',event)}>Skills</a></li>
                        <li><a href="#projects" className={activeTab==='projects'?"active":""} onClick={(event:React.MouseEvent<HTMLAnchorElement,MouseEvent>)=>handleClickTab('projects',event)}>Project</a></li>
                        <li><a href="#contact" className={activeTab==='contact'?"active":""} onClick={(event:React.MouseEvent<HTMLAnchorElement,MouseEvent>)=>handleClickTab('contact',event)}>Contact</a></li>
                    </ul>
                </div>
                <div className="leftpart_bottom">
                    <div className="social_wrap">
                        <ul>
                            <li><a href="#"><AiFillFacebook /></a></li>
                            <li><a href="#"><FaYoutube /></a></li>
                            <li><a href="#"><FaGithub /></a></li>
                            <li><a href="#"><FaInstagram /></a></li>
                        </ul>
                    </div>
                </div>
                <a className={props.hideLeftPart ? "arlo_tm_resize opened":"arlo_tm_resize"} href="#" onClick={()=>props.setHideLeftPart(!props.hideLeftPart)}><i className={props.hideLeftPart ?"xcon-angle-left opened":"xcon-angle-left"}></i></a>
               
            </div>
        </div>
    )
}
export default LeftPart;