import { config, berry } from "./gameData.js";
import { canvas } from "./canvas.js";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const randomPositionBerry = () => {
  berry.x = getRandomInt(0, canvas.width / config.sizeCell) * config.sizeCell;
  berry.y = getRandomInt(0, canvas.height / config.sizeCell) * config.sizeCell;
};

export default randomPositionBerry;
