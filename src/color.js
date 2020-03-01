// color.js

import { darken, lighten } from "polished";

import { randomInt } from "./number";

// return number tuple representing rbg color
export const randomColor = () => [
  randomInt(0, 256),
  randomInt(0, 256),
  randomInt(0, 256)
];

// return random hex color (#aa66ff)
export const randomHexColor = () =>
  "#" +
  randomColor()
    .map(x => x.toString(16))
    .join("");

// return random color string (rbg(143, 168, 245))
export const randomRbgColor = () => `rgb(${randomColor().join(", ")})`;

// return darkened color by random amount
export const darkenRandomly = color => darken(Math.random(), color);

// return lightened color by random amount
export const lightenRandomly = color => lighten(Math.random(), color);
