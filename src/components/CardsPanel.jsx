import React, { useState, useEffect } from "react";
import randomHand from "../utils/randomHand";
import "../styles/CardsPanel.css";
import Card from "./Card.jsx";
import store from "../store/store";
import { dummyHand } from "../utils/constants";

function CardsPanel() {
  const [currentStage, setCurrentStage] = useState(store.getState().stage);
  const [currentCards, setCurrentCards] = useState(dummyHand);

  store.subscribe(() => {
    setCurrentStage(store.getState().stage);
  });

  useEffect(() => {
    const allCards = randomHand();
    store.dispatch({
      type: "MAIN_HAND",
      payload: { data: allCards.slice(0, 5) },
    });
    store.dispatch({
      type: "RESERVE_HAND",
      payload: { data: allCards.slice(5, 10) },
    });
    if (currentStage == "final") {
      setCurrentCards(store.getState().finalHand);
    } else if (currentStage == "change") {
      setCurrentCards(store.getState().mainHand);
    } else if (currentStage == "start") {
      setCurrentCards(dummyHand);
    }
  }, [currentStage]);

  return (
    <>
      <div className="desk">
        <Card ind={0} value={currentCards[0][0]} suit={currentCards[0][1]} />
        <Card ind={1} value={currentCards[1][0]} suit={currentCards[1][1]} />
        <Card ind={2} value={currentCards[2][0]} suit={currentCards[2][1]} />
        <Card ind={3} value={currentCards[3][0]} suit={currentCards[3][1]} />
        <Card ind={4} value={currentCards[4][0]} suit={currentCards[4][1]} />
      </div>
    </>
  );
}

export default CardsPanel;
