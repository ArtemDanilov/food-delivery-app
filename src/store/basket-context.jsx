import { createContext } from "react";

const basketContext = createContext({
  meals: [],
  counter: 0,
  totalPrice: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default basketContext;
