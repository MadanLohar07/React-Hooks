import React, { useEffect, useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function UpdateTitle1() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      Count - {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default UpdateTitle1;
