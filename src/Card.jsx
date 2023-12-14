import React, { useState,useEffect } from "react";
import "./styles.css";

function Card({card, setOpenCards, openCards, shouldFlipBack, disabledCards}) {
  const [isFlipped, setFlipped] = useState(false);
 
  function flipCard() {
    if (!disabledCards.includes(card.type)) {
    setFlipped(!isFlipped);
    setOpenCards(()=> [...openCards, card.type]);
    }
  }
  useEffect(() => {
    // om listan inte innehåller disabled cards ska den flippas tillbaka
    if (shouldFlipBack) {
      setTimeout(() => {
        setFlipped(false);
      }, 500); // Adjust the delay as needed
    }
  }, [shouldFlipBack]);

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