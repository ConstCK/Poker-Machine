import React, { useState } from "react";
import "../styles/InfoPanel.css";
import store from "../store/store";
import CardsPanel from "./CardsPanel.jsx";
import StatusPanel from "./StatusPanel.jsx";

function InfoPanel() {
  const [currentStage, setcurrentStage] = useState(store.getState().stage);
  store.subscribe(() => {
    setcurrentStage(store.getState().stage);
  });
  return (
    <>
      <StatusPanel />
      {currentStage !== "gameOver" ? (
        <CardsPanel />
      ) : (
        <div className=" desk gameOver">
          <h1>You are bankrupt!</h1>
        </div>
      )}
    </>
  );
}

export default InfoPanel;
