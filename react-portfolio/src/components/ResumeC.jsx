
import paper from '../assets/paper.png';
const iconMap={
    "my resume":paper
}
export default function ResumeC({alt,title, onClick}){
    return(
    <div onClick = {onClick} className = "iconBox">
    <img style= {{}}src={iconMap[title.toLowerCase()]} alt={alt} />
    <p style={{
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", 
    fontSize: '11px',  

    color: '#fff',  
    textShadow: '0 0 2px rgba(0, 0, 0, 0.5)',  
    marginTop:"4px",
    fontWeight:"300",
    textShadow: '0.9px 0.9px 0px black, -0.9px -0.9px 0px black, 0.9px -0.9px 0px black, -0.9px 0.9px 0px black',
    }}
    >{title}</p>
    </div>
);
}