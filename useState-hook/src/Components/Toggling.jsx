import React, { useState } from "react";

function Toggling() {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <h2>Toggling a boolean state</h2>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? "On" : "Off"}</button>
    </>
  );
}

export default Toggling;
