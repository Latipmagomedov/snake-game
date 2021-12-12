import { getElement } from "./shortFunctions.js";

const colors = {
  canvasBg: "#000",
  canvasBorder: "#333",
  cell: "121212",
  head: "#f59133",
  tailEven: "#FFF",
  tailOdd: "#BCBCBC",
  berry: "#0083a0",
};

const config = {
  step: 0,
  maxStep: 8,
  sizeCell: 16,
  sizeBerry: 16 / 3,
};

const snake = {
  x: 16,
  y: 16,
  dx: config.sizeCell,
  dy: 0,
  tails: [],
  maxTails: 5,
};

const berry = {
  x: 0,
  y: 0,
};

const canvasWrapper = getElement(".game__canvas-wrapper");
canvasWrapper.style.backgroundColor = colors.canvasBg;
canvasWrapper.style.borderColor = colors.canvasBorder;
canvasWrapper.style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='1' y='1' width='14' height='14' rx='2' fill='%23${colors.cell}'/%3E%3C/svg%3E%0A")`;

export { config, colors, snake, berry };
