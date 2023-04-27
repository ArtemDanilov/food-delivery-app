import React from "react";

import "./style.scss";

const Button = ({ children, onClick, size }) => {
  const btnSize = size ?? "medium";

  return (
    <button
      onClick={onClick}
      className={`${btnSize} text-gray-600 text-base bg-white border border-gray-600 rounded-md hover:bg-gray-100`}
    >
      {children}
    </button>
  );
};

export default Button;
