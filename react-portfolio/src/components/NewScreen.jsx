import exitButton from '../assets/exitButton.png';
export default function NewScreen({exitClick, topBarText,children}){
    return(
                <div style={{
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        backgroundColor:"lightgrey",
                        flexDirection:"columns",
                        position:"fixed",
                        height:"75%",
                        width:"70%",
                        left:"15%",
                        top:"8%",
                        borderWidth: "2px",
                        borderStyle: "outset",
                        borderColor: "buttonborder",
                        zIndex:"10"
                        
        
                    }}>
                    <div
                    style={{
                        display: "flex",
                        alignItems:"center",
                        backgroundColor:"Darkblue",
                        position:"absolute",
                        top:"0",
                    
                        height:"12%",
                        width:"100%"
                    }}>
                        <p
                        style={{
                            fontSize:"1.5rem",
                            fontFamily: 'Windows95Font',
                            position:"absolute",
                            color:"white",
                            left:20
                        }}>{topBarText}</p>
                    <img onClick={exitClick}style={{
                        position:'absolute',
                        top:10,
                        right:10,
                        height:"2rem",
                        width:"2rem",
                        cursor:"pointer"
        
                    }}src={exitButton} alt="" />
                        </div>     

                    {children}
                    </div>
    )
}