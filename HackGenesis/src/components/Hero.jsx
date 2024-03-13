import React from "react";
// import Video from "../assets/Video.mp4";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="hero md:min-h-screen relative bg-black">
      {/* <div className="w-auto">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full max-md:h-[38rem] object-cover"
          src={Video}
        />
      </div> */}
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center justify-center relative max-sm:top-[1rem] z-10 max-sm:h-[27.5rem] md:h-[55rem]">
        <div className="flex flex-col justify-start h-screen mt-[10rem] max-md:mt-[3rem]">
          <div>
            <h1 className="text-8xl max-sm:text-4xl max-md:text-5xl font-bold text-white text-center">
              Hack Genesis '24
            </h1>
          </div>
          <div className="flex justify-center items-center mt-[5rem] max-sm:mt-[3rem]">
            <CountdownTimer />
          </div>

          <div className="flex justify-center items-center relative top-[7rem] max-sm:top-[5rem]">
            <div
              className="apply-button flex justify-center items-center"
              data-hackathon-slug="hack-genesis"
              data-button-theme="light"
              style={{ height: "44px", width: "312px" }} // Inline styles as a JavaScript object
            ></div>
          </div>
          {/* <p className="py-6 text-white text-center">15th - 18th April</p> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
