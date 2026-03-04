import { useParams } from "react-router-dom";
import { mealsData } from "../Data/mealsData";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
function MealDetailsPage() {
  const { setCountOfMeals, setPriceOfMeals } = useOutletContext();

  const handleOrdres = (price) => {
    setCountOfMeals((prev) => prev + 1);
    setPriceOfMeals((prev) => prev + price);
  };
  const { id } = useParams();
  const fetchedMeal = mealsData.find((meal) => meal.idMeal === id);

  const [selectImg, setSelectImg] = useState(
    fetchedMeal.mealPictures[0].mealPicture,
  );

  return (
    <div className="container mx-auto  h-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-20 ">
        <div className="card  ">
          <div className="img-main">
            <img
              className="object-cover w-full h-100 rounded-2xl"
              src={selectImg}
              alt="logo"
            />
          </div>

          <div className="img-carsole flex items-center justify-around">
            {fetchedMeal.mealPictures.map((meal, index) => (
              <div key={index} className="my-10">
                <img
                  className="w-35 h-25 cursor-pointer rounded-2xl hover:scale-105 transition-all "
                  src={meal.mealPicture}
                  alt=""
                  onClick={() => setSelectImg(meal.mealPicture)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="ingredaint ">
          <div className="overflow-y-scroll overflow-x-hidden h-96">
            {fetchedMeal.ingredients.map((ingredient, index) => (
              <div key={index} className="ms-20">
                <li className="leading-loose text-lg">
                  {ingredient.ingredient}
                </li>
              </div>
            ))}
          </div>

          <div className="mt-30">
            <button
              onClick={() => handleOrdres(fetchedMeal.price)}
              className="w-full cursor-pointer flex items-center justify-center bg-amber-400 py-2  ms-4 mt-4 rounded-md font-bold text-gray-600"
            >
              Add To Cart {fetchedMeal.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealDetailsPage;
