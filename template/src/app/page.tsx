import Image from "next/image"
import Footer from "../components/Footer"

export default function page() {
  return <>
    <Image src="file.svg" alt="Image1" width={100} height={100} className="bg-white opacity-70 border-2 border-black w-[99vw] h-[90vh] relative top-16"/>
    <h1 className="relative bottom-[30vh] left-0 text-center font-bold">Title Text</h1>
    <div className="w-[98vw] grid grid-cols-2 rounded-xl bg-gradient-to-r from-alternate to-alternateDark from-40% border-[3px] border-alternateDarker my-5 relative left-[0.5vw] top-[5vh] h-[50vh]">
      <Image src="file.svg" width={100} height={100} className="rounded-l-xl bg-blue-950 relative border-2 z-10 opacity-100 object-fit w-[49.5vw] h-[49.2vh]" alt="Image2"/>
      <div className="w-[49.5vw] h-[49.5vh]">
        <p className="text-text2 opacity-95">Text</p>
      </div>
    </div>
    <div className="grid-cols-2 grid text-text2 rounded-xl border-2 border-alternateDark relative top-[5vh] left-[0.5vw] bg-alternate w-[98vw] h-[43vh]">
      <div className="bg-alternateDark mt-[1vh] rounded-xl h-[35vh] w-[42.5vw] mx-auto"></div>
      <div className="bg-alternateDark mt-[1vh] rounded-xl h-[35vh] w-[42.5vw] mx-auto"></div>
      <button className="bg-main w-[25vw] text-text1 ml-[2.75vw] h-[5vh] rounded-3xl">Contact Us</button>
    </div>
    <Footer />
  </>
}

/*
<div className="w-[10vw] relative top-0 h-14 pt-1 flex justify-evenly mx-auto">
      <button className="w-12 h-12 rounded-full bg-main">{'<'}</button>
      <button className="w-12 h-12 rounded-full bg-main">{'>'}</button>
  </div>
<h2 className="text-center relative top-16 overflow-hidden font-bold text-3xl">Title Text</h2>
*/