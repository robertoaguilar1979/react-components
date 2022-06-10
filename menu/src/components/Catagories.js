import React, { useState, useEffect } from "react";
import Data from "../data/data";

function Catagories({ filterFunction, setInformation }) {
  return (
    <div>
      <button onClick={setInformation}> all </button>
      <button onClick={() => filterFunction("breakfast")}> breatfast </button>
      <button onClick={() => filterFunction("lunch")}> lunch</button>
      <button onClick={() => filterFunction("shakes")}> shakes </button>
    </div>
  );
}

export default Catagories;
