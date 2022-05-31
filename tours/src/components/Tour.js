import React, { useEffect } from "react";

const Tour = ({ image, info, name, price }) => {
  return (
    <div className="item">
      <img src={image} alt={name} />
      <div className="inside">
        <h2>{name}</h2>
        <p>${price}</p>
        <div>
          <p>{info}</p>
          <button>not interested</button>
        </div>
      </div>
    </div>
  );
};

export default Tour;
