"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function page() {

    const [menuOpen, setMenuOpen] = useState(false)

    return <nav className="w-[100vw] overflow-x-hidden bg-gradient-to-b opacity-100 from-greenGrey z-50 to-black from-85% flex py-2 sm:justify-evenly text-text1 flex-nowrap fixed top-0">
            <div className="pl-3 relative flex w-[70vw] opacity-100 sm:w-[40vw]">
                <Image src="/file.svg" alt="Placeholder" width={100} height={100} className="h-12 w-12 rounded-xl border-2 border-white"/>
                <div className="relative -bottom-4 text-xl pl-2">Business Name</div>
            </div>
            
            {
                /* 
                    ==      mobile
                */
            }

            <button className="absolute sm:hidden top-6 z-50 opacity-100 right-[5vw]" onClick={() => {setMenuOpen(!menuOpen)}}>
                <div className={`w-6 h-1 bg-white opacity-90 rounded-xl my-1 transition-transform duration-300 ${menuOpen ? "rotate-90 translate-y-2 -translate-x-2" : "rotate-0"}`}></div>
                <div className={`w-6 h-1 bg-white opacity-90 rounded-xl my-1 transition-transform duration-300 ${menuOpen ? "rotate-90" : "rotate-0"}`}></div>
                <div className={`w-6 h-1 bg-white opacity-90 rounded-xl my-1 transition-transform duration-300 ${menuOpen ? "rotate-90 -translate-y-2 translate-x-2" : "rotate-0"}`}></div>
            </button>

            <div className={`w-[100vw] flex flex-col justify-evenly text-center text-xl font-bold h-[90vh] top-[-80vh] fixed bg-greenGrey sm:hidden transform-all duration-300 ${menuOpen ? "translate-y-[88.2vh] animate-comeDown" : "translate-y-0 opacity-0 -z-10"}`}>
                <Link href="/"><button onClick={() => {setMenuOpen(!menuOpen)}}>Home</button></Link>
                <Link href="/redirect"><button onClick={() => {setMenuOpen(!menuOpen)}}>About</button>
                </Link>
                <Link href="/redirect"><button onClick={() => {setMenuOpen(!menuOpen)}}>Services</button></Link>
                <Link href="/redirect"><button onClick={() => {setMenuOpen(!menuOpen)}}>Contact</button></Link>
            </div>

            {
                /*
                    >>      Mobile
                */
            }

            <div className="w-[60vw] hidden sm:flex sm:pl-0 pl-[10vw] pt-3 justify-evenly">
                <Link href="/">Home</Link>
                <Link href="/redirect">About</Link>
                <Link href="/redirect">Services</Link>
                <Link className="-ml-2" href="/redirect">Contact</Link>
            </div>
    </nav>
}