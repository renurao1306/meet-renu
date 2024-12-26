import React from "react";
import { BackgroundGradient } from "./ui/BackgroundGradient";

const Test = () => {
  return (
    <BackgroundGradient
      containerClassName=""
      className="text-center text-white"
      animate={true}
    >
      <h1 className="text-4xl font-bold">Welcome to My Page</h1>
    </BackgroundGradient>
  );
};

export default Test;