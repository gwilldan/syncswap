import React from 'react'

// icons
import {FiMenu} from "react-icons/fi"
import {BiWater} from "react-icons/bi"
import {IoSwapVertical} from "react-icons/io5"
import {MdDataUsage} from "react-icons/md"
import {GrDown} from "react-icons/gr"

// images
import syncIcon from '../Images/syncswap.svg'
import ethLogo from "../Images/testnet-token-icons-main/ethLogo.png"


function Navbar({toggle, setToggle}) {

 

  return (
    <div className=' backdrop-blur-md '>
        <div className=' bg-darkBG text-white h-[22px] text-xs flex items-center justify-center'>
          <p>You are visiting SyncSwap on the zkSync Era testnet. </p>
        </div>
        <div className=' flex items-center justify-between py-2 pr-3 pl-4 h-[58px]'>
            <button><img src={syncIcon} alt="syncIcon" className=' h-[32px] w-[32px] '/></button>
            <button ><FiMenu onClick={() => setToggle(!toggle)} className=' text-2xl text-darkBG font-extrabold '/></button>
         </div>


        {/* THIS IS THE MOBILE NAV BAR */}
        <div className={toggle ? 'z-50 overflow-y-hidden h-screen w-[224px] bg-white absolute top-0 left-0 md:hidden ' : ' hidden'}>
          <div className=' h-full w-full flex flex-col justify-between pt-12 pb-8 pl-8 pr-4'>
            
            {/* Top Section */}
            <div className=' flex flex-col gap-5 font-medium text-darkBG'>
                <button className=' flex items-center w-fit h-10 gap-2'>
                    <IoSwapVertical className=' text-xl' />
                    <h2>Trade</h2>
                </button>

                <button className=' flex items-center w-fit h-10 gap-2'>
                    <BiWater className=' text-xl' />
                    <h2>Pool</h2>
                </button>

                <button className=' flex items-center w-fit  h-10 gap-2'>
                    <MdDataUsage className=' text-xl' />
                    <h2>Dashboard</h2>
                </button>

            </div>

            {/* Bottom section */}
            <div className=' h-[123.5px] flex flex-col gap-4'>

              <div className=' flex justify-between items-center'>
                <button>Faucet</button>
              </div>
              
              <button className=' flex justify-center items-center gap-2 text-white bg-darkBG rounded-md'>
                <img src={ethLogo} alt="eth" className=' h-6 ' />
                <h>ETH</h>
                <div className=' text-white'><GrDown className=' text-white'/></div>
              </button>

              <button>Faucet</button>

            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Navbar