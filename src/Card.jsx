import React, { useState } from "react";
import "./styles.css";

function Card({ image }) {
  const [isFlipped, setFlipped] = useState(false);

  function flipCard() {
    setFlipped(!isFlipped);
  }

  return (
    <div className="card" onClick={flipCard}>
      <div className={isFlipped ? "card-inner flipped" : "card-inner"}>
        <div className="card-front"></div>
        <div className="card-back">
          {isFlipped && <img src={image} alt="card" />}
        </div>
      </div>
    </div>
  );
}

export default Card;
