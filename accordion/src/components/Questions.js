import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function Questions({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="container">
      <div className="question">
        <h2>{title}</h2>
        <button
          className={showInfo ? "red" : "green"}
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>

      {showInfo && <p>{info}</p>}
    </div>
  );
}

export default Questions;
