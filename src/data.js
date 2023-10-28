import React from "react";
import { useState } from "react";
import data from"./batabase.json";
const list = data

list.name="naveen"
// var list1 = new Map(list)
// console.log(list1)
const list1 = [1,2,3,4,"john","john"]
const name = Object.values(list).filter((i)=> i=="naveen")
// console.log(Object.values(list).find((i)=>i=="naveen"))
// console.log(name)
// Object.values(list).map((i)=>console.log(i))
// console.log(Object.keys(list).length)
// for(let i of Map(list.keys())){
//     console.log(i)
// }

var count = 0

function Run1(){
    // const [data, setdata] = useState("write in the input")
    
    function Run31(){ // this is for updating the input
        var input = document.getElementById("input").value
        document.getElementById("para").innerText = input
        // setdata(input)
        
    }
    // const [count, setcounter] = useState(0)

    function Run41(){ // this is for increasing the count
        count = count + 1
        document.getElementById("countpara").innerText = count
        
        // setcounter((count)=>count+1)
    }

    function Run51(){ // this is for reseting the count
        count = 0
        document.getElementById("countpara").innerText = count

        // setcounter((count)=>count = 0)
        
    }
    return(
        <>
            <input id="input" onChange={Run31}></input>
            <p id="para">write something in input</p>
            {/* <p>{Object.values(list).map((i)=>i)}</p> */}
            <button onClick={Run41}>count++</button>
            <button onClick={Run51}>reset</button>
            <p id="countpara">press count++ to increase counter = 0</p>
            
        </>
        
    )
}
export default Run1