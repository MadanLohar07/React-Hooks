import React, { useState } from "react";

function LazyInitialization() {
  const initialCount = () => {
    return Math.floor(Math.random() * 100);
  };
  const [count, setCount] = useState(initialCount);
  return (
    <>
      <h2>Lazy initialization of state</h2>
      <h3>Count : {count}</h3>
      <button onClick={(e) => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default LazyInitialization;
