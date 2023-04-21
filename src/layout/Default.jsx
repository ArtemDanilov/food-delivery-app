import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Default = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

export default Default;
