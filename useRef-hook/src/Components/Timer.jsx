import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <>
      <h1>Cleanup timer using useRef hook</h1>
      <h2>Timer - {timer}</h2>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear interval
      </button>
    </>
  );
}

export default Timer;
