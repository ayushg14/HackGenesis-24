import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const endDate = new Date("April 15, 2024 18:00:00").getTime(); // Fixed end date

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
        expired: distance < 0,
      });

      if (distance < 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max max-sm:h-[6rem]">
      <div className="flex flex-col p-2 bg-gray-800 rounded-box text-neutral-content justify-center">
        <span className="countdown font-mono text-[6rem] max-sm:text-[2.3rem] mb-[0.5rem] text-[yellow]">
          <span style={{ "--value": countdown.days }}>{countdown.days}</span>
        </span>
        Days
      </div>
      <div className="flex flex-col p-2 bg-gray-800 rounded-box text-neutral-content justify-center">
        <span className="countdown font-mono text-[6rem] max-sm:text-[2.3rem] mb-[0.5rem] text-[yellow]">
          <span style={{ "--value": countdown.hours }}>
            {countdown.hours < 10 ? `0${countdown.hours}` : countdown.hours}
          </span>
        </span>
        Hours
      </div>
      <div className="flex flex-col p-2 bg-gray-800 rounded-box text-neutral-content justify-center">
        <span className="countdown font-mono text-[6rem] max-sm:text-[2.3rem] mb-[0.5rem] text-[deepskyblue]">
          <span style={{ "--value": countdown.minutes }}>
            {countdown.minutes < 10
              ? `0${countdown.minutes}`
              : countdown.minutes}
          </span>
        </span>
        Min
      </div>
      <div className="flex flex-col p-2 bg-gray-800 rounded-box text-neutral-content justify-center">
        <span className="countdown font-mono text-[6rem] max-sm:text-[2.3rem] mb-[0.5rem] text-[deepskyblue]">
          <span style={{ "--value": countdown.seconds }}>
            {countdown.seconds < 10
              ? `0${countdown.seconds}`
              : countdown.seconds}
          </span>
        </span>
        Sec
      </div>
    </div>
  );
};

export default CountdownTimer;
