import { useState } from 'react'
import './App.css'
// import Button from './Components/Button'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen flex justify-center'
    style={{backgroundColor:color}}
    >
      <div className='w-7xl  h-13 rounded-3xl fixed bottom-5 flex justify-evenly items-center'
      style={{backgroundColor: 'white'}}
      >
        <button className=' w-15 h-10 rounded-2xl text-white'
        onClick={()=>setColor("red")}
        style={{backgroundColor:'red'}}>Red
        </button>
         <button className=' w-15 h-10 rounded-2xl text-white'
        onClick={()=>setColor("Blue")}
        style={{backgroundColor:'Blue'}}>Blue
        </button>
         <button className=' w-15 h-10 rounded-2xl text-white'
        onClick={()=>setColor("Green")}
        style={{backgroundColor:'Green'}}>Green
        </button>
         <button className=' w-15 h-10 rounded-2xl text-white'
        onClick={()=>setColor("Yellow")}
        style={{backgroundColor:'Yellow'}}>Yellow
        </button>
         <button className=' w-15 h-10 rounded-2xl text-white'
        onClick={()=>setColor("orange")}
        style={{backgroundColor:'orange'}}>Orange
        </button>
        <button className=' w-15 h-10 rounded-2xl text-white'
        onClick={()=>setColor("Purple")}
        style={{backgroundColor:'purple'}}>Purple
        </button>
        <button className=' w-15 h-10 rounded-2xl text-white'
        onClick={()=>setColor("olive")}
        style={{backgroundColor:'olive'}}>olive
        </button>
        <button className=' w-15 h-10 rounded-2xl text-white'
        onClick={()=>setColor("gray")}
        style={{backgroundColor:'gray'}}>gray
        </button>
        <button className=' w-15 h-10 rounded-2xl text-white'
        onClick={()=>setColor("pink")}
        style={{backgroundColor:'pink'}}>pink
        </button>
        <button className=' w-20 h-10 rounded-2xl text-gray'
        onClick={()=>setColor("Lavender")}
        style={{backgroundColor:'Lavender'}}>Lavender
        </button>
        <button className=' w-15 h-10 rounded-2xl text-white'
        onClick={()=>setColor("Black")}
        style={{backgroundColor:'Black'}}>Black
        </button>
      </div>
    </div>
  )
}

export default App
