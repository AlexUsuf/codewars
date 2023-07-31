const twoArePositive = require('./positiveNumbers');

test('1,2,3', () => {
    expect(twoArePositive(1,2,3)).toBe(false);
})
