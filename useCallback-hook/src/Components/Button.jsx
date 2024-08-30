import React from "react";

function Button({ increment, children }) {
  console.log(`Rendering-  ${children}`);

  return (
    <>
      <button onClick={increment}>{children}</button>
    </>
  );
}

export default React.memo(Button);
