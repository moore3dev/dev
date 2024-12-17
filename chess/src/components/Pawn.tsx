"use client"

export default function Pawn({start}) {

    const split = start.split(" ")
    const col = split[0]
    const row = split[1]

    
    const leftPosition= 10
    if (row === "a") {
        var topPosition = 10
    } else if (row === "") 

    console.log(topPosition)

    return <div className="absolute z-20 text-pink-400" style={{left: `${leftPosition}vh`, top: `${topPosition}vh`}}>
        Pawn
    </div>
}