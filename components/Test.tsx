import React from "react";
import { BackgroundGradient } from "./ui/BackgroundGradient";
import { FlipWords } from "./ui/FlipWords";

const words = ["Developer", "Innovator", "Coder", "Engineer", "Problem Solver", "Technophile"];


const Test = () => {
  return (
    <div className="text-white-100 text-center text-3xl relative mt-20 mb-10">Meet the
      <FlipWords words={words} duration={2000} className="text-2xl font-bold" />in Me!</div>

  );
};

export default Test;