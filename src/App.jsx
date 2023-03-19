import { useState } from 'react'
import './App.css'
import {Navbar, Trade, Pool, Dashboard} from "./Exports"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div><Navbar /></div>
      <div><Trade /></div>
      <div><Pool /></div>
      <div><Dashboard /></div>
    </div>
  )
}

export default App
