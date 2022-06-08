import "./App.css";
import data from "./data/data";
import Questions from "./components/Questions";
import React, { useState, useEffect } from "react";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="App">
      <h1>Accordion components</h1>
      {questions.map((data) => {
        return <Questions key={data.id} {...data} />;
      })}
    </div>
  );
}

export default App;
