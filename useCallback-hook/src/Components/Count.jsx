import React from "react";

function Count({ title, count }) {
  console.log(`Rendering - ${title}`);

  return (
    <>
      {title} - {count}
    </>
  );
}

export default React.memo(Count);
