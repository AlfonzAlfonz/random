const { randomInt, randomFloat } = require("../lib");

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5125;
global.Math = mockMath;

test("test randomInt", () => {
  expect(randomInt(0, 10)).toBe(5);
  expect(randomInt(0, 20)).toBe(10);
});

test("test randomFloat", () => {
  expect(randomFloat(0, 10)).toBe(5.12);
  expect(randomFloat(0, 10, 3)).toBe(5.125);
  expect(randomFloat(0, 10, 1)).toBe(5.1);
  expect(randomFloat(0, 10, 0)).toBe(5);
});
