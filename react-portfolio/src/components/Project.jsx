import Lang from "./Lang";

export default function Project({title, description, languages, link}){
    return(
        <a href={link} target="_blank" style={{height:"100%"}}>        <div className ="projects"style={{
            color:"black",
            backgroundColor:"lightgrey",
            fontFamily:"Windows95Font",
            paddingTop:"5px",
            borderWidth: "2px",
            borderStyle: "outset",
            borderColor: "buttonborder",
            height:"90%",
            width:"100%"
            
            
        }}>
            <p style={{
                fontSize:"130%",
                marginTop:"0",
                marginBottom:"5px",
                marginLeft:"10px"
            }}>{title}</p>
            <p  style={{
                marginBottom:2,
                marginTop:"0px",
                fontSize:"90%",
                marginLeft:"8px"
            }}>{description}</p>
            <div
            style={{
                display:"flex",
                height:"auto",
                bottom:0,
                justifyContent:"space-evenly"
            }}>
            {languages.map((language, index) => (
                <Lang key={index} Language={language} />
            ))}
            </div>

        </div></a>


    )
}