import React, { useEffect, useState } from "react";
import "../styles/StatusPanel.css";
import store from "../store/store";
import { STATUS_MESSAGE } from "../utils/constants";

function StatusPanel() {
  const [winnerStatus, setWinnerStatus] = useState(store.getState().isWinner);
  const [currentStage, setCurrentStage] = useState(store.getState().stage);

  store.subscribe(() => {
    setCurrentStage(store.getState().stage);
    setWinnerStatus(store.getState().isWinner);
  });
  useEffect(() => {
    setWinnerStatus(store.getState().isWinner);
  }, [winnerStatus, currentStage]);

  if (currentStage == "start") {
    return (
      <>
        <div className="status">
          <h1>{STATUS_MESSAGE.start}</h1>
        </div>
      </>
    );
  } else if (currentStage == "change") {
    return (
      <div className="status">
        <h1>{STATUS_MESSAGE.change}</h1>
      </div>
    );
  } else {
    if (winnerStatus) {
      return (
        <div className="status">
          <marquee scrollamount="50" height="100%">
            <h1>{store.getState().isWinner}</h1>
          </marquee>
        </div>
      );
    }
    return (
      <div className="status">
        <h1>{STATUS_MESSAGE.loser}</h1>
      </div>
    );
  }
}

export default StatusPanel;
