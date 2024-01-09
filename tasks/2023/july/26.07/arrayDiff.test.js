const arrayDiff = require('./arrayDiff');

test('', () => {
    expect(arrayDiff([1, 2], [2])).toEqual([1])
});