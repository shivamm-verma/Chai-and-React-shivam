import "./App.css";
import { useState } from "react";

function App() {
  // how to make changes in the UI`

  // how to Define variable (that you may wanna change afterwards)
  let [counter, setCounter] = useState(15);

  // let counter = 5;                            XXXXX
  const addValue = () => {
    // console.log("Clicked Add Value BTN.", counter);
    if (typeof counter == "string") {
      setCounter((counter = -1));
    }
    setCounter(counter + 1);
    // counter += 1;                             XXXXX
  };

  const remValue = () => {
    // console.log("Clicked Remove Value BTN.", counter);
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter("Value less than Zero");
    }
  };

  return (
    <>
      <h1>Shivam is here</h1>
      <h2>
        <mark>Click Count:</mark> {counter}
      </h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={remValue}>Remove Value</button>
      <br />
      <br />
      <p>
        {" "}
        <mark>footer:</mark> {counter}
      </p>
    </>
  );
}

export default App;
