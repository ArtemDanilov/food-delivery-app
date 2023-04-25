import React from "react";

import ForkAndSpoon from "../../svg/ForkAndSpoon";
import Star from "../../svg/Star";
import Money from "../../svg/Money";

import "./style.scss";
import Button from "../Button";

const Meal = (props) => {
  const currency = "$";

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
        <div>
          <h3 className="font-bold text-xl mb-2 sm:text-2xl sm:mb-3">
            {props.name}
          </h3>

          <ul className="list space-y-0.5 sm:space-y-1">
            {props.price && (
              <li>
                <span>
                  <Money width="20" height="20" />
                </span>
                {currency}
                {props.price}
              </li>
            )}
            {props.rating && (
              <li>
                <span>
                  <Star width="20" height="20" />
                </span>
                {props.rating}
              </li>
            )}
            {props.cuisine && (
              <li>
                <span>
                  <ForkAndSpoon width="20" height="20" />
                </span>
                {props.cuisine}
              </li>
            )}
          </ul>
        </div>

        {props.button && (
          <div className="p-2">
            {props.button === "single" ? (
              <Button>+ Add</Button>
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
