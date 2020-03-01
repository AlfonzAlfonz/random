// number.js

// return random whole number in the range
export const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

// return random number in the range with decimal preccision
export const randomFloat = (min, max, prec = 2) =>
  randomInt(min * Math.pow(10, prec), max * Math.pow(10, prec)) /
  Math.pow(10, prec);
