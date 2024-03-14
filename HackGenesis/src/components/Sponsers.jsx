import React from "react";
import Devfolio from "../assets/Devfolio_Logo-White@2x.png";
import Polygon from "../assets/Polygon_Logo-White@2x.png";
import ETHIndia from "../assets/ethindia-light.png";
import "../App.css";

const Sponsers = () => {
  return (
    <div
      className="flex flex-col justify-center items-center m-[2rem] mt-[4rem] pt-[1rem]"
      id="sponsors"
    >
      <h1 className="text-6xl text-center text-white">Sponsors</h1>
      <div className="m-[3rem] mb-[2rem] mt-[4rem]">
        <div className="flex justify-center items-center mb-[3rem]">
          <h1 className="bg-[#1A1E23] h-[3rem] w-[11rem] p-[0.6rem] pt-[0.7rem] text-center rounded-[2rem] hover:cursor-pointer text-lg">
            Gold Sponsors
          </h1>
          {/* <button className="btn">Gold Sponsers</button> */}
        </div>

        {/* Sponsers Conatiner */}
        <div
          className="flex justify-around items-center max-sm:flex-col"
          id="main-sponser"
        >
          <div
            className="bg-gray-800 p-[1.3rem] m-[1rem] rounded-lg"
            id="one-sponser"
          >
            <button>
              <a href="https://devfolio.co" target="_blank">
                <img src={Devfolio} alt="DEVFOLIO LOGO" className="w-[20rem]" />
              </a>
            </button>
          </div>
          {/* <div
            className="bg-gray-800 p-[1.3rem] m-[1rem] rounded-lg"
            id="one-sponser"
          >
            <button>
              <a href="https://www.google.com" target="_blank">
                <img src={Devfolio} className="w-[20rem]" />
              </a>
            </button>
          </div>
          <div
            className="bg-gray-800 p-[1.3rem] m-[1rem] rounded-lg"
            id="one-sponser"
          >
            <button>
              <a href="https://www.google.com" target="_blank">
                <img src={Devfolio} className="w-[20rem]" />
              </a>
            </button>
          </div> */}
        </div>
      </div>

      {/* Silver Sponsers */}
      <div className="m-[3rem] mb-[2rem] mt-[2rem]">
        <div className="flex justify-center items-center mb-[3rem]">
          <h1 className="bg-[#1A1E23] h-[3rem] w-[12rem] p-[0.6rem] pt-[0.7rem] text-center rounded-[2rem] hover:cursor-pointer text-lg">
            Silver Sponsors
          </h1>
        </div>

        {/* Sponsers Conatiner */}
        <div
          className="flex justify-around items-center max-sm:flex-col"
          id="main-sponser"
        >
          <div
            className="bg-gray-800 p-[1.3rem] m-[1rem] rounded-lg"
            id="one-sponser"
          >
            <button>
              <a href="https://polygon.technology/" target="_blank">
                <img src={Polygon} alt="POLYGON LOGO" className="w-[20rem]" />
              </a>
            </button>
          </div>
          <div
            className="bg-gray-800 p-[1.3rem] m-[1rem] rounded-lg"
            id="one-sponser"
          >
            <button>
              <a href="https://ethindia.co" target="_blank">
                <img src={ETHIndia} alt="ETHINDIA LOGO" className="w-[20rem]" />
              </a>
            </button>
          </div>
          {/* <div
            className="bg-gray-800 p-[1.3rem] m-[1rem] rounded-lg"
            id="one-sponser"
          >
            <button>
              <a href="https://www.google.com" target="_blank">
                <img src={Devfolio} className="w-[20rem]" />
              </a>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
