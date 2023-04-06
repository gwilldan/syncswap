import React from 'react'
import {IoWalletOutline} from "react-icons/io5"
import {BiChevronDown} from "react-icons/bi"

//svg imports
import eraMainnet from "../Images/era.svg"

function ConnectNetwork() {
  return (
    <div>

      {/* THIS IS THE CONNECT WALLET FOR THE MOBILE VIEW ONLY */}
      <div className=' flex justify-between items-center p-2 h-[56.8px] bg-slate-50 text-darkBG text-sm fixed bottom-0 w-full drop-shadow-2xl md:hidden'> 
        <button className=' w-[120px] flex justify-center items-center gap-2'>
          <IoWalletOutline className=' text-2xl' />
          <p>Connect</p>
        </button>

        <div className=' w-[176px] flex justify-center items-center gap-6'>
          <button className=' flex items-center justify-center gap-2'>
            <img src={eraMainnet} alt="svg"/>
            <p>Mainnet</p>
          </ button>

          <button>
            <BiChevronDown className=' text-2xl'/>
          </button>
        </div>
      </div>


      {/* THIS IS FOR THE SERVER BLOCK COUNT ON TAB AND DESKTOP */}
      <div className=' hidden md:flex md:justify-end md:items-center md:h-[10px] md:gap-2 md:px-5 md:text-[13px] md:pt-[45px]'> 
        
        <div className=' flex justify-end items-center h-[56.8px] gap-2 text-[13px] fixed bottom-0 w-full'> 

            {/*  this is the server BLock count showing at the bottom  */}
            <p className=' text-textFaint'>185</p>
            <div className=' w-[2px] h-[2px] rounded-full bg-black'></div>
            <p>2664490</p>
            <div className=' w-2 h-2 rounded-full bg-yellow-500'></div>

        </div>

      </div>

    </div>
   
  )
}

export default ConnectNetwork