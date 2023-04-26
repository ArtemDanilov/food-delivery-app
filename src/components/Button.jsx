import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-gray-600 text-base bg-white py-1 px-4 border border-gray-600 rounded-md hover:bg-gray-100"
    >
      {children}
    </button>
  );
};

export default Button;
