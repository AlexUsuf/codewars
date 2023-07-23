const descendingOrder = require('./sorting_number');

test('0 => 0', () => {
    expect(descendingOrder(0)).toBe(0);
})

test('13 => 31', () => expect(descendingOrder(13)).toBe(31));