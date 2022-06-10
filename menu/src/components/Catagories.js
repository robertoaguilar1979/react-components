import React, { useState, useEffect } from "react";
import Data from "../data/data";

function Catagories({ filterFunction, catagories }) {
  return (
    <div>
      {catagories.map((item, index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={() => filterFunction(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default Catagories;
