import React, { useState, useEffect } from "react";

const Timer = () => {
  const WORK_DURATION = 25 * 60;
  const BREAK_DURATION = 5 * 60;

  const [time, setTime] = useState(WORK_DURATION);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setTime(WORK_DURATION);
  };

  useEffect(() => {
    let interval;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
      if (isBreak) {
        setIsBreak(false);
        setTime(WORK_DURATION);
      } else {
        setIsBreak(true);
        setTime(BREAK_DURATION);
      }
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time, isBreak]);

  return (
    <div>
      <h1 className="text-2xl">
        {isBreak ? "Break Time" : "Timer"} - {Math.floor(time / 60)}:
        {time % 60 < 10 ? "0" : ""}
        {time % 60}
      </h1>
      <button onClick={toggleTimer} className="bg-blue-500 text-white p-2 rounded">
        {isActive ? "Pause" : "Start"}
      </button>
      <button onClick={resetTimer} className="bg-red-500 text-white p-2 rounded ml-4">
        Reset
      </button>
    </div>
  );
};

export default Timer;
