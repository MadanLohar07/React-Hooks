import React, { useEffect, useState } from "react";

function UseEffect1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered or updated");
  });

  return (
    <>
      <h2>Running on every render</h2>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default UseEffect1;
