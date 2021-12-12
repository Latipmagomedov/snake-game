const getElement = (element) => {
  return document.querySelector(element);
};

const getElements = (elements) => {
  return document.querySelector(elements);
};

const hideElement = (element, effect) => {
  if (element) {
    if (effect) {
      getElement(element).classList.add(`hide-${effect}`);
    } else {
      getElement(element).classList.add(`hide`);
    }
  } else {
    console.log("Передайте атрибут элемента");
  }
};

const showElement = (element, effect) => {
  if (element) {
    if (effect) {
      getElement(element).classList.remove(`hide-${effect}`);
    } else {
      getElement(element).classList.remove(`hide`);
    }
  } else {
    console.log("Передайте атрибут элемента");
  }
};

export { getElement, getElements, hideElement, showElement };
