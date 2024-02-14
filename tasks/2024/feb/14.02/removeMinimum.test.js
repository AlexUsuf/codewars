const removeSmallest = require('./removeMinimum.js')


describe('basic test', () => {
    it('positive test case', () => {
        expect(removeSmallest([1, 2, 3, 4])).toEqual([2, 3, 4])
    })
})