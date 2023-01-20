import React from "react";
import { useEffect, useState } from "react";
import "./Div.css"

function Sjunction(){
    const [station, setStation] = useState("Mumbai")
    const[statio, setCounter] = useState(1)
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
            setCounter((statio) => statio=statio+1)
            setStation((station) =>station= document.getElementById("div"+statio).innerText)
            document.getElementById("div"+1).style.backgroundColor = "white"
            document.getElementById("div"+2).style.backgroundColor = "white"
            document.getElementById("div"+3).style.backgroundColor = "white"
            document.getElementById("div"+4).style.backgroundColor = "white"
            document.getElementById("div"+5).style.backgroundColor = "white"
            document.getElementById("div"+6).style.backgroundColor = "white"
            document.getElementById("div"+7).style.backgroundColor = "white"
            document.getElementById("div"+statio).style.backgroundColor = "lightblue"
        },1000) 
    })
    
    if(statio==8){setCounter(1)}
    return(<>
        <h1>INDIA</h1>
        <div id="div0">
            <div id="div1" style={div}>Mumbai</div>
            <div id="div2" style={div}>Goa</div>
            <div id="div3" style={div}>Kochi</div>
            <div id="div4" style={div}>Kanaya Kumari</div>
            <div id="div5" style={div}>Chennai</div>
            <div id="div6" style={div}>Vizag</div>
            <div id="div7" style={div}>Kolkata</div>
        </div>
        <div id="res1">{station}</div>
        <div id="div0"></div>
    </>)
    
}

export default Sjunction