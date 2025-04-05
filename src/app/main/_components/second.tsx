"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "@/components/button";

const Second = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="flex w-full flex-col md:flex-row  mx-auto container relative px-[30px] items-stretch gap-5">
      <div className="w-full flex flex-col justify-center items-center min-h-screen mt-[70px]">
        <div className="flex flex-col gap-10">
          <h1
            className="md:text-8xl"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            Elevate your content with sharp, story-driven{" "}
            <span className="text-red-700">video editing</span>
          </h1>
          <div className="flex flex-col md:flex-row w-full gap-5">
            <p
              className="border border-opacity-70 p-7 text-2xl font-semibold"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor-placement="center-bottom"
            >
              Not just editing. Storybuilding with rhythm and emotion. From raw
              thoughts to refined visuals — I give ideas a heartbeat.
            </p>
            <Button
              className=" p-10 text-2xl font-semibold text-[#070c1e] "
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-anchor-placement="center-bottom"
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
