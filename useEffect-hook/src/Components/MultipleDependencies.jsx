import React, { useEffect, useState } from "react";

function MultipleDependencies() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const resizedWindow = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", resizedWindow);

    return () => {
      window.removeEventListener("resize", resizedWindow);
    };
  }, [width, height]);

  return (
    <>
      Width : {width}
      Height : {height}
    </>
  );
}

export default MultipleDependencies;
