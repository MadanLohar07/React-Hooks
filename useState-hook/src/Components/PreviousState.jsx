import React, { useState } from "react";

function Scoreboard() {
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    setScore((prevScore) => prevScore + 10);
  };

  return (
    <div>
      <h2>Update the state based on previous state</h2>
      <p>Score: {score}</p>
      <button onClick={incrementScore}>Add 10 Points</button>
    </div>
  );
}

export default Scoreboard;
