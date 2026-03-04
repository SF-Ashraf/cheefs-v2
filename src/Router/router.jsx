import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../Pages/HomePage";
import MealDetailsPage from "../Pages/MealDetailsPage";
import EditMealsPage from "../Pages/EditMealsPage";
import LoginPage from "../Pages/LoginPage";
import ProductMeals from "../Pages/ProductMeals";
import AddMeals from "../Pages/AddMeals";
import NotFoundPage from "../Pages/NoFoundPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "meal-details/:id", element: <MealDetailsPage /> },
      { path: "edit-meals", element: <EditMealsPage /> },
      {path: "login" , element: <LoginPage />},
      {path: "add-meal" , element: <AddMeals />},
      {path: "*" , element: <NotFoundPage />},
    ],
  },
]);
