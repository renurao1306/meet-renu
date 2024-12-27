import React from "react";
import ProfileCard from "./profile-card";
import { FlipWords } from "./ui/FlipWords";

const words = ["Developer", "Innovator", "Designer", "Engineer", "Creator", "Explorer"];


const About = () => {
  return (
    <>
    <div className="text-white-100 text-center text-3xl relative mt-20 mb-10">Meet the <FlipWords words={words} duration={2000} className="text-3xl font-bold" />in Me!</div>
      <ProfileCard />
    </>
  );
};

export default About;
