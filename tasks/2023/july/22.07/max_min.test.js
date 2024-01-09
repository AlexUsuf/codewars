const highAndLow = require('./max_min');

test('', () => {
    expect(highAndLow('1 2 3 -1')).toBe('3 -1');
})