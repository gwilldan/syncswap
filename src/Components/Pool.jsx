import React from 'react'
import {BiChevronDown, BiCross} from "react-icons/bi"

function Pool() {
  return (

    <div>
        <div className=' h-screen px-4  text-center'>

          {/* top caption #POOLS */}
      <div className=' pt-[150px]'>
        <h1>Pools</h1>
        <p>Put your assets to work. Deposit to liquidity pools to earn</p>
      </div>

      <div>
          <button> 
            More
            <BiChevronDown />
          </button>

          <button className=' bg-darkBG text-white'>
            <BiCross />
            New Position
          </button>

      </div>
    
        
        </div>
    </div>

  )
}

export default Pool