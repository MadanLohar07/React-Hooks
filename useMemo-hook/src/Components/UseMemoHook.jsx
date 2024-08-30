import React, { useMemo, useState } from "react";

const largeArray = new Array(30_000_000).fill(0).map((_, i) => {
  return { index: i, isSelected: i === 20_000_000 };
});

function UseMemoHook() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(largeArray);

  //   const selectedValue = items.find((item) => item.isSelected);

  const selectedValue = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  );

  return (
    <>
      <h2>useMemo hook </h2>
      <h3>Count - {count}</h3>
      Selected value is {selectedValue.index}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default UseMemoHook;
