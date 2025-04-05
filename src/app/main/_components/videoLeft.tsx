"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
interface VideoPProps {
  title: string;
  src: string;
}

const VideoP: React.FC<VideoPProps> = ({ title, src }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="flex w-full flex-col gap-10">
      <h1
        className="text-4xl md:text-6xl font-bold"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        {title}
      </h1>
      <div className="w-full aspect-video">
        <iframe
          className="w-full h-full"
          src={src}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoP;
