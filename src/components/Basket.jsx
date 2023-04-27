import React, { useContext, useState } from "react";

import Modal from "./Modal";
import Meal from "./Meals/Meal";

import BasketIcon from "../svg/basket";
import Button from "./Button";
import BasketContext from "../store/basket-context";

const Basket = () => {
  const [isModalVisible, setModalVisibility] = useState(false);

  const bskCtx = useContext(BasketContext);

  const openBasket = () => {
    setModalVisibility(true);
  };

  const closeBasket = () => {
    setModalVisibility(false);
  };

  return (
    <>
      <button onClick={openBasket} className="relative bg-white p-1 rounded-md">
        <span className="sr-only">Basket</span>
        <BasketIcon width="32" height="32" classes="text-black" />

        {bskCtx.counter !== 0 && (
          <span className="absolute -bottom-2 -right-2 flex justify-center items-center bg-red-600 text-xs text-white text-bold w-5 h-5 rounded-full">
            {bskCtx.counter}
          </span>
        )}
      </button>

      {isModalVisible && bskCtx.counter !== 0 && (
        <Modal onClose={closeBasket}>
          {bskCtx.meals.map(({ id, name, price, amount }) => (
            <div key={id} className="p-2">
              <Meal name={name} price={price} amount={amount} />
            </div>
          ))}

          <div className="flex flex-col items-end px-2 pt-4 pb-2">
            <h3 className="text-lg font-bold text-right mb-2 sm:text-2xl">
              <span className="text-green-600">${bskCtx.totalPrice}</span>
            </h3>
            <Button>Go to payment</Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Basket;
