import React from "react";
import Hiro from "./_components/hiro";
import Second from "./_components/second";
import Projects from "./_components/projects";

const About = () => {
  return (
    <div className="flex flex-col">
      <Hiro />
      <div className="flex flex-col gap-[200px]">
        <Second />
        <Projects />
      </div>
    </div>
  );
};

export default About;
