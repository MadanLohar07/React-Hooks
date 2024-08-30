import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseMemoHook from "./Components/UseMemoHook";
import FilteredList from "./Components/FilteredList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <UseMemoHook /> */}
      <FilteredList />
    </>
  );
}

export default App;
