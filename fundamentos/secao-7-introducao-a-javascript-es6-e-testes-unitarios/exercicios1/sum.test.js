// sum.test.js
const sum = require('./sum');
describe('Function sum ok', () => {
    it('deve retornar o resultado da soma', () => {
        expect(sum(4, 5)).toBe(9);
        expect(sum(0, 0)).toBe(0);
    });
    it('deve dispara um erro caso receba como parametro uma string', () => {
        expect(() => sum(4, '5')).toThrowError();
        expect(() => sum(4, '5')).toThrowError('Parameters must be numbers');
    });
});