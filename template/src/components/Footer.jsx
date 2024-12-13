import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return <div className="w-[100vw] bg-gradient-to-t h-[10vh] opacity-100 from-main z-50 to-lighterMain from-70% flex py-2 justify-evenly text-text1 flex-nowrap relative top-[5vh]">
        <div className="flex w-[60vw] pl-[4vw]">
            <Image src="/file.svg" width={100} height={100} alt="Logo" className="rounded-xl border-2 border-white w-[7.5vh] h-[7.5vh] object-cover"/>
            <p className="pl-[1vw] relative top-[4vh] text-left h-[2vh] font-bold text-xl" >Business Name</p>
        </div>  
        <div className="w-[40vw] flex flex-col justify-between pl-[5vw]">
            <Link href="/redirect" className="w-[10vw] hover:underline transition-opacity duration-300 hover:opacity-80">Terms of Service</Link>
            <p className="relative text-left h-[2vh] font-light text-sm" >By Finley Moore</p>
        </div>
    </div>
}