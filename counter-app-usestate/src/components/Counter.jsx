import React, { useState } from "react";

function Counter({ add, minus, cancel }) {
  // this is the useState hook
  const [counter, setCounter] = useState(0);
  // a different way to invoke the function in the event handler
  let plus = () => setCounter(counter + 1);

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={plus}>{add}</button>
      <button onClick={() => setCounter(0)}>{cancel}</button>
      <button onClick={() => setCounter(counter - 1)}>{minus}</button>
    </div>
  );
}

export default Counter;
