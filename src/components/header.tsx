import React from "react";
// import Link from "next/link";
import Logo from "@/assets/Logo";

const HeaderMain = () => {
  return (
    <div
    // className={"fixed top-0 z-50 shadow-md w-full transition-all duration-300"}
    // className={`${
    //   isScrolled
    //     ? "fixed top-0 z-50 shadow-md"
    //     : "absolute top-0 left-0 z-50 bg-transparent"
    // } w-full transition-all duration-300`}
    >
      <div className="mx-auto container relative px-[30px] mt-4">
        <header
          className={`flex flex-row items-center w-full gap-5 justify-between`}
        >
          <Logo />
          <h1 className="text-nowrap">ZYPHER</h1>
          {/* <LanguageSwitcher textColorFirstStage={textColor} /> */}
          <div className=""></div>
        </header>
      </div>
    </div>
  );
};

export default HeaderMain;
