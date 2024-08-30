import { useCallback, useState } from "react";
import "./App.css";
import Title from "./Components/Title";
import Count from "./Components/Count";
import Button from "./Components/Button";

function App() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(40000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <>
      <Title />
      <Count title="age" count={age} />
      <Button increment={incrementAge}>Increment age</Button>
      <Count title="salary" count={salary} />
      <Button increment={incrementSalary}>Increment salary</Button>
    </>
  );
}

export default App;
