import React, {useState} from 'react'
import {FiMenu} from "react-icons/fi"
import syncIcon from '../Images/syncswap.svg'


function Navbar() {

  const [toggle, setToggle] = useState(false);

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
        <div className={toggle ? '  h-screen w-[224px] bg-white absolute top-0 left-0 md:hidden ' : ' md:hidden h-screen w-[224px] bg-white absolute top-0 left-[-224px]'}>
          jsf
        </div>
      
    </div>
  )
}

export default Navbar