import React, { useState } from "react";

function MultipleState() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <>
      <h2>Multiple State</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <p>
        {" "}
        {name} is {age} year old.{" "}
      </p>
    </>
  );
}

export default MultipleState;
