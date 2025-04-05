"use client";
import React, { useRef } from "react";
import Hiro from "./_components/hiro";
import Second from "./_components/second";
import Projects from "./_components/projects";

const About = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col">
      <Hiro />
      <div className="flex flex-col gap-[200px]">
        <Second
          scrollToProjects={() => {
            projectsRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <div ref={projectsRef}>
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default About;
