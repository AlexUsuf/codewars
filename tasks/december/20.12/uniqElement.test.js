const uniqEl = require('./uniqElement');

it('positive test cases', () => {
    expect(uniqEl([1,1,2])).toBe(2);
    expect(uniqEl([1,1,-2])).toBe(-2);
})