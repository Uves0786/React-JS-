import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    console.log("clicked", counter);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };
  const removeValue = () => {
    console.log("clicked", counter);
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h3> counter value: {counter} </h3>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}> Remove Value</button>
    </>
  );
}

export default App;
