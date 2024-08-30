import React, { useEffect, useState } from "react";

function EffectCleanup() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Interval is cleared");
    };
  }, []);
  return (
    <>
      <h2>Effect with cleanup</h2>
      <h3>Timer : {seconds}</h3>
    </>
  );
}

export default EffectCleanup;
