import store from "../store/store";

function winControl(cards) {
  const values = [];
  const suits = [];
  const prices = [];
  values.push(cards[0][0], cards[1][0], cards[2][0], cards[3][0], cards[4][0]);
  suits.push(cards[0][1], cards[1][1], cards[2][1], cards[3][1], cards[4][1]);
  prices.push(cards[0][2], cards[1][2], cards[2][2], cards[3][2], cards[4][2]);
  prices.sort(function (a, b) {
    return a - b;
  });

  if (new Set(suits).size == 1) {
    if (
      values.includes("A") &&
      values.includes("K") &&
      values.includes("Q") &&
      values.includes("J") &&
      values.includes("10")
    ) {
      store.dispatch({
        type: "SET_WIN",
        payload: { data: 100 },
      });
      store.dispatch({
        type: "CHANGE_STATUS",
        payload: {
          data: "Royal Flush",
        },
      });
    } else if (
      prices[0] + 1 == prices[1] &&
      prices[1] + 1 == prices[2] &&
      prices[2] + 1 == prices[3] &&
      prices[3] + 1 == prices[4]
    ) {
      store.dispatch({
        type: "SET_WIN",
        payload: { data: 80 },
      });
      store.dispatch({
        type: "CHANGE_STATUS",
        payload: {
          data: "Straight Flush",
        },
      });
    } else {
      store.dispatch({
        type: "SET_WIN",
        payload: { data: 8 },
      });
      store.dispatch({
        type: "CHANGE_STATUS",
        payload: {
          data: "Flush",
        },
      });
    }
  } else {
    if (
      prices[0] + 1 == prices[1] &&
      prices[1] + 1 == prices[2] &&
      prices[2] + 1 == prices[3] &&
      prices[3] + 1 == prices[4]
    ) {
      store.dispatch(
        {
          type: "SET_WIN",
          payload: { data: 7 },
        },
        { type: "CHANGE_STATUS" }
      );
      store.dispatch({
        type: "CHANGE_STATUS",
        payload: {
          data: "straight",
        },
      });
    } else {
      const counter = {};
      let result = 0;
      values.forEach(function (item) {
        counter[item] = counter[item] + 1 || 1;
      });
      for (let key in counter) {
        if (counter[key] == 4) {
          result += 40;
        } else if (counter[key] == 3) {
          result += 3;
        } else if (counter[key] == 2) {
          result += 2;
        }
      }
      switch (result) {
        case 40:
          store.dispatch({
            type: "SET_WIN",
            payload: { data: 40 },
          });
          store.dispatch({
            type: "CHANGE_STATUS",
            payload: {
              data: "4 of a Kind",
            },
          });
          break;
        case 5:
          store.dispatch({
            type: "SET_WIN",
            payload: { data: 10 },
          });
          store.dispatch({
            type: "CHANGE_STATUS",
            payload: {
              data: "Full House",
            },
          });
          break;
        case 3:
          store.dispatch({
            type: "SET_WIN",
            payload: { data: 3 },
          });
          store.dispatch({
            type: "CHANGE_STATUS",
            payload: {
              data: "3 of a Kind",
            },
          });
          break;
        case 4:
          store.dispatch({
            type: "SET_WIN",
            payload: { data: 2 },
          });
          store.dispatch({
            type: "CHANGE_STATUS",
            payload: {
              data: "2 Pairs",
            },
          });
          break;
      }
    }
  }
  store.dispatch({ type: "GET_WIN" });
}

export default winControl;
