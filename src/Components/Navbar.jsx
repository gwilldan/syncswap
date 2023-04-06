import React, {useState} from 'react'

// icons
import {FiMenu} from "react-icons/fi"
import {BiWater} from "react-icons/bi"
import {HiArrowPath} from "react-icons/hi2"
import {MdDataUsage} from "react-icons/md"
import {FiChevronDown} from "react-icons/fi"
import { BsFillRocketTakeoffFill} from "react-icons/bs"
import {SiGitbook} from "react-icons/si"

// images
import syncIcon from '../Images/syncswap.svg'
import ethLogo from "../Images/testnet-token-icons-main/ethLogo.png"


function Navbar({toggle, setToggle, Link}) {

  const toggleOff = () => {
    setToggle(false);
  }

  const [hover, setHover] = useState(false);

  return (
    <div className=' backdrop-blur-md '>
        <div className=' bg-darkBG text-white h-[22px] text-xs flex items-center justify-center'>
          <p>You are on the zkSync Era Mainnet. </p>
        </div>
        <div className=' flex items-center gap-4 py-2 pr-3 pl-4 h-[58px] justify-between md:justify-start'>
            <button><img src={syncIcon} alt="syncIcon" className=' h-[32px] w-[32px] '/></button>

            {/* Tap and PC Links */}
            <div className=' md:text-darkSlate md:flex md:items-center md:gap-8 md:text-sm md:ml-8 hidden'>
              <Link to="/" onClick={toggleOff} className=' group flex items-center w-fit h-10 gap-4'>
                <h1 className=' group-hover:text-darkBG' >Trade</h1>
              </Link>

              <Link to="/Pool" onClick={toggleOff} className='group flex items-center w-fit h-10 gap-1 '>
                <h1 className=' group-hover:text-darkBG'>Pool</h1>
                <FiChevronDown className=' transition-all ease-linear duration-100 group-hover:rotate-180 group-hover:text-darkBG' />
              </Link>

              <Link to="/Launch" onClick={toggleOff} className=' group flex items-center w-fit  h-10 gap-4'>
                <h1 className=' group-hover:text-darkBG'>Launch</h1>
              </Link>

              <Link to="/Portfolio" onClick={toggleOff} className=' group flex items-center w-fit  h-10 gap-4'>
                <h1 className=' group-hover:text-darkBG'>Portfolio</h1>
              </Link>

              <Link to="/Bridge" onClick={toggleOff} className='group flex items-center w-fit  h-10 gap-4'>
                <h1 className=' group-hover:text-darkBG'>Bridge</h1>
              </Link>

            </div>

            {/* HAMBURGER BUTTON FOR MOBILE */}
            <button className=' md:hidden'><FiMenu onClick={() => setToggle(!toggle)} className=' text-2xl text-darkBG font-extrabold '/></button>
         </div>


        {/* THIS IS THE MOBILE NAV BAR */}
        <div className={`transition-all ease-linear duration-200 overflow-hidden h-screen w-[224px] left-0 bg-white absolute top-0 md:hidden ${toggle? 'left-0' : 'left-[-224px]'}`}>
          <div className='h-full w-full flex flex-col justify-between pt-12 pb-8 pl-8 pr-4 drop-shadow-2xl'>
            
            {/* Top Section and Links */}
            <div className=' flex flex-col gap-5 font-medium text-darkBG'>
                <Link to="/" onClick={toggleOff} className=' flex items-center w-fit h-10 gap-4'>
                    <HiArrowPath className=' font-medium text-xl rotate-90' />
                    <h1 className=' font-normal'>Trade</h1>
                </Link>

                <Link to="/Pool" onClick={toggleOff} className=' flex items-center w-fit h-10 gap-4'>
                    <BiWater className=' text-xl' />
                    <h1 className=' font-normal'>Pool</h1>
                </Link>

                <Link to="/Launch" onClick={toggleOff} className=' flex items-center w-fit  h-10 gap-4'>
                    <BsFillRocketTakeoffFill className=' text-xl' />
                    <h1 className=' font-normal'>Launch</h1>
                </Link>

                <Link to="/Portfolio" onClick={toggleOff} className=' flex items-center w-fit  h-10 gap-4'>
                    <MdDataUsage className=' text-xl' />
                    <h1 className=' font-normal'>Portfolio</h1>
                </Link>

                <Link to="/Bridge" onClick={toggleOff} className=' flex items-center w-fit  h-10 gap-4'>
                    <SiGitbook className=' text-xl' />
                    <h1 className=' font-normal'>Bridge</h1>
                </Link>

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