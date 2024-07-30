import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState("");
  const [difference, setDifference] = useState(0);

  //logic code disini
  
  function handleInput(event) {
    // Allow only whole numbers, filter out non-numeric characters
    const value = event.target.value.replace(/[^0-9]/g, "");
    setNumber(value);
  }

  function handleSubmit() {
    if (number) {
      // Reverse the number
      const reversedNumber = number.split("").reverse().join("");

      // Convert to integers
      const num = parseInt(number, 10);
      const revNum = parseInt(reversedNumber, 10);

      // Calculate the absolute difference
      const diff = Math.abs(num - revNum);

      // Set the result
      setDifference(diff);
    }
  }

  return (
    <div className="App">
      <div>
        Number: <input value={number} onChange={handleInput} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Result: {difference}</div>
    </div>
  );
}
