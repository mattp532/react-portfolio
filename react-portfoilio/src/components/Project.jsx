import Lang from "./Lang";

export default function Project({title, description}){
    return(
        <a target = "_blank" href="https://github.com/mattp532/PokeStudy?tab=readme-ov-file"style={{ display: "block", textDecoration: "none", maxHeight:"50%"}}>
        <div className ="projects"style={{
            color:"black",
            backgroundColor:"lightgrey",
            width:"auto",
            fontFamily:"Windows95Font",
            height:"auto",
            paddingLeft:"20px",
            paddingRight:"20px",
            paddingTop:"5px",
            borderWidth: "2px",
            borderStyle: "outset",
            borderColor: "buttonborder",
            
            
        }}>
            <p style={{
                fontSize:"130%",
                marginTop:"0",
                marginBottom:"5px"
            }}>{title}</p>
            <p  style={{
                marginBottom:2,
                marginTop:"0px",
                fontSize:"90%"
            }}>{description}</p>
            <div
            style={{
                display:"flex",
                height:"auto",
                bottom:0,
                justifyContent:"space-evenly"
            }}>
            <Lang Language ="javascript"></Lang>
            <Lang Language="HTML/CSS"></Lang>
            </div>

        </div>
        </a>

    )
}