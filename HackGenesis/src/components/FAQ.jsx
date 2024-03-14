import React from "react";
import faq from "../assets/faq.png";
import Accordion from "./Accordian";

const FAQ = () => {
  return (
    <div className="m-10" id="faq">
      <h1 className="text-6xl text-center md:m-[2rem] md:mb-[3rem] text-white">
        FAQ
      </h1>
      <div className="flex justify-evenly items-center max-md:flex-col">
        <div>
          <img
            src={faq}
            className="h-[40rem] max-md:h-[20rem] max-md:mt-[1rem]"
          />
        </div>
        <div>
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
