import React from 'react'
import Logo from "../Components/Logo"
function Footer() {
  return (
    <div className=' bg-mist-800'>
       
       <div className="flex flex-col items-center justify-center py-3">

        <Logo />
        <p className='text-amber-300 font-medium'>Copy Right © Ashraf Hesham</p>
       </div>

    </div>
  )
}

export default Footer