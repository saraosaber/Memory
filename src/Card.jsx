import React, { useState,useEffect } from "react";
import "./styles.css";

function Card({card, setOpenCards, openCards, shouldFlipBack, disabledCards}) {
  const [isFlipped, setFlipped] = useState(false);

  useEffect( () => {
    // om listan disabledcards inte innehåller kortets typ ska kortet flippas tillbaka raccoon etc
    async function flipBack(){
      if (!disabledCards.includes(card.type)) {
        setTimeout(() => {
          setFlipped(false);
        }, 500);
      }
    }
    flipBack();
  }, [shouldFlipBack]); //denna flippar kort som ej ska flippas om den väljs snabbt nog

  function flipCard() {
    if (!disabledCards.includes(card.type) && openCards.length < 2) {
      setFlipped(!isFlipped);
      setOpenCards(()=> [...openCards, card.type]);
    }
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