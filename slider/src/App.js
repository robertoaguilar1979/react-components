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
      <div className="section-center">
        {people.map((person, index) => {
          const { id, image, name, quote, title } = person;

          return (
            <div key={id} className="article">
              <img className="user-img" src={image} alt={name} />
              <h2>{name}</h2>
              <h3>{title}</h3>
              <p>{quote}</p>
            </div>
          );
        })}
        <button className="prev">
          <FiChevronLeft />
        </button>
        <button className="next">
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default App;
