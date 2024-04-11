import "../App.css";

const Schedule = () => {
  return (
    <div
      className="lg:relative lg:bottom-[3rem] max-sm:mt-[1rem] p-[1rem]"
      id="schedule"
    >
      <h1 className="text-6xl text-center md:m-[2rem] md:mb-[4.5rem] text-white max-sm:mb-[3rem]">
        Schedule
      </h1>
      <div className="timeline flex flex-col items-center m-auto">
        <div className="container m-5 left-container">
          <div className="text-box md:w-[19rem] lg:w-[31rem]">
            <h2 className="text-black text-2xl">15th March, 00:00 AM</h2>
            {/* <small>5:00 PM</small> */}
            <p className="mt-[0.5rem] text-gray-600">
              <span className="text-black">Registration Starts: </span>
              Get ready to register and kickstart your journey towards
              innovation!.....
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container w-auto m-auto relative md:left-[22%] lg:left-[25%] max-sm:left-[-2rem] md:m-0">
          <div className="text-box lg:w-[32rem] md:w-[19rem]">
            <h2 className="text-black text-2xl">12th April, 11:59 PM</h2>
            {/* <small>2018 - 2019</small> */}
            <p className="mt-[0.5rem] text-gray-600">
              <span className="text-black">Registration Ends: </span>{" "}
              Registration concludes as we prepare to dive into the heart of the
              hackathon.
            </p>
            <span className="right-container-arrow max-sm:hidden"></span>
          </div>
        </div>

        <div className="container m-5 left-container">
          <div className="text-box md:w-[19rem] lg:w-[31rem]">
            <h2 className="text-black text-2xl">15th April, 06:00 PM</h2>
            <p className="mt-[0.5rem] text-gray-600">
              <span className="text-black">Hackathon Starts: </span> he
              hackathon officially kicks off, igniting the spirit of innovation
              and collaboration.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container w-auto m-auto relative md:left-[22%] lg:left-[25%] max-sm:left-[-2rem] md:m-0">
          <div className="text-box lg:w-[32rem] md:w-[19rem]">
            <h2 className="text-black text-2xl">18th April, 9:00 AM</h2>
            {/* <small>2018 - 2019</small> */}
            <p className="mt-[0.5rem] text-gray-600">
              <span className="text-black">Finale: </span> Unveiling of
              groundbreaking projects and the celebration of innovation.
            </p>
            <span className="right-container-arrow max-sm:hidden"></span>
          </div>
        </div>

        <div className="container m-5 left-container">
          <div className="text-box md:w-[19rem] lg:w-[31rem]">
            <h2 className="text-black text-2xl">19th April, 5:00 PM</h2>
            {/* <small>2018 - 2019</small> */}
            <p className="mt-[0.5rem] text-gray-600">
              <span className="text-black">Closing Ceremony: </span> Come
              together to celebrate the achievements, camaraderie, and lasting
              impact of our hackathon journey.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        {/* <div className="container right-container w-auto m-auto relative md:left-[22%] lg:left-[25%] max-sm:left-[-2rem] md:m-0">
          <div className="text-box lg:w-[32rem] md:w-[19rem]">
            <h2 className="text-black text-2xl">18th April, 5:00 PM</h2>
            <p className="mt-[0.5rem] text-gray-600">
              <span className="text-black">Closing Ceremony: </span> Come
              together to celebrate the achievements, camaraderie, and lasting
              impact of our hackathon journey.
            </p>
            <span className="right-container-arrow max-sm:hidden"></span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Schedule;
