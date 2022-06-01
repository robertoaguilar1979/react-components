import React, { useState, useEffect } from "react";

const Tour = ({ image, info, name, price }) => {
  const [readmore, setReadmore] = useState(false);

  return (
    <div className="item">
      <img src={image} alt={name} />
      <div className="inside">
        <h2>{name}</h2>
        <p>${price}</p>
        <div>
          <p>
            {readmore ? info : `${info.substring(0, 200)}`}

            <button className="show" onClick={() => setReadmore(!readmore)}>
              {readmore ? "show less" : "show more"}
            </button>
          </p>
          <button>not interested</button>
        </div>
      </div>
    </div>
  );
};

export default Tour;
