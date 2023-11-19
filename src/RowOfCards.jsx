import React from "react";
import "./styles.css"
import Card from "./Card.jsx"

function RowOfCards() {
  
  return (
    <div className="row">
      <div className="column">
        <Card />
      </div>
      <div className="column">
        <Card />
      </div>
      <div className="column">
        <Card />
      </div>
      <div className="column">
        <Card />
      </div>
      <div className="column">
        <Card />
      </div>
    </div>
  )
}
export default RowOfCards;
