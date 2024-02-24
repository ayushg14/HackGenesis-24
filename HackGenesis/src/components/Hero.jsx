import React from "react";
import Video from "../assets/Video.mp4";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200 relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={Video}
      />
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center justify-center relative z-10">
        <div className="flex flex-col justify-start h-screen mt-[10rem]">
          <h1 className="text-7xl font-bold text-white text-center">
            Hack Genesis '24
          </h1>
          {/* <p className="py-6 text-white text-center">15th - 18th April</p> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
