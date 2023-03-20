import { useState } from 'react'
import {Navbar, Trade, Pool, Dashboard, Footer, BlockCount} from "./Exports"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" bg-lightBG font-inter overflow-x-hidden">
      <div className=' sticky w-full top-0 bg-blur z-20'><Navbar /></div>
      <div className=' md:mt-12'><Trade /></div>
      <div className=' hidden'><Pool /></div>
      <div className=' hidden'><Dashboard /></div>
      <div><Footer /></div>
      <div><BlockCount /></div>
    </div>
  )
}

export default App
