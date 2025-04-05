"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "@/components/button";
import Link from "next/link";

import HeaderMain from "@/components/header";

const Hiro = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="relative w-full overflow-hidden">
      {/* Фоновое видео */}
      <HeaderMain />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex items-center justify-center -mt-[90px] min-h-screen">
        <div className="flex flex-col gap-10 items-center justify-center">
          <p
            className="text-4xl md:text-8xl  font-semibold drop-shadow-[20px_20px_20px_black]"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            Editing what you <span className="text-red-700">need</span>
          </p>

          <Link
            href={"https://x.com/zyphertheditor"}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Button className="text-black text-2xl font-semibold">
              Contact me
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hiro;
