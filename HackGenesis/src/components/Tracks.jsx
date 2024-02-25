import React from "react";
import heart from "../assets/Heart.png";
import energy from "../assets/Energy.png";
import cyber from "../assets/cyber-security.png";
import Web3 from "../assets/Web3.png";
import ml from "../assets/AIML.png";
import innvoation from "../assets/Innovation.png";
import "../App.css";

const Tracks = () => {
  return (
    <div className="md:m-[3rem] max-md:mt-[3rem] lg:relative lg:bottom-[6rem]">
      <h1 className="text-7xl flex justify-center items-center md:m-[2rem] md:mb-[3rem]">
        TRACKS
      </h1>
      {/* <div className="grid grid-rows-2 grid-flow-col gap-3"> */}
      <div className="flex flex-wrap justify-center">
        <div className="rounded-lg h-[18rem] w-[22rem] shadow-black bg-gray-800 radius m-[1rem]">
          <div className="flex justify-center items-center mt-[2rem] mb-[2rem]">
            <img src={heart} className="w-[4rem] mr-5" />
            <h1 className="text-2xl ml-[0.5rem]">HealthCare</h1>
          </div>
          <p className="w-[18rem] m-auto ml-10">
            Explore the intersection of technology and healthcare,
            revolutionizing patient care
            <br /> and medical services.
          </p>
        </div>

        <div className="rounded-lg h-[18rem] w-[22rem] shadow-black bg-gray-800 radius m-[1rem]">
          <div className="flex justify-center items-center mt-[2rem] mb-[1.7rem]">
            <img src={energy} className="w-[3.5rem] mr-5" />
            <h1 className="text-2xl ml-[0.5rem]">Energy</h1>
          </div>
          <p className="w-[18rem] m-auto ml-10">
            Delve into renewable energy solutions and sustainable practices,
            driving the transition to a greener future
          </p>
        </div>

        <div className="rounded-lg h-[18rem] w-[22rem] shadow-black bg-gray-800 radius m-[1rem]">
          <div className="flex justify-center items-center mt-[2rem] mb-[1.3rem]">
            <img src={cyber} className="w-[3.5rem] mr-2" />
            <h1 className="text-2xl ml-[0.5rem]">Cybersecurity</h1>
          </div>
          <p className="w-[18rem] m-auto ml-10">
            Navigate the evolving landscape of cybersecurity threats and
            defenses, mastering techniques to safeguard digital assets.
          </p>
        </div>

        <div className="rounded-lg h-[18rem] w-[22rem] shadow-black bg-gray-800 radius m-[1rem]">
          <div className="flex justify-center items-center mt-[2rem] mb-[1.3rem]">
            <img src={Web3} className="w-[3.5rem] mr-5" />
            <h1 className="text-2xl ml-[0.5rem]">Web 3</h1>
          </div>
          <p className="w-[18rem] m-auto ml-10">
            Discover the potential of Web 3.0 technologies to disrupt
            industries, empower users, and redefine the way we interact online.
          </p>
        </div>

        <div className="rounded-lg h-[18rem] w-[22rem] shadow-black bg-gray-800 radius m-[1rem]">
          <div className="flex justify-center items-center mt-[2rem] mb-[1.3rem]">
            <img src={ml} className="w-[3.5rem] mr-5" />
            <h1 className="text-2xl ml-[0.5rem]">AI/ML</h1>
          </div>
          <p className="w-[18rem] m-auto ml-10">
            Embark on a journey through the cutting-edge fields of Artificial
            Intelligence and Machine Learning, where data-driven insights pave
            the way for innovation.
          </p>
        </div>

        <div className="rounded-lg h-[18rem] w-[22rem] shadow-black bg-gray-800 radius m-[1rem]">
          <div className="flex justify-center items-center mt-[2rem] mb-[1.3rem]">
            <img
              src={innvoation}
              className="w-[2.5rem] mr-3 relative bottom-2"
            />
            <h1 className="text-2xl ml-[0.5rem]">Open Innovation</h1>
          </div>
          <p className="w-[18rem] m-auto ml-10">
            Embrace the freedom of open innovation, where the boundaries are
            limitless and exploration knows no bounds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
