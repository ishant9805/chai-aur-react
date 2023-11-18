import { useState } from "react"

function App() {
  const [bgColors, setBgColors] = useState("Olive")


  return (
    <div className="w-full h-screen duration-300" style={{backgroundColor: bgColors}}>
        <div className="flex flex-wrap justify-center" style={{backgroundColor: bgColors}}>
          <h1 className='font-medium w-1/2 m-2 text-black bg-white/30 backdrop-blur-sm text-3xl p-5 text-center backdrop-brightness-50 hover:backdrop-brightness-75'>bgChanger</h1>
        </div>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap gap-3 bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setBgColors("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
            <button onClick={() => setBgColors("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
            <button onClick={() => setBgColors("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
            <button onClick={() => setBgColors("olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "olive"}}>Olive</button>
            <button onClick={() => setBgColors("lavender")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "lavender"}}>Lavender</button>
            <button onClick={() => setBgColors("yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "yellow"}}>Yellow</button>
            <button onClick={() => setBgColors("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>Black</button>
            <button onClick={() => setBgColors("white")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "white"}}>White</button>
            <button onClick={() => setBgColors("pink")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "pink"}}>Pink</button>
            <button onClick={() => setBgColors("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "purple"}}>Purple</button>
          </div>
        </div>
    </div>
  )
}

export default App
