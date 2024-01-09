const rowSumOddNumbers = require('./sumOfOddNumbs');

describe('basic test', () => {
    it('positive test cases', () => {
        expect(rowSumOddNumbers(1)).toBe(1)
        expect(rowSumOddNumbers(2)).toBe(8)
        expect(rowSumOddNumbers(42)).toEqual(74088)
    })
})