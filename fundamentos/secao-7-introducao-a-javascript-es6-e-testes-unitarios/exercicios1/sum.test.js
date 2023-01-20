// sum.test.js
const sum = require('./sum');
test('sums two values', () => {
  expect(sum(4, 5)).toBe(9);
});