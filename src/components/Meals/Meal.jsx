import React from "react";

import ForkAndSpoon from "../../svg/ForkAndSpoon";
import Star from "../../svg/Star";
import Money from "../../svg/Money";

import "./style.scss";

const Meal = (props) => {
  return (
    <div className="meal w-full max-w-[30rem] overflow-hidden bg-white border border-gray-300 rounded-lg hover:bg-gray-100 sm:flex sm:max-w-none">
      <img
        src={props.image}
        alt={props.title}
        width="480"
        height="220"
        className="w-full h-full max-h-36 object-cover object-center sm:max-w-[18.75rem]"
      />
      <div className="p-2">
        <h3 className="font-bold text-xl mb-2 sm:text-2xl sm:mb-3">
          {props.name}
        </h3>

        <ul className="list space-y-0.5 sm:space-y-1">
          <li>
            <span>
              <Money width="20" height="20" />
            </span>
            {props.currency}
            {props.price}
          </li>
          <li>
            <span>
              <Star width="20" height="20" />
            </span>
            {props.rating}
          </li>
          <li>
            <span>
              <ForkAndSpoon width="20" height="20" />
            </span>
            {props.cuisine}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Meal;
