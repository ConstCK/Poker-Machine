import { createStore } from "redux";
import pokerReducer from "./reducers";

const store = createStore(pokerReducer);
export default store;
