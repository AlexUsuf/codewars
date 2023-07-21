const findOdd = require('./odd_int.js');

test('', () => {
    expect(findOdd([7])).toBe(7);
})

test('', () => {
    expect(findOdd([1,1,2])).toBe(2);
})

