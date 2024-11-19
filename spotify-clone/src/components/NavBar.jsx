import Image from "next/image"

export default function NavBar() {
    return <div>
        <nav className="flex justify-evenly text-sm  flex-nowrap pt-4 bg-gradient-to-t from-zinc-800 from-80% to-stone-900 h-20 w-screen fixed bottom-0 opacity-60 ">
            <div className="my-auto">
                <Image alt="home-icon" src="/" width={100} height={100} className="border-2 border-white h-8 object-contain"/>
                <a href="/">Home</a>
            </div>
            <div className="my-auto">
                <Image alt="music-icon" src="/" width={100} height={100} className="border-2 border-white h-8 object-contain"/>
                <a href="/my-music/">My Music</a>
            </div>
            <div className="my-auto">
                <Image alt="shuffle-icon" src="/" width={100} height={100} className="border-2 border-white h-8 object-contain"/>
                <a href="/shuffle/">Shuffle</a>
            </div>
        </nav>
    </div>
}