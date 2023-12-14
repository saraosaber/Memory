
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
      setOpenCards([]);
    }
  }, [openCards]);

  function checkIfMatch() {  
    if (openCards[0] === openCards[1]) {
      console.log("match");
      setDisabledCards(()=> [...disabledCards, openCards]);
      setShouldFlipBack(false);

    } else {
        console.log("inte match");
        setTimeout(() => {
          console.log(disabledCards);
          //problemet är att alla kort som innan varit matchade också flippas tillbaka=> setshouldflipback kanske ska vara en lista med kort istälelt
          setShouldFlipBack(true);
        }, 1000); 
    }
  setShouldFlipBack(false);
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