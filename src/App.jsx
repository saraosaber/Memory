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
  const [openCards, setOpenCards] = useState([]);
  const [shouldFlipBack, setShouldFlipBack] = useState(false);
  const [disabledCards, setDisabledCards] = useState([]);  
  const imageArray = [
    {type: "penguin", image: penguin, id: 1},
    {type: "penguin", image: penguin, id: 2},
    {type: "snail", image: snail, id: 1},
    {type: "snail", image: snail, id: 2},
    {type: "chicken", image: chicken, id: 1},
    {type: "chicken", image: chicken, id: 2},
    {type: "raccoon", image: raccoon, id: 1},
    {type: "raccoon", image: raccoon, id: 2},
    {type: "fox", image: fox, id: 1},
    {type: "fox", image: fox, id: 2}
  ];

  useEffect(() => {
    setImages((prevImages) => shuffleImages(prevImages));
  }, []);
  
  useEffect(() => {
    if (openCards.length === 2) {
      checkIfMatch();
      console.log(openCards[0] + openCards[1])
    }
    console.log(openCards)
  }, [openCards]);

  useEffect(() => {
    if (disabledCards.length === imageArray.length/2) {
      setGameWon(true);
      console.log("end game");
    }
  }, [disabledCards]);

  function checkIfMatch() {  
    if (openCards[0] === openCards[1] && openCards[0].id != openCards[1].id) {
      console.log("match");
      setDisabledCards(()=> [...disabledCards, openCards[0]]);
      //setShouldFlipBack(false);
      setShouldFlipBack(false);
      setOpenCards([]);

    } else {
        console.log("not match");
        setTimeout(() => {
        setShouldFlipBack(true);
        }, 1000); 
        setShouldFlipBack(false);
        setTimeout(() => {
        setOpenCards([]);        
        }, 1200)
    }
  }

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
        <RowOfCards 
          numColumns={5} 
          halfArray={splitArray()[0]} 
          openCards={openCards} 
          setOpenCards={setOpenCards} 
          shouldFlipBack={shouldFlipBack}
          disabledCards={disabledCards}/>
        <RowOfCards 
          numColumns={5} 
          halfArray={splitArray()[1]} 
          openCards={openCards} 
          setOpenCards={setOpenCards} 
          shouldFlipBack={shouldFlipBack}
          disabledCards={disabledCards}/>
    </div>
  )
}
export default App;