import React , {useEffect, useState} from "react";
import "./styles.css";
import Card from "./Card.jsx";

function RowOfCards({ numColumns, halfArray }) {
 
  //creates an array with length of numColumns, where each element is a div with index as key.
  const columns = Array.from({ length: numColumns }, (_, index) => {
    return (
      <div key={index} className="column">
        <Card image={halfArray[index]} />
      </div>
    );
  });

  return <div className="row">{columns}</div>;
}

export default RowOfCards;
