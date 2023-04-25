import React, { useState } from "react";

import Modal from "./Modal";
import Meal from "./Meals/Meal";

import BasketIcon from "../svg/basket";
import Button from "./Button";

const counter = [
  {
    "id": 1,
    "name": "Burger with pulled beef",
    "image":
      "https://images.lecker.de/pulled-beef-burger-mit-apfel-coleslaw,id=6285df78,b=lecker,w=1600,h=,ca=11.05,0,88.95,100,rm=sk.jpeg",
    "price": 12.5,
    "rating": 4.2,
    "tags": ["burgers", "beaf"],
    "cuisine": "american",
  },
  {
    "id": 2,
    "name": "Burger with pulled beef",
    "image":
      "https://images.lecker.de/pulled-beef-burger-mit-apfel-coleslaw,id=6285df78,b=lecker,w=1600,h=,ca=11.05,0,88.95,100,rm=sk.jpeg",
    "price": 8.5,
    "rating": 4.2,
    "tags": ["burgers", "beaf"],
    "cuisine": "american",
  },
];

const Basket = () => {
  const [isModalVisible, setModalVisibility] = useState(false);

  const openBasket = () => {
    setModalVisibility(true);
  };

  const closeBasket = () => {
    setModalVisibility(false);
  };

  const totalPrice = counter.reduce((acc, crr) => acc + crr.price, 0);

  return (
    <>
      <button onClick={openBasket} className="relative bg-white p-1 rounded-md">
        <span className="sr-only">Basket</span>
        <BasketIcon width="32" height="32" classes="text-black" />

        {counter.length !== 0 && (
          <span className="absolute -bottom-2 -right-2 flex justify-center items-center bg-red-600 text-xs text-white text-bold w-5 h-5 rounded-full">
            {counter.length}
          </span>
        )}
      </button>

      {isModalVisible && counter.length !== 0 && (
        <Modal onClose={closeBasket}>
          {counter.map(({ id, name, price }) => (
            <div key={id} className="p-2">
              <Meal name={name} price={price} />
            </div>
          ))}

          <div className="flex flex-col items-end px-2 pt-4 pb-2">
            <h3 className="text-lg font-bold text-right mb-2 sm:text-2xl">
              Total price: <span className="text-green-600">${totalPrice}</span>
            </h3>
            <Button>Go to payment</Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Basket;
