
import React from "react";
import "./styles.css";
import RowOfCards from "./RowOfCards.jsx";

function App() {

  return (
    <div>
      <h1 className="title">MEMORY game</h1>
        <RowOfCards/>
        <RowOfCards/>
    </div>
  )
}

export default App;
