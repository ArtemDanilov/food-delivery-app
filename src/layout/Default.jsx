import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import BasketProvider from "../store/BasketProvider";

const Default = () => {
  return (
    <BasketProvider>
      <Header />

      <Outlet />
    </BasketProvider>
  );
};

export default Default;
