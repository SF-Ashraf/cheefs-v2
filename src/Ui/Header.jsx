import React from 'react'
import IconsShop from '../Components/IconsShop'
import Logo from '../Components/Logo'
import Btn from '../Components/Btn'

function Header({countOfMeals , priceOfMeals}) {
  return (
    <div className='bg-mist-800'>

        <div className="container mx-auto flex items-center justify-between py-2">
          <div className="logo flex items-center gap-8">
            
            <Logo />
            <Btn style={"text-amber-300  font-bold border px-6 py-2 rounded-md hover:text-white hover:bg-transparent "} path={"/control-panel"} value={"Login"}/>
           
          </div>

          <div className="icons-shop">
            <IconsShop countOfMeals={countOfMeals} priceOfMeals={priceOfMeals}/>
          </div>
        </div>
      
    </div>
  )
}

export default Header