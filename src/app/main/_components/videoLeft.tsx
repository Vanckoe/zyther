"use client";
import React from "react";
interface VideoPProps {
  title: string;
  src: string;
}

const VideoP: React.FC<VideoPProps> = ({ title, src }) => {
  return (
    <div className="flex w-full flex-col gap-10">
      <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
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
