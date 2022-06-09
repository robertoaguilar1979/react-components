import React, { useEffect, useState } from "react";

function Menu({ items }) {
  return (
    <div>
      {items.map((item) => {
        const { id, title, category, price, img, desc } = item;
        return (
          <div key={id}>
            <img src={img} alt={title} />
            <div>
              <h2>{title}</h2>
              <p>{price}</p>
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
