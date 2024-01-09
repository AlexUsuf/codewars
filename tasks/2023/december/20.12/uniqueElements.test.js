const uniqueValueOfArr = require('./uniqueElements');

describe('basic test cases', () => {
    it('positive test cases', () => {
        expect(uniqueValueOfArr([1,1,2])).toEqual([1, 2]);
        expect(uniqueValueOfArr([1,1,-12])).toEqual([1, -12]);
    })
})