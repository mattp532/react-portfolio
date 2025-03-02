import React, {useState} from 'react';
import folder from '../assets/folder.png';
import NewScreen from './NewScreen'
import Project from './Project';
const iconMap={
    "my projects": folder
}

export default function Icon({alt,title,link}){
    const [isBoxVisible,setIsBoxVisible] = useState(false);
    function handleClick(){
    setIsBoxVisible(!isBoxVisible);
    
}
    return(
    <>
    
    <div style={{width:"70%"}}className = "iconBox" onClick={handleClick}>
    <img src={iconMap[title.toLowerCase()]} alt={alt} />
    <p style={{
        width:"100%",
    display: "flex",
    justifyContent: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",  
    fontSize: '11px', 

    color: '#fff', 
    marginTop:"4px",
    fontWeight:"300",
    textShadow: '0.9px 0.9px 0px black, -0.9px -0.9px 0px black, 0.9px -0.9px 0px black, -0.9px 0.9px 0px black',
    }}
    >{title}</p>
    </div>
    {isBoxVisible &&(
        <NewScreen topBarText = "My Projects" exitClick={handleClick}>
            <div style={{
                    height:"68%",
                    display: "grid",
                    gridGap: "25px", /* Space between squares */
                    width:"89%"



            }}className = "ProjectGrid" >
                <Project link="https://github.com/mattp532/Lingify" title="Lingify" languages = {["React JS", "Tailwind CSS"]} description="An online quiz platform designed to help users practice a new language by providing common English phrases and their translations in your target language."/>
                <Project link = "https://github.com/mattp532/PokeStudy" title="PokeStudy" languages={["Javascript", "HTML/CSS"]} description ="A fun and interactive study timer that lets you collect and save pokemon based on complete study sessions"/>

            </div>
            
        </NewScreen> 
            

    )}

    </>

);
}