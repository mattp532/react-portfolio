export default function({Language}){
    return(
        <p className="lang"
        style={{
            bottom:"0",
            borderWidth: "2px",
            borderStyle: "outset",
            borderColor: "buttonborder",
            backgroundColor:"rgb(155 155 155)",
            paddingLeft:"5px",
            paddingRight:"5px"
        }}>{Language}</p>
    )
}