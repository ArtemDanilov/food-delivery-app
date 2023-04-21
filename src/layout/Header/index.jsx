import React from "react";

import Basket from "../../svg/basket";

const Header = () => {
  const counter = 0;

  return (
    <header className="p-2 max-w-5xl mx-auto">
      <div className="bg-orange-200 p-4 rounded-lg flex justify-between">
        <div className="">
          <h1 className="inline-block font-bold text-white text-center py-2 px-4 bg-orange-500 rounded-lg">
            Food deliverer
          </h1>
        </div>
        <button className="relative bg-white p-1 rounded-md">
          <span className="sr-only">Basket</span>
          <Basket width="32" height="32" classes="text-black" />
          {counter !== 0 && (
            <span className="absolute -bottom-2 -right-2 flex justify-center items-center bg-red-600 text-xs text-white text-bold w-5 h-5 rounded-full">
              {counter}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
