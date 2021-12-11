import { config, snake } from "./gameData.js";
import { drawScore, clearScore } from "./score.js";
import randomPositionBerry from "./randomPositionBerry.js";

const refreshGame = () => {
  clearScore();
  drawScore();

  snake.x = 160;
  snake.y = 160;
  snake.tails = [];
  snake.maxTails = 5;
  snake.dx = config.sizeCell;
  snake.dy = 0;

  randomPositionBerry();
};

export default refreshGame;
