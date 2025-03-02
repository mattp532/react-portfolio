import React, {useEffect, useState} from "react";

export default function Time(){
    const[time,setTime] = useState(new Date())

    const year = time.getFullYear(); 
    const month = time.getMonth() + 1; // getMonth() returns 0-11, so add 1
    const day = time.getDate();
    const formattedDate = `${month}/${day}/${year}`; // Example format: MM/DD/YYYY
    const formattedTime = time.toLocaleTimeString(); 
 
    useEffect(()=>{
        setInterval(()=>setTime(new Date()),1000)
    },[])
    return(
        <div style={{
            right:"20px",
            bottom:"50%",
            paddingRight:"10px"

        }}> 
                    <p style={{fontFamily: "Windows95Font",marginTop:0, color: 'black', marginBottom:0,fontSize:"0.9rem"}}>{time.toLocaleTimeString()}</p>

            <p style={{fontFamily: "Windows95Font",marginBottom:0, marginTop: 0,color: 'black',fontSize:"0.9rem"}}>{formattedDate}</p> 
            </div>

    )
}