import Image from "next/image"
import Footer from "../components/Footer"

export default function page() {
  return <>
    <Image src="file.svg" alt="image" width={100} height={100} className="opacity-80 border-2 border-black w-[100vw] h-[60vh] relative top-16"/>
    {/*<div className="w-[10vw] relative top-0 h-14 pt-1 flex justify-evenly mx-auto">
      <button className="w-12 h-12 rounded-full bg-main">{'<'}</button>
      <button className="w-12 h-12 rounded-full bg-main">{'>'}</button>
    </div>*/}
    <h1 className="relative bottom-[30vh] left-0 text-center font-bold">Hello</h1>
    <h2 className="text-center relative top-16 overflow-hidden font-bold text-3xl">Title Text</h2>
    <div className="w-[100vw] relative top-[12vh] flex">
      <Image src="file.svg" alt="image" width={100} height={100} className="border-2 border-green-500 absolute left-0 w-[15vw] object-fit"/>
      <div className="w-[85vw] border-2 border-purple-500"></div>
    </div>
    <Footer />
  </>
}