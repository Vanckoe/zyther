import React from "react";
import VideoP from "./videoLeft";

const Projects = () => {
  return (
    <div className="flex w-full flex-col mx-auto container relative px-[30px] items-stretch gap-10 md:gap-[100px]">
      <VideoP
        title="Fern style"
        src="https://www.youtube.com/embed/oDcLSPo6qkI?si=sVkkmVkqLnGM4UpO"
      />
      <VideoP
        title="Ex Cop style"
        src="https://www.youtube.com/embed/glJrx4pRO70?si=NJWdPVd7wxFIbFzt"
      />
      <VideoP
        title="SunnyV2 style"
        src="https://www.youtube.com/embed/HhjkbyLJnK0?si=KacO9Y4GsBvtwL9E"
      />
    </div>
  );
};

export default Projects;
