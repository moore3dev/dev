import Link from "next/link"
import Image from "next/image"

export default function page() {
    return <nav className="w-[100vw] bg-main flex py-2 pb-6 justify-evenly text-text1 flex-nowrap fixed top-0">
            <div className="pl-3 pt-2 w-[50vw]">
                <Image src="/file.svg" alt="Placeholder" width={100} height={100} className="h-12 w-12 border-2 border-white"/>
            </div>
            
            <div className="w-[50vw] flex justify-evenly">
                <Link href="/redirect">Home</Link>
                <Link href="/redirect">About</Link>
                <Link href="/redirect">Contact</Link>
            </div>
    </nav>
}