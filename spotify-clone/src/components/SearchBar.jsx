"use client"

import { useState , useEffect } from "react"
import Image from "next/image"

export default function Search() {
    const [ isOpen, setIsOpen ] = useState(true)

    const runSearch = (params) => {
        
    }

    return <div>
        <div className={`fixed top-8 bg-zinc-500 h-12 rounded-[2rem] ${isOpen === true ? "w-64 right-24" : "w-12 right-8"}`}>
            <button onClick={() => {setIsOpen(!isOpen)}}>
                <Image src="/search-icon" height={100} width={100} alt="search-icon" className={`m-auto w-8 h-8 ${isOpen === true ? "hidden" : "block"}`}/>
            </button>
            <div className={`${isOpen === true ? "block" : "hidden"} flex flex-nowrap justify-evenly my-auto w-60 h-12`}>
                <input type="text" placeholder="search" className="m-auto bg-transparent w-40 h-12 rounded-[2rem]" />
                
            </div>
        </div>
        <button onClick={runSearch}>
            <Image src="/search-icon" height={100} width={100} alt="search-icon" className={`w-12 h-12 m-8 m-auto fixed top-0 right-0 border-2 rounded-full ${isOpen === true ? "block" : "hidden"}`}/>
        </button>
    </div>
}