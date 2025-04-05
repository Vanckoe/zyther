"use client";
import React from "react";
import Button from "@/components/button";

interface SecondProps {
  scrollToProjects: () => void;
}

const Second: React.FC<SecondProps> = ({ scrollToProjects }) => {
  return (
    <div className="flex w-full flex-col md:flex-row mx-auto container relative px-[30px] items-stretch gap-5">
      <div className="w-full flex flex-col justify-center items-center py-[150px] md:py-0 md:min-h-[100lvh] mt-[70px]">
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl md:text-8xl animate-fade-up">
            Elevate your content with sharp, story-driven{" "}
            <span className="text-red-700">video editing</span>
          </h1>
          <div className="flex flex-col md:flex-row w-full gap-5">
            <p className="border border-opacity-70 p-7 text-2xl font-semibold opacity-0 animate-fade-up delay-[600ms]  drop-shadow-[20px_20px_20px_black]">
              Not just editing. Storybuilding with rhythm and emotion. From raw
              thoughts to refined visuals — I give ideas a heartbeat.
            </p>
            <Button
              className="opacity-0 animate-fade-up p-10 text-2xl font-semibold text-[#070c1e]"
              onClick={scrollToProjects}
              variant={"primary"}
            >
              Watch portfolio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
