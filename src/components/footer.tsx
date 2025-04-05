import React from "react";
import Logo from "@/assets/Logo";

const Footer = () => {
  return (
    <div className="w-full pt-[150px] pb-10">
      <footer className="container px-5 justify-between  text-white mx-auto w-full flex flex-col md:flex-row items-center">
        <div className="flex flex-row items-center md:items-start justify-between w-full gap-2.5 ">
          <div className="flex flex-row items-center gap-5">
            <Logo />
            <p className="text-base leading-tight font-medium opacity-80">
              © All rights reserved
            </p>
          </div>

          <h1 className="text-nowrap text-[2rem] md:text-[4rem] font-bold leading-tight">
            ZYPHER
          </h1>
        </div>
        <div className="flex flex-col-reverse md:flex-col items-end">
          <div className="flex flex-col-reverse w-full md:w-fit md:flex-row items-center gap-8 md:gap-12 justify-end"></div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
