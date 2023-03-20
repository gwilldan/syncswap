import { useState } from 'react'
import {Navbar, Trade, Pool, Dashboard} from "./Exports"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" bg-lightBG font-inter ">
      <div className=' sticky w-full top-0 bg-blur '><Navbar /></div>
      <div><Trade /></div>
      <div><Pool /></div>
      <div><Dashboard /></div>
    </div>
  )
}

export default App
