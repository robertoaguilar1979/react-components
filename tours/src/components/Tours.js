import React from "react";
import Tour from "./Tour";

const Tours = ({ items, removeTours }) => {
  return (
    <div>
      <h1 className="title">tours component</h1>

      <div className="items">
        {items.map((item) => {
          return (
            <Tour key={item.id} {...item} removeTours={removeTours}></Tour>
          );
        })}
      </div>
    </div>
  );
};

export default Tours;
