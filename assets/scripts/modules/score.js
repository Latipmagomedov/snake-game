import { getElement } from "./shortFunctions.js";
let score = 0;
const incScore = () => {
  score++;
  drawScore();
};

const drawScore = () => {
  getElement(".game__score-count").textContent = score;
  getElement(".menu__score").textContent = score;
};

const clearScore = () => {
  score = 0;
};

export { score, incScore, drawScore, clearScore };
