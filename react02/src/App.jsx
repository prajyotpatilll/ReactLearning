import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setcounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setcounter(counter + 1);
      // setcounter(prevCounter => prevCounter + 1);
      // // setcounter(prevCounter => prevCounter + 1);
      // // setcounter(prevCounter => prevCounter + 1);
      // // setcounter(prevCounter => prevCounter + 1);
      // // setcounter(prevCounter => prevCounter + 1);
      
  };

  const removeValue = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    }
  };

  return (
    <div className="container">
      <h3>This is First React Code</h3>
      <h1>Number Counter</h1>
      <p>{counter}</p>
      <br />
      <button onClick={addValue}>{counter} Add Value</button>
      <br />
      <button onClick={removeValue}>{counter} Remove Value</button>
    </div>
  );
}
}
export default App;
