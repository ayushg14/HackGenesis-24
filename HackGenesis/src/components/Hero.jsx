import React from "react";
import Video from "../assets/Video.mp4";

const Hero = () => {
  return (
    <div className="hero md:min-h-screen bg-base-200 relative">
      <div className="w-auto">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full max-md:h-[38rem] object-cover"
          src={Video}
        />
      </div>
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center justify-center relative z-10 max-md:h-[32.5rem]">
        <div className="flex flex-col justify-start h-screen mt-[10rem] max-md:mt-[3rem]">
          <h1 className="text-7xl max-md:text-5xl font-bold text-white text-center">
            Hack Genesis '24
          </h1>
          {/* <p className="py-6 text-white text-center">15th - 18th April</p> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
