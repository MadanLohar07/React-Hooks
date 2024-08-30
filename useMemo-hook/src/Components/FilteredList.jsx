import React, { useMemo, useState } from "react";

function FilteredList() {
  const [query, setQuery] = useState("");

  const [items] = useState([
    "apple",
    "banana",
    "papaya",
    "watermelon",
    "grapes",
    "berry",
    "mango",
    "carrot",
  ]);

  const filteredItems = useMemo(() => {
    console.log("filtering...");
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, items]);

  return (
    <>
      <h2>List filtering</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default FilteredList;
