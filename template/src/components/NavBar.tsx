import Link from "next/link"
import Image from "next/image"

export default function page() {
    return <nav className="w-[100vw] bg-gradient-to-b from-main to-lighterMain from-80% flex py-2 justify-evenly text-text1 flex-nowrap fixed top-0">
            <div className="pl-3 flex w-[50vw]">
                <Image src="/file.svg" alt="Placeholder" width={100} height={100} className="h-12 w-12 rounded-xl border-2 border-white"/>
                <div className="relative -bottom-4 text-2xl pl-2">Business Name</div>
            </div>
            
            <div className="w-[50vw] pl-[10vw] pt-3 flex justify-evenly">
                <Link href="/">Home</Link>
                <Link href="/redirect">About</Link>
                <Link href="/redirect">Services</Link>
                <Link href="/redirect">Contact</Link>
            </div>
    </nav>
}