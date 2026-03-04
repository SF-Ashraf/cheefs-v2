import React from 'react'
import Btn from './Btn'

function MealCard({meal}) {
  return (
    <div className='card W-100'>


            <img className='object-cover mx-auto w-80 h-60 rounded-md pb-3' src={meal.strMealThumb} alt="" />
        <div className="card-title shadow-2xl px-4 py-3 rounded-b-2xl">
            <p className='text-lg'><span className='font-bold text-gray-600'>Description :</span> {meal.strMeal.slice(0 , 15)}..</p>
            <p className='text-pink-800 text-lg font-bold text-center'><span className='font-bold text-gray-600'>Price :</span> {meal.price} $</p>
            
            <div className="btn-group flex py-5 justify-between ">
                <Btn style={"bg-sky-500 text-white px-6 py-2 rounded-md font-medium text-lg"} value={"view"} path={`meal-details/${meal.idMeal}`}/>
                <Btn style={"bg-amber-400 px-6 py-2 rounded-md font-medium text-white text-lg"} value={"Edit"} path={""}/>
            </div>
        </div>
    </div>
  )
}

export default MealCard