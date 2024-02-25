import React from "react";
import faq from "../assets/faq.png";
import Accordion from "./Accordian";

const FAQ = () => {
  return (
    <div className="m-10">
      <h1 className="text-4xl flex justify-center items-center underline">
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
