import { useState, useEffect } from "react";
import React from "react";
import Toggle from "./Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Timer(){
    const[sec, setCounter] = useState(10)

    useEffect(()=>{
        setTimeout(()=>{
            setCounter((sec)=> sec=sec-1)
        },1000) 
    })
    if(sec===0){setCounter(10)} 
    return (
    <>
        <h2>seconds : { sec }</h2>
       <Route path="Toggle">fjdks</Route>
    
    </>
    )
    
}
export default Timer