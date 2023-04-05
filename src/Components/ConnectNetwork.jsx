import React from 'react'
import {IoWalletOutline} from "react-icons/io5"
import {BiChevronDown} from "react-icons/bi"

//svg imports
import eraMainnet from "../Images/era.svg"

function ConnectNetwork() {
  return (
    <div className=' flex justify-between items-center p-2 h-[56.8px] bg-slate-50 text-darkBG text-sm fixed bottom-0 w-full drop-shadow-2xl'> 

        {/*  this is the server BLock count showing at the bottom  */}
        <button className=' w-[120px] flex justify-center items-center gap-2'>
          <IoWalletOutline className=' text-2xl' />
          <p>Connect</p>
        </button>

        <button className=' w-[176px] flex justify-center items-center gap-6'>
          <div className=' flex items-center justify-center gap-2'>
            <img src={eraMainnet} alt="svg"/>
            <p>Mainnet</p>
          </div>

          <BiChevronDown className=' text-2xl'/>

        </button>

    </div>
  )
}

export default ConnectNetwork