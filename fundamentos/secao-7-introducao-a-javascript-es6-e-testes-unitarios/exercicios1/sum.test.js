// sum.test.js
const sum = require('./sum');
describe('Function sum ok', () => {
    it('sums two values', () => {
        expect(sum(4, 5)).toBe(9);
    });
})