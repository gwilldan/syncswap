import React from 'react'
import {MdCandlestickChart} from "react-icons/md"
import {FiSettings} from "react-icons/fi"
import {RxReload} from "react-icons/rx"
import {GrDown} from "react-icons/gr"
import ethLogo from "../Images/testnet-token-icons-main/ethLogo.png"



function Trade() {
  return (
    <div className=' h-[362px] px-2 py-4 mt-5 '>

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
                <div className=' flex items-center justify-center gap-3 bg-white w-[112px] shadow-lg h-full rounded-3xl '>
                    <img src={ethLogo} alt="" className=' h-6 ' />
                    <h2 className=' '>ETH</h2>
                    <GrDown className=' text-xs'/>
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
                <button className=' w-[75px] border-[0.8px] rounded-lg border-darkBG px-[9px] py-[3px] '>25%</button>
                <button className=' w-[75px] border-[0.8px] rounded-lg border-darkBG px-[9px] py-[3px] '>50%</button>
                <button className=' w-[75px] border-[0.8px] rounded-lg border-darkBG px-[9px] py-[3px] '>75%</button>
                <button className=' w-[75px] border-[0.8px] rounded-lg border-darkBG px-[9px] py-[3px] '>100%</button>
            </div>


        </div>


        {/* The bottom Token swap sections */}
        <div className=' h-[104px] mt-4 py-4 px-[14px] bg-slate-50 rounded-[10px] shadow-sm '>


            <div className=' flex justify-between items-center h-[40px]'> {/* this is the bottom input */}
                <input type="number" placeholder="0.0" className=' bg-inherit h-full text-3xl w-[70%] focus:outline-none' />
                <div className=' flex items-center justify-center gap-3 bg-white w-[112px] shadow-lg h-full rounded-3xl '>
                    <img src={ethLogo} alt="" className=' h-6 ' />
                    <h2 className=' '>ETH</h2>
                    <GrDown className=' text-xs'/>
                </div>
            </div>

            <div className=" my-3 text-[13px] flex justify-between items-center text-textFaint"> {/* this shows the balances of the bottom token */}
                <p>$9.70B</p>
                <div className=' flex gap-2 items-center'>
                    <p>Balance</p>
                    <p>9,000,000,000</p>
                </div>
            </div> 

        </div>


        


    </div>
  )
}

export default Trade