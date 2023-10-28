import React from "react";



function Cal(){
    function calculate(){
        var input = document.getElementById("input").value
        console.log(input)
        
        document.getElementById("output").innerText = eval(input)
    }
    function write(click){
        // console.log(click.target.innerText)
        var number = click.target.innerText
        var input = document.getElementById("input").value
        input = input + number
        input = Number(input)
        document.getElementById("input").value = input
        calculate()
    }
    return(
        <>
            <p>the</p>
            <div id="maindiv">
                <input id="input" onChange={calculate}/>
                {/* <p id="input" ></p> */}
                <p id="output">=</p>

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
                        <td><button onclick="mul()">mul*</button></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td><button id="sub" onclick="sub()">sub-</button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td><button id="sum" onclick="sum()">sum+</button></td>
                    </tr>
                    <tr>
                        <td>.</td>
                        <td>0</td>
                        <td>00</td>
                        <td><button onclick="ans()">=</button></td>   
                    </tr>
                </table>
            </div>

        </>
    )
}

export default Cal