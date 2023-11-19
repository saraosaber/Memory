
import React , {useEffect, useState} from "react";
import "./styles.css";
import RowOfCards from "./RowOfCards.jsx";
import penguin from "./animals/penguin.png";
import snail from "./animals/snail.png";
import chicken from "./animals/chicken.png";
import raccoon from "./animals/raccoon.png";
import fox from "./animals/fox.png";

function App() {
 
  const [images, setImages] = useState([penguin, penguin, snail, snail, chicken, chicken, raccoon, raccoon, fox, fox]);

  useEffect(() => {
    setImages((prevImages) => shuffleImages(prevImages));
  }, []);

  // Fisher-Yates shuffle
  function shuffleImages() {
    let copy = [...images];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    console.log(copy);
    return copy;
  }
  function splitArray() {
    const midIndex = Math.ceil(images.length / 2);
    const firstHalf = images.slice(0, midIndex);
    const secondHalf = images.slice(midIndex);
  
    return [firstHalf, secondHalf];
  }
  return (
    <div>
      <h1 className="title">MEMORY game</h1>
        <RowOfCards numColumns={5} halfArray={splitArray()[0]}/>
        <RowOfCards numColumns={5} halfArray={splitArray()[1]}/>
    </div>
  )
}

export default App;
