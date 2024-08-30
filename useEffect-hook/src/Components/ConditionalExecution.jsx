import React, { useEffect, useState } from "react";

function ConditionalExecution({ query }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (query) {
      fetch(`https://api.example.com/data?search=${query}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    }
  }, [query]);
  return (
    <>
      <h2>Conditional Execution</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
    </>
  );
}

export default ConditionalExecution;
