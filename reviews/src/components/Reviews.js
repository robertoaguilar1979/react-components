import React, { useState, useEffect } from "react";
import people from "../data/data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, id, job, image, text } = people[index];

  let trackIndex = function (number) {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    } else {
      return number;
    }
  };

  let nextPerson = function () {
    setIndex((person) => trackIndex(person + 1));
  };

  let previousPerson = function () {
    setIndex((person) => trackIndex(person - 1));
  };

  return (
    <>
      <h2>review component</h2>

      <article key={id} className="reviews">
        <div className="image-container">
          <img src={image} alt={name} />
          <span className="quote">
            <FaQuoteRight />
          </span>
        </div>
        <div className="text">
          <h3>{name}</h3>
          <p>{job}</p>
          <p>{text}</p>
        </div>
        <div className="btn-container">
          <button onClick={previousPerson}>
            <FaChevronLeft />
          </button>
          <button onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <div>
          <button>random</button>
        </div>
      </article>
    </>
  );
};

export default Review;
