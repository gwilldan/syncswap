import { useState } from 'react'
import {Navbar, Trade, Pool, Portfolio, Footer, Launch, Bridge, ConnectNetwork} from "./Exports"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"


function App() {

  const [toggle, setToggle] = useState(false);

  return (
    <div className={ toggle? " h-screen overflow-hidden font-inter bg-lightBG" : " bg-lightBG font-inter overflow-x-hidden "}>
      <BrowserRouter>

        <div className=' fixed w-full top-0 bg-blur z-20'><Navbar Link={Link} toggle={toggle} setToggle={setToggle}/></div>
        
        <Routes>
          <Route path='/' element={<Trade />}></Route>
          <Route path='/Pool' element={<Pool />}></Route>
          <Route path='/Launch' element={<Launch />}></Route>
          <Route path='/Portfolio' element={<Portfolio />}></Route>
          <Route path='/Bridge' element={<Bridge />}></Route>
          <Route path='/*' element={<Trade />}></Route>
        </Routes>
        
        <div><Footer /></div>
        <div><ConnectNetwork /></div>

      </BrowserRouter>
      
    </div>
  )
}

export default App
