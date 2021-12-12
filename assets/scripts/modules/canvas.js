import { getElement } from "./shortFunctions.js";

const canvas = getElement(".game__canvas"),
  context = canvas.getContext("2d");

export { canvas, context };
