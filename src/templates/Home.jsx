import React from "react";
import { useLoaderData } from "react-router-dom";

import Hero from "../components/Hero";
import Meals from "../components/Meals/Meals";

const Home = () => {
  const data = useLoaderData();

  return (
    <main className="w-full max-w-5xl mx-auto px-2 mt-2">
      <Hero />

      <Meals data={data} />
    </main>
  );
};

export default Home;

export const loader = async () => {
  const res = await fetch("/content/data.json");

  if (res.status === 200) {
    return res.json();
  } else {
    throw error("Error with fetch meals data");
  }
};
