import React from "react";
import { LampDemo } from "@/components/ui/Lamp";
import ProfileCard from "./profile-card";

const About = () => {
  return (
    <>
    <p className="text-white-100 text-center text-5xl relative mt-20 mb-10">Meet the Developer in Me!</p>
      <ProfileCard />
    </>
  );
};

export default About;
