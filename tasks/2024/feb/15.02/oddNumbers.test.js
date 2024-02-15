const oddOnesOut = require('./oddNumbers.js')


describe('basic test cases', () => {
    it('positive test cases', () => {
        expect(oddOnesOut([1, 2, 3, 2, 3])).toEqual([2, 3, 2, 3])
    })
})