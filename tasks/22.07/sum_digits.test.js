const digitalRoot = require('./sum_digits');

test('12=3', () => {
    expect(digitalRoot(12)).toBe(3);
})