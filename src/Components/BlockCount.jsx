import React from 'react'

function BlockCount() {
  return (
    <div className=' flex justify-between items-center p-2 h-[56.8px] bg-white text-darkBG text-sm fixed bottom-0 w-full drop-shadow-2xl'> 

        {/*  this is the server BLock count showing at the bottom  */}
        <div className=' w-[120px] flex justify-center '>
          <p>Connect</p>
        </div>

        <div className=' w-[176px] flex justify-center'>
          <p>Mainnet</p>
        </div>

    </div>
  )
}

export default BlockCount