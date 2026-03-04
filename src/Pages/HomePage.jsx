import React from 'react'
import { useFechedMeals } from '../Hooks/useFetchedMeals'

function HomePage() {
  return (
    <div className='container mx-auto flex flex-col items-center pb-30'>
              <h2 className='text-gray-500 py-15 text-center text-3xl uppercase'>Suggested For You</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-30 gap-y-20">
            {useFechedMeals}
        </div>

    </div>
  )
}

export default HomePage