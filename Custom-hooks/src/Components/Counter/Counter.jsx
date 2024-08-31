import React from "react";
import useCounter from "./useCounter";

function Counter() {
  const [count, increment, decrement, reset] = useCounter(10, 5);
  return (
    <>
      <h3>Count - {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Counter;
