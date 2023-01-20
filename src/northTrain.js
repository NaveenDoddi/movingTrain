import React from "react";
import { useEffect, useState } from "react";
import "./Div.css"

function Njuction(){
    const [Airport, setairponN] = useState("Mumbai")
    const[airpo, setCounterN] = useState(7)
    const div = {
        height: "50px",
        width: "60px",
        border: "1px solid",
        textAlign: "center",
        borderRadius: "15px",
        // marginTop:"50px",

    }
    useEffect(()=>{
        setTimeout(()=>{
            setCounterN((airpo) => airpo=airpo-1)
            setairponN((Airport) => Airport = document.getElementById("div0"+airpo).innerText)
            document.getElementById("div0"+1).style.backgroundColor = "white"
            document.getElementById("div0"+2).style.backgroundColor = "white"
            document.getElementById("div0"+3).style.backgroundColor = "white"
            document.getElementById("div0"+4).style.backgroundColor = "white"
            document.getElementById("div0"+5).style.backgroundColor = "white"
            document.getElementById("div0"+6).style.backgroundColor = "white"
            document.getElementById("div0"+7).style.backgroundColor = "white"
            document.getElementById("div0"+airpo).style.backgroundColor = "red"
        },1000) 
    })
    
    if(airpo===0){setCounterN(7)}

    return(<>
        
        <div id="div00">
            <div id="div01" style={div}>Gandhi</div>
            <div id="div02" style={div}>Punjab</div>
            <div id="div03" style={div}>Kashmir</div>
            <div id="div04" style={div}>Delhi</div>
            <div id="div05" style={div}>Sikkim</div>
            <div id="div06" style={div}>AP</div>
            <div id="div07" style={div}>Mizoram</div>
        </div>
        <div id="res2">{Airport}</div>
    
    </>)
}

export default Njuction