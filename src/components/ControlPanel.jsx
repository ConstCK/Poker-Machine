import React, { useState, useEffect } from "react";
import "../styles/ControlPanel.css";
import store from "../store/store";
import go from "../utils/go";
import winControl from "../utils/winControl";

function StakePanel() {
  const [currentBet, setCurrentBet] = useState(store.getState().bet);
  const [currentWin, setCurrentWin] = useState(store.getState().win);
  const [currentBank, setCurrentBank] = useState(store.getState().bank);
  const [currentStage, setCurrentStage] = useState(store.getState().stage);

  useEffect(() => {
    if (currentStage == "start") {
      store.dispatch({
        type: "SET_WIN",
        payload: {
          data: 0,
        },
      });
      store.dispatch({
        type: "CHANGE_STATUS",
        payload: {
          data: false,
        },
      });
      setCurrentWin(store.getState().win);
    }
    if (currentStage == "final") {
      winControl(store.getState().finalHand);
      setCurrentWin(store.getState().win);
    }
    if (currentStage == "start" && currentBank == 0) {
      store.dispatch({
        type: "CHANGE_STAGE",
        payload: {
          data: "gameOver",
        },
      });
      setCurrentStage(store.getState().stage);
    } else if (currentBet > currentBank) {
      store.dispatch({
        type: "LAST_BET",
      });
      setCurrentBet(store.getState().bet);
    }
  }, [currentStage]);

  function handleHold(event) {
    if (currentStage != "start" && currentStage != "final") {
      store.dispatch({
        type: "HOLD_CARD",
        payload: { index: event.target.value },
      });
    }
  }

  function decreaseBet() {
    if (currentStage == "start") {
      store.dispatch({ type: "DECREASE_BET" });
      setCurrentBet(store.getState().bet);
    }
  }

  function increaseBet() {
    if (currentStage == "start") {
      store.dispatch({ type: "INCREASE_BET" });
      setCurrentBet(store.getState().bet);
    }
  }

  store.subscribe(() => {
    setCurrentBank(store.getState().bank);
    setCurrentStage(store.getState().stage);
  });

  return (
    <>
      <div className="control">
        <button onClick={handleHold} className="hold-btn" value={0}>
          Hold
        </button>
        <button onClick={handleHold} className="hold-btn" value={1}>
          Hold
        </button>
        <button onClick={handleHold} className="hold-btn" value={2}>
          Hold
        </button>
        <button onClick={handleHold} className="hold-btn" value={3}>
          Hold
        </button>
        <button onClick={handleHold} className="hold-btn" value={4}>
          Hold
        </button>
      </div>
      <div className="main-panel">
        <div className="bank">
          <h4 className="title">Bank</h4>
          <div className="bank-screen">{currentBank}</div>
        </div>
        <div className="win">
          <h4 className="title">Win</h4>
          <div className="win-screen">{currentWin}</div>
        </div>

        <div className="stakes">
          <button onClick={decreaseBet} className="stake-btn decrease">
            -
          </button>
          <button onClick={increaseBet} className="stake-btn increase">
            +
          </button>
          <div className="stake">{currentBet}</div>
        </div>
        <button onClick={go} className="play-btn">
          Go
        </button>
      </div>
    </>
  );
}

export default StakePanel;
