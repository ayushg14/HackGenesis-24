import React from "react";
import infinity from "../assets/infinity.png";

const Section = () => {
  return (
    <div className="lg:relative lg:bottom-[6rem]" id="about">
      <h1 className="text-5xl text-center max-sm:mt-[5rem] md:mt-[2rem] text-white">
        What is Hack Genesis ?
      </h1>
      <div className="flex max-md:flex-col md:flex-col lg:flex-row  justify-around items-center">
        <div className="overflow-auto p-[1rem] bg-gray-800 h-[29rem] w-[45rem] max-md:w-[19rem] rounded-2xl m-[3rem] max-md:m-[3rem] lg:relative left-[2rem] lg:mr-[10rem]">
          <p>
            Get ready for an exhilarating experience at Hack Genesis '24, the
            inaugural hackathon hosted by the Technical Club of Sciences in
            collaboration with the Corporate Club from Christ (Deemed to be
            University), Delhi NCR. Over the course of 36+ hours, participants
            will dive into 5+ themed challenges, pushing the boundaries of
            innovation and creativity. 🚀 <br />
            <br />
            What makes Hack Genesis '24 truly special is its focus on
            collaboration and learning. With themes ranging from artificial
            intelligence to sustainable development, participants have the
            opportunity to explore diverse fields and work together to address
            real-world problems. Through workshops, talks, and networking
            sessions, participants will expand their skill sets and connect with
            industry professionals, fostering a culture of continuous learning
            and growth. 🌟 <br />
            <br />
            What truly sets Hack Genesis '24 apart is its innovative approach to
            the hackathon format. In addition to the main hacking sessions,
            we're introducing new elements and surprises to keep participants
            engaged and inspired. From spontaneous challenges to team-building
            activities, every moment is an opportunity for creativity to
            flourish and new connections to be made. 💡
            <br />
            <br /> Whether you're a seasoned hacker or a curious newcomer, Hack
            Genesis '24 welcomes you to join us on this incredible journey.
            Together, let's harness the power of innovation, collaboration, and
            creativity to make a difference in the world. The future is ours to
            shape—let's seize this opportunity and hack our way to a brighter
            tomorrow. 🌍
          </p>
        </div>
        <div className="lg:relative right-[7rem] m-[2rem]">
          <div className="bg-gray-800 h-[8rem] w-[20rem] rounded-xl">
            <div className="flex flex-col justify-center items-start relative top-[2rem] ml-5">
              <h1 className="text-4xl mb-[0.5rem] text-[#EA4CDC]">36+</h1>
              <h1 className="">Hours of Hacking</h1>
            </div>
          </div>
          <div className="bg-gray-800 h-[8rem] w-[20rem] rounded-xl mt-10">
            <div className="flex flex-col justify-center items-start relative top-[2rem] ml-5">
              <h1 className="text-4xl mb-[0.5rem] text-[#FFED00]">400 +</h1>
              <h1 className="">Participants</h1>
            </div>
          </div>
          <div className="bg-gray-800 h-[8rem] w-[20rem] rounded-xl mt-10">
            <div className="flex flex-col justify-center items-start relative top-[2rem] ml-5">
              {/* <h1 className="text-4xl mb-[0.5rem] text-[#FFED00]">♾️</h1> */}
              <img src={infinity} className="w-[3rem] mb-[1rem]" />
              <h1 className="">Learning & Fun</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
