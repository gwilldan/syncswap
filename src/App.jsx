import { useState } from 'react'
import {Navbar, Trade, Pool, Dashboard, Footer, BlockCount} from "./Exports"


function App() {

  const [toggle, setToggle] = useState(false);

  return (
    <div className={ toggle? " h-screen overflow-hidden font-inter bg-lightBG" : " bg-lightBG font-inter overflow-x-hidden "}>
      <div className=' fixed w-full top-0 bg-blur z-20'><Navbar toggle={toggle} setToggle={setToggle}/></div>
      <div className=' md:mt-12'><Trade /></div>
      <div className=' hidden'><Pool /></div>
      <div className=' hidden'><Dashboard /></div>
      <div><Footer /></div>
      <div><BlockCount /></div>
    </div>
  )
}

export default App
