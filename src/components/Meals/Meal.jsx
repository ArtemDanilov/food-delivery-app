import React, { useContext } from "react";

import ForkAndSpoon from "../../svg/ForkAndSpoon";
import Star from "../../svg/Star";
import Money from "../../svg/Money";

import "./style.scss";

import Button from "../Button";
import BasketContext from "../../store/basket-context";
import MealDetails from "./MealDetails";

const Meal = (props) => {
  const bskCtx = useContext(BasketContext);

  const addMealItem = () => {
    bskCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
    });
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
        <MealDetails name={props.name} array={mealDetails} />

        {props.button && (
          <div className="p-2">
            {props.button === "single" ? (
              <Button onClick={addMealItem}>+ Add</Button>
            ) : (
              <Button>Add more</Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Meal;
