import React from 'react'

function AddMeals() {
  return (
    <div className='container mx-auto'>
        <div className="grid grid-cols-1 lg:grid-cols-3 my-20">
          <form action="">
            <div className="add-new-meal flex flex-col shadow-2xl px-4 leading-loose h-100">
              <h2 className='text-amber-500 text-2xl py-3'>Add New Meal</h2>
            
              <label className='font-medium' htmlFor="mealName">Meal Name</label>
              <input className='border py-2 rounded ps-3'  type="text" name="mealName" id="mealName" placeholder='Enter Meal Name'/>
              <label htmlFor="Price">Price</label>
              <input className='border py-2 rounded ps-3' type="text" name="price" id="Price" placeholder='Enter Price Meal'/>
              <label htmlFor="mealThumb">Meal Thumb</label>
              <input className='border py-2 rounded ps-3' type="url" name="mealThumb" id="mealThumb" placeholder='Meal Thumb'/>
            </div>
          </form>
        </div>
    </div>
  )
}

export default AddMeals