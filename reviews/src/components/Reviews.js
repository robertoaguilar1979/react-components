import React, { useState, useEffect } from "react";
import people from "../data/data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, id, job, image, text } = people[index];

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
          <button>
            <FaChevronLeft />
          </button>
          <button>
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
