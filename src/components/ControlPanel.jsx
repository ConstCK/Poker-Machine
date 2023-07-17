import React, { useState, useEffect } from "react";
import { useSound } from "use-sound";
import "../styles/ControlPanel.css";
import increaseBetSound from "../assets/sounds/IncreaseBet.mp3";
import decreaseBetSound from "../assets/sounds/DecreaseBet.mp3";
import goSound from "../assets/sounds/GoSound.mp3";
import holdSound from "../assets/sounds/ButtonSound.mp3";
import WinSound from "../assets/sounds/WinSound.mp3";
import LostSound from "../assets/sounds/LostSound.mp3";
import LostGameSound from "../assets/sounds/LostGameSound.mp3";
import CoinSound from "../assets/sounds/CoinSound.mp3";
import CardsShuffling from "../assets/sounds/CardsShuffling.mp3";
import store from "../store/store";
import go from "../utils/go";
import winControl from "../utils/winControl";
import gettingCoins from "../utils/gettingCoins";

function StakePanel() {
  const [currentBet, setCurrentBet] = useState(store.getState().bet);
  const [currentWin, setCurrentWin] = useState(store.getState().win);
  const [currentBank, setCurrentBank] = useState(store.getState().bank);
  const [currentStage, setCurrentStage] = useState(store.getState().stage);
  const [increaseBetSoundEffect] = useSound(increaseBetSound);
  const [decreaseBetSoundEffect] = useSound(decreaseBetSound);
  const [goSoundEffect] = useSound(goSound);
  const [holdSoundEffect] = useSound(holdSound);
  const [winSoundEffect] = useSound(WinSound);
  const [lostSoundEffect] = useSound(LostSound);
  const [lostGameSoundEffect] = useSound(LostGameSound);
  const [coinSoundEffect] = useSound(CoinSound);
  const [CardsShufflingEffect] = useSound(CardsShuffling);

  store.subscribe(() => {
    setCurrentWin(store.getState().win);
    setCurrentBank(store.getState().bank);
    setCurrentStage(store.getState().stage);
  });

  useEffect(() => {
    if (currentStage == "final") {
      winControl(store.getState().finalHand);
      setCurrentWin(store.getState().win);
      if (!store.getState().isWinner) {
        lostSoundEffect();
        if (currentBank === 0) {
          store.dispatch({
            type: "CHANGE_STAGE",
            payload: {
              data: "gameOver",
            },
          });
          lostGameSoundEffect();
          setCurrentStage(store.getState().stage);
        }
      } else {
        winSoundEffect();
        gettingCoins(setCurrentWin, setCurrentBank, coinSoundEffect);
      }
    }
    if (currentStage == "start") {
      store.dispatch({
        type: "CHANGE_STATUS",
        payload: {
          data: false,
        },
      });
      CardsShufflingEffect();
      if (currentBet > currentBank) {
        setCurrentBet(currentBank);
        store.dispatch({
          type: "LAST_BET",
          payload: {
            data: currentBank,
          },
        });
      }
    }
  }, [currentStage]);

  function handleHold(event) {
    if (currentStage != "start" && currentStage != "final") {
      store.dispatch({
        type: "HOLD_CARD",
        payload: { index: event.target.value },
      });
    }
    holdSoundEffect();
  }

  function decreaseBet() {
    if (currentStage == "start") {
      store.dispatch({ type: "DECREASE_BET" });
      setCurrentBet(store.getState().bet);
      decreaseBetSoundEffect();
    }
  }

  function increaseBet() {
    if (currentStage == "start") {
      store.dispatch({ type: "INCREASE_BET" });
      setCurrentBet(store.getState().bet);
      increaseBetSoundEffect();
    }
  }
  function goHandle() {
    go();
    goSoundEffect();
  }

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
        <button onClick={goHandle} className="play-btn">
          Go
        </button>
      </div>
    </>
  );
}

export default StakePanel;
