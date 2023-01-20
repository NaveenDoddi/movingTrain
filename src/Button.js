import { useState } from "react"

function Toggle(){
    const [color, setColor] = useState("green")

    return (
        <>
        <h2>select your color "{ color }"</h2>
        <button onClick={()=> setColor("blue")}>
            blue
        </button>
        <button onClick={()=> setColor("red")}>
            Red
        </button>
        <button onClick={()=> setColor("voilet")}>
            voilet
            {/* thankyougod */}
        </button>
        </>
    )
}

export default Toggle