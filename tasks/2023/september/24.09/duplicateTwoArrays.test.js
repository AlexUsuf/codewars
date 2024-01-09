const hotSingles = require('./duplicateTwoArrays.js');

describe('basic test-cases', () => {
    test('positive test-case', () => {
        expect(hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5])).toEqual([4, 5]);
    })
})