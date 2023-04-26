import { createContext } from "react";

const basketContext = createContext({
  meals: [],
  counter: 0,
  amount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default basketContext;
