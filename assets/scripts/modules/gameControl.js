import { config, snake } from "./gameData.js";

const control = () => {
  document.addEventListener("keydown", (e) => {
    if (e.code == "KeyW") {
      snake.dy = -config.sizeCell;
      snake.dx = 0;
    } else if (e.code == "KeyA") {
      snake.dx = -config.sizeCell;
      snake.dy = 0;
    } else if (e.code == "KeyS") {
      snake.dy = config.sizeCell;
      snake.dx = 0;
    } else if (e.code == "KeyD") {
      snake.dx = config.sizeCell;
      snake.dy = 0;
    }
  });

  document.addEventListener("click", (e) => {
    const el = e.target;
    const check = (className) => {
      if (el.classList.contains(className) || el.closest(`.${className}`)) {
        return true;
      } else {
        return false;
      }
    };

    if (check("game__control-btn")) {
      window.navigator.vibrate(10);
    }

    if (check("b-top")) {
      snake.dy = -config.sizeCell;
      snake.dx = 0;
    } else if (check("b-left")) {
      snake.dx = -config.sizeCell;
      snake.dy = 0;
    } else if (check("b-bottom")) {
      snake.dy = config.sizeCell;
      snake.dx = 0;
    } else if (check("b-right")) {
      snake.dx = config.sizeCell;
      snake.dy = 0;
    }
  });
};

export default control;
