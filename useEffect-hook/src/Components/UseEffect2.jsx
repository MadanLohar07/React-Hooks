import React, { useEffect, useState } from "react";

function UseEffect2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return (
    <>
      <h2>Running effect once</h2>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default UseEffect2;
