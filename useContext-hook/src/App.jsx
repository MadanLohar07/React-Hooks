import "./App.css";
import ComponentA from "./Components/ComponentA";
import { UserContext } from "./Components/UserContext";

function App() {
  return (
    <>
      <h2>Passing data to component tree using useContext hook</h2>
      <UserContext.Provider value={"Clark"}>
        <ComponentA />
      </UserContext.Provider>
    </>
  );
}

export default App;
