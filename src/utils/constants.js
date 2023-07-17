import Spades from "../assets/images/Spades.png";
import Clubs from "../assets/images/Clubs.png";
import Diamonds from "../assets/images/Diamonds.png";
import Hearts from "../assets/images/Hearts.png";
import Star from "../assets/images/Star.png";
const CARDS = [
  ["2", 1, 2],
  ["3", 1, 3],
  ["4", 1, 4],
  ["5", 1, 5],
  ["6", 1, 6],
  ["7", 1, 7],
  ["8", 1, 8],
  ["9", 1, 9],
  ["10", 1, 10],
  ["J", 1, 11],
  ["Q", 1, 12],
  ["K", 1, 13],
  ["A", 1, 1],
  ["2", 2, 2],
  ["3", 2, 3],
  ["4", 2, 4],
  ["5", 2, 5],
  ["6", 2, 6],
  ["7", 2, 7],
  ["8", 2, 8],
  ["9", 2, 9],
  ["10", 2, 10],
  ["J", 2, 11],
  ["Q", 2, 12],
  ["K", 2, 13],
  ["A", 2, 1],
  ["2", 3, 2],
  ["3", 3, 3],
  ["4", 3, 4],
  ["5", 3, 5],
  ["6", 3, 6],
  ["7", 3, 7],
  ["8", 3, 8],
  ["9", 3, 9],
  ["10", 3, 10],
  ["J", 3, 11],
  ["Q", 3, 12],
  ["K", 3, 13],
  ["A", 3, 1],
  ["2", 4, 2],
  ["3", 4, 3],
  ["4", 4, 4],
  ["5", 4, 5],
  ["6", 4, 6],
  ["7", 4, 7],
  ["8", 4, 8],
  ["9", 4, 9],
  ["10", 4, 10],
  ["J", 4, 11],
  ["Q", 4, 12],
  ["K", 4, 13],
  ["A", 4, 1],
];

const SUITS = {
  1: Spades,
  2: Clubs,
  3: Diamonds,
  4: Hearts,
  5: Star,
};

const BUTTONS = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
};

const dummyHand = [
  ["", 5],
  ["", 5],
  ["", 5],
  ["", 5],
  ["", 5],
];

const STATUS_MESSAGE = {
  start: "Make your bet & go...",
  change: "Select cards",
  loser: "Loser...",
  winner: "Congratulations",
  zero: "Game over!",
};

export { CARDS, SUITS, BUTTONS, dummyHand, STATUS_MESSAGE };
