import React from "react";
import Basket from "../../components/Basket";

const Header = () => {
  return (
    <header className="px-2 mt-2 max-w-5xl mx-auto">
      <div className="bg-orange-200 p-4 rounded-lg flex justify-between">
        <div className="">
          <h1 className="inline-block font-bold text-white text-center py-2 px-4 bg-orange-500 rounded-lg">
            Food deliverer
          </h1>
        </div>
        <Basket />
      </div>
    </header>
  );
};

export default Header;
