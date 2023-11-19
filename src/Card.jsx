import React, { useState } from "react";
import "./styles.css";

function Card() {
    const [isFlipped, setFlipped] = useState(false);

    function handleClick () {
        setFlipped(!isFlipped);
        console.log(isFlipped);
    }

    return (
        <div className="card" onClick={handleClick}>
            <div className={isFlipped ? "card-inner flipped" : "card-inner"}>
                <div className="card-front"></div>
                <div className="card-back"></div>
            </div>
        </div>
    );
}
export default Card;