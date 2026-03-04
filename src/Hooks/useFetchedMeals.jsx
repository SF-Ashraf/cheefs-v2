import {mealsData} from "../Data/mealsData"
import MealCard from "../Components/MealCard"
export const useFechedMeals = mealsData.map((meal) =>{
    return(
        <MealCard key={meal.idMeal} meal={meal}/>
    )
})