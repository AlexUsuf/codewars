const twosDifference = require('./differenceOfTwo');


test('', () => {
    expect(twosDifference([2,1,3,4])).toEqual([[1,3], [2,4]]);
})