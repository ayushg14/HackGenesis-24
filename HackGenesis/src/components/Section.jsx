import React from "react";

const Section = () => {
  return (
    <div>
      <h1 className="text-5xl text-center max-sm:mt-[5rem] md:mt-[3rem]">
        What is Hack Genesis ?
      </h1>
      <div className="flex max-md:flex-col md:flex-col lg:flex-row  justify-around items-center">
        <div className="bg-gray-800 h-[29rem] w-[45rem] max-md:w-[19rem] rounded-2xl m-[3rem] max-md:m-[3rem] lg:relative left-[2rem]"></div>
        <div className="lg:relative right-[7rem] m-[2rem]">
          <div className="bg-gray-800 h-[8rem] w-[20rem] rounded-xl"></div>
          <div className="bg-gray-800 h-[8rem] w-[20rem] rounded-xl mt-10"></div>
          <div className="bg-gray-800 h-[8rem] w-[20rem] rounded-xl mt-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Section;
