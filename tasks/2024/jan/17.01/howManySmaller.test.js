const smaller = require('./howManySmaller.js')

describe('basic test cases', () => {
    it('positive test cases', () => {
        expect(smaller([5, 4, 3, 2, 1])).toEqual([4, 3, 2, 1, 0]);
        expect(smaller([1, 2, 3])).toEqual([0, 0, 0]);
    })
})