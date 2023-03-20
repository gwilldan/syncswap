import React from 'react'

// REACT ICONS
import {MdCandlestickChart} from "react-icons/md"
import { FiSettings} from "react-icons/fi"
import {RxReload} from "react-icons/rx"
import {GrDown, GrFormNext} from "react-icons/gr"
import {AiOutlineArrowDown} from "react-icons/ai"
import {IoWalletOutline} from "react-icons/io5"

// IMAGES
import ethLogo from "../Images/testnet-token-icons-main/ethLogo.png"
import usdcLogo from "../Images/testnet-token-icons-main/usdcLogo.png"



function Trade() {
  return (
    <div className='h-[684px] mb-80px px-2 py-4 pt-[96px] mt-5 md:w-[480px] md:m-auto'>

        <div className=' flex items-center justify-between text-xl text-darkBG h-[34px] pr-1 pl-2 mb-2 '>
            <div><MdCandlestickChart /></div>
            <div className=' flex items-center gap-4 W-[72px] mr-2 '>
                <div><RxReload /></div>
                <div><FiSettings /></div>
            </div>
        </div>



        {/* the Top token swap section */}
        <div className=' h-[144.25px] py-4 px-[14px] bg-slate-50 rounded-[10px] shadow-sm '>
            
            <div className=' flex justify-between items-center h-[40px]'> {/* this is the top input */}
                <input type="number" placeholder="0.0" className=' bg-inherit h-full text-3xl w-[70%] focus:outline-none' />
                <div className=' flex items-center justify-center gap-3 bg-white w-fit px-3  shadow-lg h-full rounded-3xl '>
                    <img src={ethLogo} alt="" className=' h-6 ' />
                    <div className=' flex items-center gap-2'>
                        <h2 className=' '>ETH</h2>
                        <GrDown className=' text-sm'/>
                    </div>
                </div>
            </div>

            <div className=" my-3 text-[13px] flex justify-between items-center text-textFaint"> {/* this shows the balances of the top token */}
                <p>$9.70B</p>
                <div className=' flex gap-2 items-center'>
                    <p>Balance</p>
                    <p>0.09277</p>
                </div>
            </div> 

            <div className=" flex justify-between h-[30.75px]">
                <button className=' w-[75px] border-[0.8px] rounded-lg border-darkBG px-[9px] py-[3px] md:w-[97px]'>25%</button>
                <button className=' w-[75px] border-[0.8px] rounded-lg border-darkBG px-[9px] py-[3px] md:w-[97px]'>50%</button>
                <button className=' w-[75px] border-[0.8px] rounded-lg border-darkBG px-[9px] py-[3px] md:w-[97px]'>75%</button>
                <button className=' w-[75px] border-[0.8px] rounded-lg border-darkBG px-[9px] py-[3px] md:w-[97px]'>100%</button>
            </div>


        </div>



        {/* The bottom Token swap sections */}
        <div className=' h-[104px] mt-3 py-4 px-[14px] bg-slate-50 rounded-[10px] shadow-sm'>

            {/* The circular thing that contains the arrow for switching */}
            <div className=' text-darkBG border-[5px] border-white bg-slate-100 w-fit p-2 rounded-full m-auto my-[-15px] z-10 relative top-[-25px]'> 
                    <AiOutlineArrowDown />
            </div>



            <div className=' mt-[-25px] flex justify-between items-center h-[40px]'> {/* this is the bottom input */}
                <input type="number" placeholder="0.0" className=' bg-inherit h-full text-3xl w-[70%] focus:outline-none web ' />
                <div className=' flex items-center justify-center gap-3 bg-white w-fit px-3 shadow-lg h-full rounded-3xl '>
                    <img src={usdcLogo} alt="" className=' h-6 ' />
                    <div className=' flex items-center gap-2'>
                        <h2 className=' '>USDC</h2>
                        <GrDown className=' text-sm'/>
                    </div>
                </div>
            </div>

            <div className="mt-3 text-[13px] flex justify-between items-center text-textFaint"> {/* this shows the balances of the bottom token */}
                <p>$9.70B</p>
                <div className=' flex gap-2 items-center'>
                    <p>Balance</p>
                    <p>9,000,000,000</p>
                </div>
            </div> 

        </div>



        {/* The wallet connect sections */}
        <button className=' flex items-center justify-between gap-4 h-[100px] md:h-[79px] w-full mt-3 py-4 px-[18px] bg-slate-50 rounded-[10px] shadow- text-darkBG hover:text-darkSlate'>
            <div className=' flex items-center gap-4 text-left'>
                <IoWalletOutline className=' text-2xl' />
                <div>
                    <h1 className=' font-medium mb-1'>Getting Started</h1>
                    <p className=' text-sm font-normal'>Connect wallet to trade and explore more</p>
                </div>
            </div>
            <GrFormNext className=' text-lg justify-items-end ' />
        </button>

    </div>
  )
}

export default Trade