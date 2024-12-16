"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function page() {

    const [menuOpen, setMenuOpen] = useState(false)
    const [serviceMenuOpen, setServiceMenuOpen] = useState(false)

    return <nav className="w-[100vw] overflow-x-hidden bg-gradient-to-b opacity-100 from-greenGrey z-50 to-black from-85% flex py-2 sm:justify-evenly text-text1 flex-nowrap fixed top-0">
            <div className="pl-3 flex w-[70vw] lg:w-[50vw]">
                <Image src="/file.svg" alt="Placeholder" width={100} height={100} className="h-12 w-12 rounded-xl border-2 border-white"/>
                <div className="relative -bottom-4 text-xl pl-2">Business Name</div>
            </div>
            
            <button className="absolute top-6 right-[5vw]" onClick={() => {setMenuOpen(!menuOpen)}}>
                <div className={`w-6 h-1 bg-white opacity-90 rounded-xl my-1 transition-transform duration-300 ${menuOpen ? "rotate-90 translate-y-2 -translate-x-2" : "rotate-0"}`}></div>
                <div className={`w-6 h-1 bg-green-300 opacity-90 rounded-xl my-1 transition-transform duration-300 ${menuOpen ? "rotate-90" : "rotate-0"}`}></div>
                <div className={`w-6 h-1 bg-white opacity-90 rounded-xl my-1 transition-transform duration-300 ${menuOpen ? "rotate-90 -translate-y-2 translate-x-2" : "rotate-0"}`}></div>
            </button>

            <div className={`w-[100vw] h-[90vh] top-[-90vh] fixed bg-black transform-transition ${menuOpen ? "translateY-[90vh] z-40 animate-comeDown" : "translate-y-0 -z-10"}`}>
                <div></div>
            </div>

            <div className="w-[50vw] hidden sm:flex pl-[10vw] pt-3 justify-evenly">
                <Link href="/">Home</Link>
                <Link href="/redirect">About</Link>
                <Link href="/redirect">
                    <p className="">Services</p><p>{'>'}</p>
                </Link>
                <Link className="-ml-2" href="/redirect">Contact</Link>
            </div>
    </nav>
}