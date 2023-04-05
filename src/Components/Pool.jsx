import React from 'react'
import {BiChevronDown, BiCross} from "react-icons/bi"

function Pool() {
  return (
    <div>

      {/* top caption #POOLS */}
      <div>
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
  )
}

export default Pool