import React from 'react'
import {FiMenu} from "react-icons/fi"
import syncIcon from '../Images/syncswap.svg'



function Navbar() {
  return (
    <div>
        <div className=' bg-darkBG text-white h-[22px] text-xs flex items-center justify-center'><p>You are visiting SyncSwap on the zkSync Era testnet. </p></div>
        <div className=' flex items-center justify-between py-2 pr-3 pl-4 h-[58px]'>
            <button><img src={syncIcon} alt="syncIcon" className=' h-[32px] w-[32px] '/></button>
            <button ><FiMenu className=' text-2xl text-darkBG font-extrabold '/></button>
        </div>
    </div>
  )
}

export default Navbar