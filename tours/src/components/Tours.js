import React from "react";
import Tour from "./Tour";

const Tours = ({ items }) => {
  return (
    <div>
      <h1 className="title">tours component</h1>

      <div className="items">
        {items.map((item) => {
          return <Tour key={item.key} {...item}></Tour>;
        })}
      </div>
    </div>
  );
};

export default Tours;
