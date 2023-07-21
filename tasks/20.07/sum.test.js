const sum = require('./sum');

test('0.1+0.2=0.3', () => {
    expect(sum(0.1,0.2)).toBeCloseTo(0.3);
});
test('1+1=2', () => {
    expect(sum(1,1)).toEqual(2);
});