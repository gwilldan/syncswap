import { useState } from 'react'
import {Navbar, Trade, Pool, Dashboard, Footer, BlockCount} from "./Exports"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" bg-lightBG font-inter ">
      <div className=' sticky w-full top-0 bg-blur '><Navbar /></div>
      <div className=' md:mt-12'><Trade /></div>
      <div><Pool /></div>
      <div><Dashboard /></div>
      <div><Footer /></div>
      <div><BlockCount /></div>
    </div>
  )
}

export default App
