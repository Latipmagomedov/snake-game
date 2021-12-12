import { getElement, hideElement } from "./shortFunctions.js";
import gameLoop from "./gameLoop.js";

const menu = () => {
  const playBtn = getElement(".start-menu__btn_play");

  const startGame = () => {
    hideElement('.start-menu', 'top');
    requestAnimationFrame(gameLoop);
  };

  playBtn.addEventListener("click", startGame);
};
menu();

export default menu;
