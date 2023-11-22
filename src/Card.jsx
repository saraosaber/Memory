import React, { useState,useEffect } from "react";
import "./styles.css";

function Card({card, setOpenCards, openCards}) {
  const [isFlipped, setFlipped] = useState(false);
 
  function flipCard() {
    setFlipped(!isFlipped);
    setOpenCards(()=> [...openCards, card.type]);
  }

  return (
    <div className="card" onClick={flipCard}>
      <div className={isFlipped ? "card-inner flipped" : "card-inner"}>
        <div className="card-front"></div>
        <div className="card-back">
          {isFlipped && <img src={card.image} alt="card" />}
        </div>
      </div>
    </div>
  );
}

export default Card;