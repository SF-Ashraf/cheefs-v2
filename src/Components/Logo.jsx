import React from 'react'
import LogoImg from "../assets/images/mealschefLogo.png"
import { Link } from 'react-router-dom'
import Btn from './Btn'
function Logo() {
  return (
    <div className='flex items-center gap-10'>
        
        <div className="brand flex flex-col items-center">
            <img className='w-16 h-16' src={LogoImg} alt="Logo" />
            <Link to={"/"} className='text-amber-300 font-bold text-2xl uppercase'><h1>Cheefs</h1></Link>
        </div>

        
    </div>
  )
}

export default Logo