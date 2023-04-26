import React from "react";

const MealDetails = (props) => {
  return (
    <div className={props.classes}>
      <h3 className="font-bold text-xl mb-2 sm:text-2xl sm:mb-3">
        {props.name}
      </h3>

      <ul className="list space-y-0.5 sm:space-y-1">
        {props.array.map(({ detail, icon }) => {
          return (
            detail && (
              <li key={detail}>
                <span>{icon}</span>
                {detail}
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default MealDetails;
