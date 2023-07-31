const multiply = require('./multiply.js');

test('1*1=2', () => {
    expect(multiply(1, 1)).toBe(1);
})
test('5*5=25', () => {
    expect(multiply(5, 5)).toBe(25);
})
test('0.5 * 0.5', () => {
    expect(multiply(0.5, 0.5)).toBeCloseTo(0.25);
})