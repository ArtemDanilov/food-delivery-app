import React, { useContext } from "react";

import ForkAndSpoon from "../../svg/ForkAndSpoon";
import Star from "../../svg/Star";
import Money from "../../svg/Money";

import "./style.scss";

import Button from "../Button/Button";
import BasketContext from "../../store/basket-context";
import MealDetails from "./MealDetails";

const Meal = (props) => {
  const bskCtx = useContext(BasketContext);

  const addMealItem = () => {
    bskCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: 1,
    });
  };

  const removeMealItem = () => {
    bskCtx.removeItem(props.id);
  };

  const currency = "$";

  const mealDetails = [
    {
      detail: `${currency}${props.price}`,
      icon: <Money width="20" height="20" />,
    },
    {
      detail: props.rating,
      icon: <Star width="20" height="20" />,
    },
    {
      detail: props.cuisine,
      icon: <ForkAndSpoon width="20" height="20" />,
    },
  ];

  return (
    <div className="meal w-full max-w-[30rem] overflow-hidden bg-white border border-gray-300 rounded-lg sm:flex sm:max-w-none">
      {props.image && (
        <img
          src={props.image}
          alt={props.title}
          width="480"
          height="220"
          className="w-full h-full max-h-36 object-cover object-center sm:max-w-[18.75rem]"
        />
      )}
      <div className="w-full p-2 flex justify-between items-end">
        <MealDetails
          array={mealDetails}
          name={props.name}
          amount={props.amount}
        />

        {props.button === "add" && (
          <div className="p-2">
            <Button onClick={addMealItem}>+ Add</Button>
          </div>
        )}
        {props.button === "addAndRemove" && (
          <div className="p-2 flex space-x-2">
            <Button size={props.buttonSize} onClick={addMealItem}>
              +
            </Button>
            <Button size={props.buttonSize} onClick={removeMealItem}>
              -
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Meal;
