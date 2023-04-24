import React from "react";

import Meal from "./Meal";

const Meals = (props) => {
  const data = props.data;

  return (
    <section className="py-4">
      <ul className="space-y-4">
        {data.meals.map((meal) => (
          <li key={meal.id}>
            <Meal {...meal} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Meals;
