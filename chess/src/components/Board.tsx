"use client"

export default function Board() {
    const boardArr = []

    const sideLabel = (row) => {
        return <p key={row + "sideLabel"} className="w-[6vw] bg-white m-0 p-0 h-[6vw]">{row}</p>
    }

    const square = (colour,i) => {
        return  <div key={i} className="w-[6vw] m-0 p-0 h-[6vw]" style={{background: colour}}></div>
    }

    for (let i = 1 ; i < 65; i++) {

        const row = Math.ceil(i / 8)
        const rowEven = row % 2 === 0 ? true : false
        const col = i+8 - (row*8)
        const colEven = (i) % 2 === 0 ? true: false 

        const colour = rowEven ? colEven ? "black" : "gray-200" : colEven ? "gray-200" : "black"
        col === 1 ? boardArr.push(sideLabel(row)) : ""
        boardArr.push(square(colour,i))
    }

    return <>
        <div className="absolute grid border-2 border-black h-[55vw] grid-cols-9 top-[10vh] w-[54vw] left-[23vw]">
            <p className="h-[6vw] w-[6vw] bg-white"></p>
            <p className="h-[6vw] w-[6vw] bg-white">A</p>
            <p className="h-[6vw] w-[6vw] bg-white">B</p>
            <p className="h-[6vw] w-[6vw] bg-white">C</p>
            <p className="h-[6vw] w-[6vw] bg-white">D</p>
            <p className="h-[6vw] w-[6vw] bg-white">E</p>
            <p className="h-[6vw] w-[6vw] bg-white">F</p>
            <p className="h-[6vw] w-[6vw] bg-white">G</p>
            <p className="h-[6vw] w-[6vw] bg-white">H</p>
            {boardArr}
        </div>
    </>
}