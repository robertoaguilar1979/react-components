import "./App.css";
import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data/data";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  console.log(people);
  return (
    <div className="App">
      <h1> slider </h1>{" "}
    </div>
  );
}

export default App;
