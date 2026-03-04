import Header from "../Ui/Header";
import Footer from "../Ui/Footer";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function MainLayout() {
  const [countOfMeals, setCountOfMeals] = useState(0);
  const [priceOfMeals, setPriceOfMeals] = useState(0);

  useEffect(() => {
    if (countOfMeals > 0) {
      Swal.fire({
        title: "Drag me!",
        text: "The meal has been added to the cart. ✅" ,
        icon: "success",
        draggable: true,
      });
    }else{
      return
    }
  }, [countOfMeals]);

  return (
    <div className="app flex flex-col h-screen">
      <Header countOfMeals={countOfMeals} priceOfMeals={priceOfMeals} />
      <main className="main flex-1">
        <Outlet context={{ setCountOfMeals, setPriceOfMeals }} />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
