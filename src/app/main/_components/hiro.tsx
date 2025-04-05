"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useCallback, useState } from "react";
import Button from "@/components/button";
import Link from "next/link";
// import { GithubIcon } from "@/assets/liveIcons/Git";
// import { InstagramIcon } from "@/assets/liveIcons/Insta";
// import { MailCheckIcon } from "@/assets/liveIcons/Mail";
// import { CheckCheckIcon } from "@/assets/liveIcons/Check";
import HeaderMain from "@/components/header";

const Hiro = () => {
  // const [copied, setCopied] = useState(false);

  // const handleCopy = useCallback(
  //   async (e: React.MouseEvent<HTMLAnchorElement>) => {
  //     e.preventDefault();
  //     try {
  //       await navigator.clipboard.writeText("adiltalasbek@gmail.com");
  //       setCopied(true);
  //       setTimeout(() => setCopied(false), 2000);
  //     } catch (err) {
  //       console.error("Ошибка при копировании:", err);
  //     }
  //   },
  //   []
  // );
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
          {/* <CheckCheckIcon
            size={20}
            className="flexflex-row border py-4 px-10 bg-black/30 hover:bg-white/5 rounded-[5px] items-center gap-3"
          >
            <Link href={"https://x.com/zyphertheditor"} className="text-3xl ">
              Contact me
            </Link>
          </CheckCheckIcon> */}
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
