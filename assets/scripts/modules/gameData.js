const colors = {
  head: "#0770EB",
  tailEven: "#FFF",
  tailOdd: "#BCBCBC",
  berry: "#FB10F1",
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

export { config, colors, snake, berry };
