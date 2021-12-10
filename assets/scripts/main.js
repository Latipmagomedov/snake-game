const scoreBlock = document.querySelector(".game__score-count");
const canvas = document.querySelector(".game__canvas");
const context = canvas.getContext("2d");
let score = 0;

const config = {
  step: 0,
  maxStep: 6,
  sizeCell: 16,
  sizeBerry: 16 / 4,
};

const snake = {
  x: 16,
  y: 16,
  dx: config.sizeCell,
  dy: 0,
  tails: [],
  maxTails: 3,
  headColor: "#FA0556",
  tailColor: "#0083A0",
};

const berry = {
  x: 0,
  y: 0,
  color: "#0083A0",
};

const gameLoop = () => {
  requestAnimationFrame(gameLoop);
  if (++config.step < config.maxStep) {
    return;
  }

  config.step = 0;
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawBerry();
  drawSnake();
};
requestAnimationFrame(gameLoop);

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
      context.fillStyle = snake.headColor;
    } else {
      context.fillStyle = snake.tailColor;
    }
    context.fillRect(el.x, el.y, config.sizeCell, config.sizeCell);

    if (el.x === berry.x && el.y === berry.y) {
      snake.maxTails++;
      incScore();
      randomPositionBerry();
    }

    for (let i = index + 1; i < snake.tails.length; i++) {
      if (el.x == snake.tails[i].x && el.y == snake.tails[i].y) {
        refreshGame();
      }
    }
  });
};

const collisionBorder = () => {
  if (snake.x < 0) {
    snake.x = canvas.width - config.sizeCell;
  } else if (snake.x >= canvas.width) {
    snake.x = 0;
  }

  if (snake.y < 0) {
    snake.y = canvas.height - config.sizeCell;
  } else if (snake.y >= canvas.height) {
    snake.y = 0;
  }
};

const refreshGame = () => {
  score = 0;
  drawScore();

  snake.x = 160;
  snake.y = 160;
  snake.tails = [];
  snake.maxTails = 3;
  snake.dx = config.sizeCell;
  snake.dy = 0;

  randomPositionBerry();
};

const drawBerry = () => {
  context.beginPath();
  context.fillStyle = berry.color;
  context.arc(
    berry.x + config.sizeCell / 2,
    berry.y + config.sizeCell / 2,
    config.sizeBerry,
    0,
    2 * Math.PI
  );
  context.fill();
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const randomPositionBerry = () => {
  berry.x = getRandomInt(0, canvas.width / config.sizeCell) * config.sizeCell;
  berry.y = getRandomInt(0, canvas.height / config.sizeCell) * config.sizeCell;
};

const incScore = () => {
  score++;
  drawScore();
};

const drawScore = () => {
  scoreBlock.textContent = score;
};

drawScore();
randomPositionBerry();

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
