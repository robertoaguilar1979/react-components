import React, { useState } from "react";
import "./counter.css";

function Counter({ add, minus, cancel }) {
  // this is the useState hook
  const [counter, setCounter] = useState(0);

  // a different way to invoke the function in the event handler
  let plus = () => setCounter((counter) => counter + 1);

  return (
    <div>
      <h2>Counter </h2>
      <h2
        className={counter > 0 ? "positive" : counter < 0 ? "negative" : null}
      >
        {counter}
      </h2>
      <button onClick={plus}>{add}</button>
      <button onClick={() => setCounter(0)}>{cancel}</button>
      <button onClick={() => setCounter((counter) => counter - 1)}>
        {minus}
      </button>
    </div>
  );
}

export default Counter;
