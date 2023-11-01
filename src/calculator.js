import React from "react";
import { Addition } from "./arthmeticOperations";
import { Subtration, Multiplication, Division, Persantile } from "./arthmeticOperations";
import { useState } from "react";
import Toggle from './Button.js'

function Cal(){
    var [operation , setOperation] = useState("")

    function calculate(){
        if(operation == "sub"){
            console.log("sub")
        }
    }
    
    function sum(){
        var input = document.getElementById("input").innerText

        document.getElementById("input").innerText = input + "+"
    }
    function write(click){
       
        var number = click.target.innerText
        var input = document.getElementById("input").innerText
        input = input + number
        
        document.getElementById("input").innerText = input

        document.getElementById("output").innerText = eval(input)
        
        // calculate(input)
    }
    return(
        <>

            <div id="maindiv">
            
                <p id="input">  </p>
                <p id="output">  </p>

                <table>

                    <tr>
                        <td><button onclick="ac()">AC</button></td>
                        <td><button onclick="per()">per%</button></td>
                        <td><button onclick="div()">div</button></td>
                    </tr>

                    <tr>
                        <td onClick={write}>7</td>
                        <td onClick={write}>8</td>
                        <td onClick={write}>9</td>
                        <td><button onClick={Multiplication(23,3)}>mul*</button></td>
                    </tr>
                    <tr>
                        <td onClick={write}>4</td>
                        <td onClick={write}>5</td>
                        <td onClick={write}>6</td>
                        <td><button id="sub" onClick={operation = "sub"}>sub-</button></td>
                    </tr>
                    <tr>
                        <td onClick={write}>1</td>
                        <td onClick={write}>2</td>
                        <td onClick={write}>3</td>
                        <td><button id="sum" onClick={sum}>sum+</button></td>
                    </tr>
                    <tr>
                        <td onClick={write}>.</td>
                        <td onClick={write}>0</td>
                        <td onClick={write}>00</td>
                        <td><button onclick="ans()">=</button></td>   
                    </tr>
                </table>
            </div>

        </>
    )
}

export default Cal