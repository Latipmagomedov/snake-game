import { getElement, hideElement, showElement } from "./shortFunctions.js";
import { config, snake } from "./gameData.js";
import { drawScore, clearScore } from "./score.js";
import randomPositionBerry from "./randomPositionBerry.js";

const refreshGame = () => {
  showElement(".refresh-menu");
};

const refresh = () => {
  hideElement(".refresh-menu");
  clearScore();
  drawScore();

  snake.x = 16;
  snake.y = 16;
  snake.tails = [];
  snake.maxTails = 5;
  snake.dx = config.sizeCell;
  snake.dy = 0;

  randomPositionBerry();
};

getElement(".refresh-menu__btn_play").addEventListener("click", refresh);

export default refreshGame;
