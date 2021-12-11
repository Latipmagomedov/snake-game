import { config } from "./gameData.js";
import { canvas, context } from "./canvas.js";
import { drawBerry, drawSnake } from "./drawCanvas.js";

const gameLoop = () => {
  requestAnimationFrame(gameLoop);

  if (++config.step < config.maxStep) return;

  config.step = 0;
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawBerry();
  drawSnake();
};

export default gameLoop;
