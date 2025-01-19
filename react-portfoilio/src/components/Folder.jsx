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
    <div className = "iconBox" onClick={handleClick}>
    <img src={iconMap[title.toLowerCase()]} alt={alt} />
    <p style={{
    display: "flex",
    justifyContent: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",  
    fontSize: '11px', 

    color: '#fff', 
    letterSpacing: '0.5px',  
    marginTop:"4px",
    fontWeight:"300",
    textShadow: '0.9px 0.9px 0px black, -0.9px -0.9px 0px black, 0.9px -0.9px 0px black, -0.9px 0.9px 0px black',
    }}
    >{title}</p>
    </div>
    {isBoxVisible &&(
        <NewScreen topBarText = "My Projects" exitClick={handleClick}>
            <div style={{
                    display:"flex",
                    flexWrap:"wrap",
                    position:"absolute",
                    width:"95%",
                    top:"15%",

            }}>

                <Project title="PokeStudy" description="A fun and interactive study timer that lets you collect and save pokemon based on complete study sessions"/>

            </div>
        </NewScreen> 
            

    )}

    </>

);
}