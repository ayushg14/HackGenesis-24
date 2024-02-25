import React from "react";

const Banner = () => {
  return (
    <div className="mt-20">
      <h1 className="text-4xl text-white flex justify-center items-center mb-14">
        Team
      </h1>
      <div className="flex justify-evenly items-center">
        <button className="btn btn-circle w-[7rem] hover:bg-rose-50 hover:border-neutral-600">
          Leads
        </button>
        <button className="btn btn-circle w-[7rem]">Logistics</button>
        <button className="btn btn-circle w-[8rem]">Management</button>
        <button className="btn btn-circle w-[7rem]">Creative</button>
        <button className="btn btn-circle w-[10rem]">PR / Sponsorship</button>
      </div>
      <div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Banner;
