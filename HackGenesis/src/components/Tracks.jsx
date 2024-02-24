import React from "react";
import heart from "../assets/Heart.png";
import energy from "../assets/Energy.png";
import Web3 from "../assets/Web3.png";
import ml from "../assets/AI:ML.png";
import innvoation from "../assets/Innovation.png";
import "../App.css";

const Tracks = () => {
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-3 w-3/4 ml-[5rem]">
      <div className="rounded-lg h-[18rem] w-[22rem] m-10 shadow-black bg-gray-800">
        <div className="flex justify-center items-center mt-[2rem] mb-[2rem]">
          <img src={heart} />
          <h1 className="text-3xl ml-[0.5rem]">HealthCare</h1>
        </div>
        <p className="w-[18rem] m-auto">
          lorem lorem lorem lorem lorem lorem lorem lorem
        </p>
      </div>

      <div className="rounded-lg h-[18rem] w-[22rem] m-10 shadow-black bg-gray-800">
        <div className="flex justify-center items-center mt-[2rem] mb-[2rem]">
          <img src={Web3} />
          <h1 className="text-3xl ml-[0.5rem]">Web 3</h1>
        </div>
        <p className="w-[18rem] m-auto">
          lorem lorem lorem lorem lorem lorem lorem lorem
        </p>
      </div>

      <div className="rounded-lg h-[18rem] w-[22rem] m-10 shadow-black bg-gray-800">
        <div className="flex justify-center items-center mt-[2rem] mb-[2rem]">
          <img src={energy} />
          <h1 className="text-3xl ml-[0.5rem]">Energy</h1>
        </div>
        <p className="w-[18rem] m-auto">
          lorem lorem lorem lorem lorem lorem lorem lorem
        </p>
      </div>

      <div className="rounded-lg h-[18rem] w-[22rem] m-10 shadow-black bg-gray-800">
        <div className="flex justify-center items-center mt-[2rem] mb-[2rem]">
          <img src={ml} />
          <h1 className="text-3xl ml-[0.5rem]">AI/ML</h1>
        </div>
        <p className="w-[18rem] m-auto">
          lorem lorem lorem lorem lorem lorem lorem lorem
        </p>
      </div>

      <div className="rounded-lg h-[18rem] w-[22rem] m-10 shadow-black bg-gray-800">
        <div className="flex justify-center items-center mt-[2rem] mb-[2rem]">
          <img src={heart} />
          <h1 className="text-3xl ml-[0.5rem]">Cybersecurity</h1>
        </div>
        <p className="w-[18rem] m-auto">
          lorem lorem lorem lorem lorem lorem lorem lorem
        </p>
      </div>

      <div className="rounded-lg h-[18rem] w-[22rem] m-10 shadow-black bg-gray-800">
        <div className="flex justify-center items-center mt-[2rem] mb-[2rem]">
          <img src={innvoation} />
          <h1 className="text-3xl ml-[0.5rem]">Open Innovation</h1>
        </div>
        <p className="w-[18rem] m-auto">
          lorem lorem lorem lorem lorem lorem lorem lorem
        </p>
      </div>
    </div>
  );
};

export default Tracks;