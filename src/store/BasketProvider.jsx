import React, { useReducer } from "react";

import BasketContext from "./basket-context";

const basket = {
  id: null,
  meals: [],
  counter: 0,
  amount: 0,
};

const reducer = (state, action) => {
  if (action.type === "addItem") {
    const updatedMeals = state.meals.concat(action.item);
    const updatedCounter = updatedMeals.length;
    const updatedAmount = updatedMeals.reduce((acc, crr) => acc + crr.price, 0);

    return {
      id: state.id,
      meals: updatedMeals,
      counter: updatedCounter,
      amount: updatedAmount,
    };
  }
  return state;
};

const BasketProvider = ({ children }) => {
  const [basketState, dispatchBasketState] = useReducer(reducer, basket);

  const addContextItem = (item) => {
    dispatchBasketState({ type: "addItem", item: item });
  };

  const removeContextItem = (id) => {};

  const context = {
    meals: basketState.meals,
    counter: basketState.counter,
    amount: basketState.amount,
    addItem: addContextItem,
    removeItem: removeContextItem,
  };

  return (
    <BasketContext.Provider value={context}>{children}</BasketContext.Provider>
  );
};

export default BasketProvider;
