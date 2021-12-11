import { drawScore } from "./modules/score.js";
import randomPositionBerry from "./modules/randomPositionBerry.js";
import gameLoop from "./modules/gameLoop.js";
import control from "./modules/gameControl.js";

requestAnimationFrame(gameLoop);
drawScore();
randomPositionBerry();
control();
