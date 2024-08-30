import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <h2>Input will focus while reloading - useRef hook</h2>
      <input ref={inputRef} type="text" />
    </>
  );
}

export default FocusInput;
