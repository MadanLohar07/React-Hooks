import React, { useState } from "react";

function Counter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <>
      <h2>Basic counter</h2>
      <h3>Count : {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(initialCount);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default Counter;
