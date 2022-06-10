import React, { useEffect, useState } from "react";

function Menu({ items }) {
  return (
    <div className="container">
      {items.map((item) => {
        const { id, title, category, price, img, desc } = item;
        return (
          <div key={id} className="menu">
            <img src={img} alt={title} />
            <div>
              <header>
                <h2>{title}</h2>
                <p>{price}</p>
              </header>
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
