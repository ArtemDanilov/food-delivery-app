import React, { useReducer } from "react";

import BasketContext from "./basket-context";

const basket = {
  meals: [],
  counter: 0,
  totalPrice: 0,
};

const reducer = (state, action) => {
  let updatedMeals;
  if (action.type === "addItem") {
    const existingMealsCounter = state.meals.findIndex(
      (meal) => meal.id === action.item.id
    );
    const existingMeal = state.meals[existingMealsCounter];

    if (existingMeal) {
      const updatedMeal = {
        ...existingMeal,
        amount: existingMeal.amount + 1,
      };

      updatedMeals = [...state.meals];
      updatedMeals[existingMealsCounter] = updatedMeal;
    } else {
      updatedMeals = state.meals.concat(action.item);
    }

    const updatedCounter = updatedMeals.reduce(
      (acc, crr) => acc + crr.amount,
      0
    );

    const updatedTotalPrice = updatedMeals.reduce(
      (acc, crr) => acc + crr.price * crr.amount,
      0
    );

    return {
      meals: updatedMeals,
      counter: updatedCounter,
      totalPrice: updatedTotalPrice,
    };
  }

  if (action.type === "removeItem") {
    let updatedMeals;

    const existingMealsCounter = state.meals.findIndex(
      (meal) => meal.id === action.id
    );
    const existingMeal = state.meals[existingMealsCounter];

    if (existingMeal.amount > 1) {
      const updatedMeal = {
        ...existingMeal,
        amount: existingMeal.amount - 1,
      };

      updatedMeals = [...state.meals];
      updatedMeals[existingMealsCounter] = updatedMeal;
    } else {
      updatedMeals = state.meals.filter((meal) => meal.id !== action.id);
    }

    const updatedCounter = updatedMeals.reduce(
      (acc, crr) => acc + crr.amount,
      0
    );

    const updatedTotalPrice = updatedMeals.reduce(
      (acc, crr) => acc + crr.price * crr.amount,
      0
    );

    return {
      meals: updatedMeals,
      counter: updatedCounter,
      totalPrice: updatedTotalPrice,
    };
  }

  return state;
};

const BasketProvider = ({ children }) => {
  const [basketState, dispatchBasketState] = useReducer(reducer, basket);

  const addContextItem = (item) => {
    dispatchBasketState({ type: "addItem", item: item });
  };

  const removeContextItem = (id) => {
    dispatchBasketState({ type: "removeItem", id: id });
  };

  const context = {
    meals: basketState.meals,
    counter: basketState.counter,
    totalPrice: basketState.totalPrice,
    addItem: addContextItem,
    removeItem: removeContextItem,
  };

  return (
    <BasketContext.Provider value={context}>{children}</BasketContext.Provider>
  );
};

export default BasketProvider;
