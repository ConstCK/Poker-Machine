let initialState = {
  bet: 1,
  bank: 100,
  win: 0,
  isWinner: false,
  mainHand: [null, null, null, null, null],
  reserveHand: [null, null, null, null, null],
  finalHand: [null, null, null, null, null],
  cardsHeld: [false, false, false, false, false],
  stage: "start",
};

function pokerReducer(state = initialState, action) {
  if (
    action.type == "INCREASE_BET" &&
    state.bet < 5 &&
    state.bet < state.bank
  ) {
    let currentBet = state.bet + 1;
    const newState = { ...state, bet: currentBet };
    return newState;
  }
  if (action.type == "DECREASE_BET" && state.bet > 1) {
    let currentBet = state.bet - 1;
    const newState = { ...state, bet: currentBet };
    return newState;
  }
  if (action.type == "LAST_BET") {
    let currentBet = action.payload.data;
    const newState = { ...state, bet: currentBet };
    return newState;
  }
  if (action.type == "MAKE_BET") {
    let currentBank = state.bank - state.bet;
    const newState = { ...state, bank: currentBank };
    return newState;
  }
  if (action.type == "SET_WIN") {
    let currentWin = action.payload.data;
    const newState = { ...state, win: currentWin };
    return newState;
  }
  if (action.type == "GET_WIN") {
    let currentBank = state.bank + action.payload.data;
    const newState = { ...state, bank: currentBank };
    return newState;
  }
  if (action.type == "CHANGE_STATUS") {
    const newState = { ...state, isWinner: action.payload.data };
    return newState;
  }
  if (action.type == "MAIN_HAND") {
    let currentHand = action.payload.data;
    const newState = { ...state, mainHand: currentHand };
    return newState;
  }
  if (action.type == "RESERVE_HAND") {
    let currentHand = action.payload.data;
    const newState = { ...state, reserveHand: currentHand };
    return newState;
  }
  if (action.type == "FINAL_HAND") {
    let currentHand = action.payload.data;
    const newState = { ...state, finalHand: currentHand };
    return newState;
  }
  if (action.type == "HOLD_CARD") {
    let currentCardIndex = action.payload.index;
    state.cardsHeld[currentCardIndex] = !state.cardsHeld[currentCardIndex];
    const newState = { ...state, cardsHeld: state.cardsHeld };
    return newState;
  }
  if (action.type == "UNHOLD_CARDS") {
    const newState = {
      ...state,
      cardsHeld: [false, false, false, false, false],
    };
    return newState;
  }
  if (action.type == "CHANGE_STAGE") {
    const newState = { ...state, stage: action.payload.data };
    return newState;
  }
  return state;
}

export default pokerReducer;
