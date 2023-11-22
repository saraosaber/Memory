
import React , {useEffect, useState} from "react";
import "./styles.css";
import RowOfCards from "./RowOfCards.jsx";
import penguin from "./animals/penguin.png";
import snail from "./animals/snail.png";
import chicken from "./animals/chicken.png";
import raccoon from "./animals/raccoon.png";
import fox from "./animals/fox.png";

function App() {
 
  const [images, setImages] = useState([]);
  //to track the cards that have been flipped by the player
  const [openCards, setOpenCards] = useState([]);

  const imageArray = [
    {type: "penguin", image: penguin},
    {type: "penguin", image: penguin},
    {type: "snail", image: snail},
    {type: "snail", image: snail},
    {type: "chicken", image: chicken},
    {type: "chicken", image: chicken},
    {type: "raccoon", image: raccoon},
    {type: "raccoon", image: raccoon},
    {type: "fox", image: fox},
    {type: "fox", image: fox}
  ];

  useEffect(() => {
    setImages((prevImages) => shuffleImages(prevImages));
  }, []);

  useEffect(() => {
    if (openCards.length === 2) {
      checkIfMatch();
     
    }
  }, [openCards]);
  
  function checkIfMatch() {  
      if (openCards[0] === openCards[1]) {
        console.log("match");
        setOpenCards([]);
      } else {
          console.log("inte match");
          setOpenCards([]);
      }
    console.log(openCards);
  }

  // Fisher-Yates shuffle
  function shuffleImages() {
    let copy = [...imageArray];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
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
        <RowOfCards numColumns={5} halfArray={splitArray()[0]} openCards={openCards} setOpenCards={setOpenCards}/>
        <RowOfCards numColumns={5} halfArray={splitArray()[1]} openCards={openCards} setOpenCards={setOpenCards}/>
    </div>
  )
}
export default App;