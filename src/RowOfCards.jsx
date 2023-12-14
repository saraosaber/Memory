import React from "react";
import "./styles.css";
import Card from "./Card.jsx";

function RowOfCards({ numColumns, halfArray, setOpenCards, openCards, shouldFlipBack, disabledCards }) {
  
  // creates an array with length of numColumns, where each element is a div with index as key.
  const columns = Array.from({ length: numColumns }, (_, index) => {
    const card = halfArray[index];
    console.log(shouldFlipBack)
    
    return (
      <div key={index} className="column">
        {card !== undefined ? (
          <Card
            card={card}
            openCards={openCards}
            setOpenCards={setOpenCards}
            shouldFlipBack={!disabledCards.includes(card.type) ? shouldFlipBack : false }
            disabledCards={disabledCards}
          />
        ) : <></>}
      </div>
    );
  });

  return <div className="row">{columns}</div>;
}

export default RowOfCards;
