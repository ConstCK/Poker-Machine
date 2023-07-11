import React, { useState, useEffect } from "react";
import store from "../store/store";
import { SUITS } from "../utils/constants";
import "../styles/Card.css";

function Card(props) {
  const [heldCards, setHeldCards] = useState(store.getState().cardsHeld);
  const [renderer, setRenderer] = useState(false);
  const [currentStage, setCurrentStage] = useState(store.getState().stage);
  const value = props.value;
  const suit = props.suit;
  const ind = props.ind;

  store.subscribe(() => {
    setHeldCards(store.getState().cardsHeld);
    setCurrentStage(store.getState().stage);
    setRenderer(!renderer);
  });

  return (
    <>
      <div className={`card ${ind} ${heldCards[ind]}`}>
        <h1 className="top value">{value}</h1>
        <img className="suit" src={SUITS[suit]}></img>
        <h1 className="bottom value">{value}</h1>
      </div>
    </>
  );
}

export default Card;
