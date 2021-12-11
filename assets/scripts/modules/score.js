const scoreBlock = document.querySelector(".game__score-count");
let score = 0;
const incScore = () => {
  score++;
  drawScore();
};

const drawScore = () => {
  scoreBlock.textContent = score;
};

const clearScore = () => {
  score = 0;
};

export { score, incScore, drawScore, clearScore };
