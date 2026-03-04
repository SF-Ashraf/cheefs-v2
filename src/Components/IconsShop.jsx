import { Handbag, WalletMinimal } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function IconsShop({countOfMeals , priceOfMeals}) {
  return (
    <div className="footer">
      <div className="icons flex items-center gap-6 relative">
        <Link to={"/"}>
          <Handbag color="#FFD230" size={42} />
        </Link>
        <Link to={"/"}>
          <WalletMinimal color="#FFD230" size={42} />
        </Link>

        <div className="oreders text-white font-bold">
          <p className="bg-gray-500/70 w-7 h-7 flex items-center justify-center rounded-2xl absolute right-0 top-0 -translate-x-20">
            {countOfMeals}
          </p>
          <p className="bg-gray-500/70 w-12 h-7 flex items-center justify-center rounded-2xl absolute top-0 left-0 translate-x-23">
            {priceOfMeals}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IconsShop;
