import store from "../store/store";
import randomHand from "../utils/randomHand";

function go() {
  if (store.getState().stage !== "gameOver") {
    if (store.getState().stage == "start") {
      const allCards = randomHand();
      store.dispatch({
        type: "MAIN_HAND",
        payload: { data: allCards.slice(0, 5) },
      });
      store.dispatch({
        type: "RESERVE_HAND",
        payload: { data: allCards.slice(5, 10) },
      });
      store.dispatch({
        type: "MAKE_BET",
      });
      store.dispatch({
        type: "CHANGE_STAGE",
        payload: { data: "change" },
      });
    } else if (store.getState().stage == "change") {
      let result = [null, null, null, null, null];
      result.map((elem, index) => {
        store.getState().cardsHeld[index]
          ? (result[index] = store.getState().mainHand[index])
          : (result[index] = store.getState().reserveHand[index]);
      });
      store.dispatch({
        type: "FINAL_HAND",
        payload: { data: result },
      });
      store.dispatch({
        type: "CHANGE_STAGE",
        payload: { data: "final" },
      });
    } else if (store.getState().stage == "final") {
      store.dispatch({
        type: "CHANGE_STAGE",
        payload: { data: "start" },
      });
      store.dispatch({
        type: "UNHOLD_CARDS",
      });
    }
  }
}

export default go;
