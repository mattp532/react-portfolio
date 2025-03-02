import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import goodreads from '../assets/goodreads.png';
import folder from '../assets/folder.png';
import Draggable from 'react-draggable';
import paper from '../assets/paper.png';
const iconMap={linkedin:linkedin,
    github: github,
    goodreads: goodreads,
    "my projects": folder,
    "my resume":paper
}
export default function Icon({alt,title,link, onClick}){
    return(
    <a href={link} target="_blank">
            <div className = "iconBox">
    <img style= {{}}src={iconMap[title.toLowerCase()]} alt={alt} />
    <p style={{
    display: "flex",
    justifyContent: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", 
    fontSize: '11px',  

    color: '#fff',  
    letterSpacing: '0.5px', 
    textShadow: '0 0 2px rgba(0, 0, 0, 0.5)',  
    marginTop:"4px",
    fontWeight:"300",
    textShadow: '0.9px 0.9px 0px black, -0.9px -0.9px 0px black, 0.9px -0.9px 0px black, -0.9px 0.9px 0px black',
    }}
    >{title}</p>
    </div>
    </a>
);
}