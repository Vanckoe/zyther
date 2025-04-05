import React from "react";
import Logo from "@/assets/Logo";

const HeaderMain = () => {
  return (
    <div>
      <div className="mx-auto container relative px-[30px] mt-4">
        <header
          className={`flex flex-row items-center w-full gap-5 justify-between`}
        >
          <Logo />
          <h1 className="text-nowrap">ZYPHER</h1>
          <div className=""></div>
        </header>
      </div>
    </div>
  );
};

export default HeaderMain;
