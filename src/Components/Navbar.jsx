import React from 'react'

// icons
import {FiMenu} from "react-icons/fi"
import {BiWater} from "react-icons/bi"
import {HiArrowPath} from "react-icons/hi2"
import {MdDataUsage} from "react-icons/md"
import {FiChevronDown} from "react-icons/fi"
import {BsFillRocketTakeoffFill} from "react-icons/bs"
import {SiGitbook} from "react-icons/si"

// images
import syncIcon from '../Images/syncswap.svg'
import ethLogo from "../Images/testnet-token-icons-main/ethLogo.png"


function Navbar({toggle, setToggle}) {

 

  return (
    <div className=' backdrop-blur-md '>
        <div className=' bg-darkBG text-white h-[22px] text-xs flex items-center justify-center'>
          <p>You are on the zkSync Era Mainnet. </p>
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
                <button className=' flex items-center w-fit h-10 gap-4'>
                    <HiArrowPath className=' font-medium text-xl rotate-90' />
                    <h2 className=' font-normal'>Trade</h2>
                </button>

                <button className=' flex items-center w-fit h-10 gap-4'>
                    <BiWater className=' text-xl' />
                    <h2 className=' font-normal'>Pool</h2>
                </button>

                <button className=' flex items-center w-fit  h-10 gap-4'>
                    <BsFillRocketTakeoffFill className=' text-xl' />
                    <h2 className=' font-normal'>Launch</h2>
                </button>

                <button className=' flex items-center w-fit  h-10 gap-4'>
                    <MdDataUsage className=' text-xl' />
                    <h2 className=' font-normal'>Portfolio</h2>
                </button>

                <button className=' flex items-center w-fit  h-10 gap-4'>
                    <SiGitbook className=' text-xl' />
                    <h2 className=' font-normal'>Bridge</h2>
                </button>

            </div>

            {/* Bottom section */}
            <div className=' h-[123.5px] flex flex-col gap-4 justify-end'>

              <button className=' flex justify-center items-center gap-2 text-white bg-darkBG rounded-lg h-9 w-[176px] shadow-md'>
                <img src={ethLogo} alt="eth" className=' h-6 ' />
                <h>ETH</h>
                <div className=' text-white'><FiChevronDown /></div>
              </button>

            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Navbar