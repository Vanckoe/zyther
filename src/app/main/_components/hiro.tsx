"use client";
import React from "react";
import Button from "@/components/button";
import Link from "next/link";
import HeaderMain from "@/components/header";

const Hiro = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Фоновое видео */}
      <HeaderMain />
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none" // ⏳ не грузит видео до старта
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Контент поверх видео */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col gap-10 items-center justify-center">
          {/* убираем AOS, добавляем кастомную анимацию */}
          <p className="text-4xl md:text-8xl font-semibold text-white opacity-0 animate-fade-up">
            Editing what you <span className="text-red-700">need</span>
          </p>

          <Link href="https://x.com/zyphertheditor">
            <Button className="text-black text-2xl font-semibold opacity-0 animate-fade-up delay-[600ms]">
              Contact me
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hiro;
