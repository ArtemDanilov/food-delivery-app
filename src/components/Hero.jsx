import React from "react";

import FoodPhoto from "../assets/food.jpg";

const Hero = () => {
  return (
    <div
      className="flex justify-center items-center w-full h-full min-h-[10rem] rounded-lg"
      style={{
        background: `linear-gradient(0deg, rgba(0,0,0,0.8), transparent), url(${FoodPhoto})`,
      }}
    >
      <h2 className="text-center font-sans font-bold text-2xl text-white sm:text-3xl">
        Deliver your favorite food without leaving!
      </h2>
    </div>
  );
};

export default Hero;
