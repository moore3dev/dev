"use client"

import { useState , useEffect } from "react"
import Image from "next/image"

export default function Search() {
    const [ isOpen, setIsOpen ] = useState(false)

    const runSearch = (params) => {
        return (
            setIsOpen(!isOpen)
        )
    }


     
    return <div className={`flex fixed z-50 top-0 w-screen overflow-x-hidden bg-stone-950 h-24 border-b-2 border-red-700 flex-nowrap justify-between ${isOpen ? "w-[101vw]" : "left-0"}`}>
                <div className={`relative my-auto ${isOpen ? "left-2 text-xl font-normal" : "left-4 text-3xl font-bold"}`}>
                    <h1>SoundStream</h1>
                </div>
                <div>
                    <button className="w-12 h-12 fixed my-auto right-3 border-2 border-white bg-stone-700 rounded-[6rem] top-6" onClick={() => {
                        setIsOpen(!isOpen);
                        if (isOpen)
                            runSearch()
                    }}>
                        <Image width={100} height={100} src="/images/search.svg" alt="search-button" className="w-12 my-autorounded-[6rem] h-12 object-cover relative my-auto right-3"/>
                    </button>
                    <input className={`relative bg-stone-700 h-12 my-auto top-6 -z-10 rounded-[6rem] right-3 ${isOpen ? "animate-search-translate animate-search-width " : "w-12"}`}/>
                </div>
        </div>
}