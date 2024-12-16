import Image from "next/image"
import Footer from "../components/Footer"

export default function page() {
  return <>
    <Image src="/ladder.webp" alt="Image1" width={400} height={400} className="bg-black rounded-b-xl md:hidden opacity-40 border-2 border-black w-[100vw] h-[90vh] relative top-16"/>
    <Image src="/fullScreen.webp" alt="Image1" width={800} height={400} className="bg-black rounded-b-xl hidden md:block grayscale opacity-40 border-2 border-black w-[100vw] h-[90vh] relative top-16"/>
    <h1 className="relative text-3xl text-yellow-100 bottom-[30vh] left-0 text-center font-extrabold">Business Name</h1>
    <div className="w-[99vw] grid grid-cols-1 lg:grid-cols-2 rounded-xl lg:bg-darkGrey my-5 relative left-[0.5vw] top-[10vh] lg:top-[5vh] gap-4 lg:gap-0 h-[103vh] lg:h-[50vh]">
      <div className="lg:w-[49.5vw] lg:hidden rounded-xl bg-darkGrey w-[99vw] text-md h-[49.5vh]">
          <p className="mt-5 mx-2 font-semibold">Electrician related to being an electrician for rizzle no cap ong no shizzle Electrician related to being an electrician for rizzle no cap ong no shizzle Electrician related to being an electrician for rizzle no cap ong no shizzle Electrician related to being an electrician for rizzle no cap ong no shizzle</p>
      </div>
      <Image src="file.svg" width={100} height={100} className="lg:rounded-l-xl rounded-xl  bg-white relative z-10 opacity-100 -ml-[0.7px] object-fit w-[100vw] lg:w-[50vw] h-[50vh]" alt="Image2"/>
      <div className="lg:w-[49.5vw] rounded-xl lg:block hidden bg-darkGrey w-[99vw] h-[49.5vh]">
        <p className="text-text2 opacity-95">Text</p>
    </div>
    </div>
    <div className=" bg-darkGrey text-text2 rounded-xl relative top-[12.5vh] lg:top-[5vh] left-[0.5vw] bg-alternate w-[98vw] h-[45vh]">
      
      <h1 className="text-2xl text-center font-bold text-black">Our Services:</h1>
      
      <div className="grid grid-cols-2 lg:grid-cols-3">
        <div className="bg-cream mt-[2.5vh] rounded-xl h-[35vh] w-[45vw] lg:w-[30vw] mx-auto">
          <h2 className="text-center pt-[1vh]">Service we provide</h2>
          <p className="font-light mx-1.5">text related to a service which is provided by electricians for real no cap</p>
        </div>
        <div className="bg-cream mt-[2.5vh] rounded-xl h-[35vh] w-[45vw] lg:w-[30vw] mx-auto">
          <h2 className="text-center pt-[1vh]">Service we provide</h2>
          <p className="font-light mx-1.5">text related to a service which is provided by electricians for real no cap</p>
        </div>
        <div className="bg-darkGrey hidden lg:block mt-[2.5vh] rounded-xl h-[35vh] w-[45vw] lg:w-[30vw] mx-auto">
          <h2 className="text-center pt-[1vh]">Service we provide</h2>
          <p className="font-light mx-1.5">text related to a service which is provided by electricians for real no cap</p>
        </div>
      </div>
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