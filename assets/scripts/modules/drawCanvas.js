import { context } from "./canvas.js";
import { config, colors, snake, berry } from "./gameData.js";
import collisionBorder from "./collisionBorder.js";
import { incScore } from "./score.js";
import randomPositionBerry from "./randomPositionBerry.js";
import refreshGame from "./refreshGame.js";

const drawBerry = () => {
  context.beginPath();
  context.fillStyle = colors.berry;
  context.arc(
    berry.x + config.sizeCell / 2,
    berry.y + config.sizeCell / 2,
    config.sizeBerry,
    0,
    2 * Math.PI
  );
  context.fill();
};

const drawSnake = () => {
  snake.x += snake.dx;
  snake.y += snake.dy;

  collisionBorder();

  snake.tails.unshift({ x: snake.x, y: snake.y });
  if (snake.tails.length > snake.maxTails) {
    snake.tails.pop();
  }

  snake.tails.forEach((el, index) => {
    if (index == 0) {
      context.fillStyle = colors.head;
    } else {
      if ((index + 1) % 2 === 0) {
        context.fillStyle = colors.tailEven;
      } else {
        context.fillStyle = colors.tailOdd;
      }
    }
    context.fillRect(el.x, el.y, config.sizeCell, config.sizeCell);

    if (el.x === berry.x && el.y === berry.y) {
      snake.maxTails++;
      incScore();
      randomPositionBerry();
    }

    for (let i = index + 1; i < snake.tails.length; i++) {
      if (el.x == snake.tails[i].x && el.y == snake.tails[i].y) {
        window.navigator.vibrate(100);
        refreshGame();
      }
    }
  });
};

export { drawBerry, drawSnake };
