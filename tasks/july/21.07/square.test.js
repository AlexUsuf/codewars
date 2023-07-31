const square = require('./square.js');

test('12 in 14', () => {
    expect(square(12)).toBe(14);
});

test('string', () => {
    expect(square('ad')).toEqual(NaN)
})

test('1234 in 14916', () => {
    expect(square(1234)).toBe(14916)
})