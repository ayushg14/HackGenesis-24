import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    // Set the date we're counting down to
    const countDownDate = new Date("April 16, 2024 00:00:00").getTime();

    // Update the count down every 1 second
    const intervalId = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the state with the calculated values
      setCountdown({
        days,
        hours,
        minutes,
        seconds,
        expired: distance < 0,
      });

      // If the count down is finished, clear the interval
      if (distance < 0) {
        clearInterval(intervalId);
      }
    }, 100);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <>
      {/* <p id="demo">
        {countdown.expired
          ? "EXPIRED"
          : `${countdown.days}d ${countdown.hours}h ${countdown.minutes}m ${countdown.seconds}s`}
      </p> */}
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max max-sm:h-[6rem]">
        <div className="flex flex-col p-2 bg-gray-800 rounded-box text-neutral-content justify-center max-sm:h-[7rem]">
          <span className="countdown font-mono text-[6rem] max-sm:text-[2.3rem] mb-[0.5rem] text-[yellow]">
            <span style={{ "--value": countdown.days }}>{countdown.days}</span>
          </span>
          Days
        </div>
        <div className="flex flex-col p-2 bg-gray-800 rounded-box text-neutral-content justify-center">
          <span className="countdown font-mono text-[6rem] max-sm:text-[2.3rem] mb-[0.5rem] text-[yellow]">
            <span style={{ "--value": countdown.hours }}>
              {countdown.hours}
            </span>
          </span>
          Hours
        </div>
        <div className="flex flex-col p-2 bg-gray-800 rounded-box text-neutral-content justify-center">
          <span className="countdown font-mono text-[6rem] max-sm:text-[2.3rem] mb-[0.5rem] text-[deepskyblue]">
            <span style={{ "--value": countdown.minutes }}>
              {countdown.minutes}
            </span>
          </span>
          Min
        </div>
        <div className="flex flex-col p-2 bg-gray-800 rounded-box text-neutral-content justify-center">
          <span className="countdown font-mono text-[6rem] max-sm:text-[2.3rem] mb-[0.5rem] text-[deepskyblue]">
            <span style={{ "--value": countdown.seconds }}>
              {countdown.seconds}
            </span>
          </span>
          Sec
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;
