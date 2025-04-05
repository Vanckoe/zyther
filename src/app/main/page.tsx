import React from "react";
import Hiro from "./_components/hiro";
// import Second from "./_components/second";
// import Stack from "./_components/stack";
// import RunBunner from "./_components/runBunner";
import Second from "./_components/second";

const About = () => {
  return (
    <div className="flex flex-col">
      <Hiro />
      <div className="flex flex-col gap-[200px]">
        <Second />
        {/* <RunBunner /> */}
        {/* <Second /> */}
        {/* <Stack /> */}
      </div>
    </div>
  );
};

export default About;
