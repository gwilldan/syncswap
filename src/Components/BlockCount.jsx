import React from 'react'

function BlockCount() {
  return (
    <div className=' flex justify-end items-center h-[100px] gap-2 px-5 text-[13px] pt-[45px]'> 

        {/*  this is the server BLock count showing at the bottom  */}
        <p className=' text-textFaint'>185</p>
        <div className=' w-[2px] h-[2px] rounded-full bg-black'></div>
        <p>2664490</p>
        <div className=' w-2 h-2 rounded-full bg-yellow-500'></div>
    </div>
  )
}

export default BlockCount