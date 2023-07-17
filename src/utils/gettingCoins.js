import store from "../store/store";

function getPrize(setterWin, setterBank, sound) {
  let prizePot = store.getState().win;

  setInterval(() => {
    if (prizePot > 0) {
      prizePot -= 1;
      setterWin(prizePot);
      setterBank(store.getState().bank);
      store.dispatch({
        type: "GET_WIN",
        payload: { data: 1 },
      });
      store.dispatch({
        type: "SET_WIN",
        payload: { data: prizePot },
      });
      sound();
    }
  }, 100);
  setterBank(store.getState().bank);
}

export default getPrize;
