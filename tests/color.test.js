const { randomColor, randomHexColor, randomRbgColor } = require("../lib");

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5125;
global.Math = mockMath;

test("test randomColor", () => {
  expect(randomColor()).toEqual([131, 131, 131]);
});

test("test randomHexColor", () => {
  expect(randomHexColor()).toEqual("#838383");
});

test("test randomRbgColor", () => {
  expect(randomRbgColor()).toEqual("rgb(131, 131, 131)");
});
