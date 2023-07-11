import { CARDS } from "./constants";

function randomHand() {
  const result = [];
  while (result.length < 10) {
    let card = CARDS[Math.floor(Math.random() * 52)];
    if (!result.includes(card)) {
      result.push(card);
    }
  }
  return result;
}
export default randomHand;
