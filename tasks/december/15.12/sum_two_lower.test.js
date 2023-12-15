const sumTwoSmallestNumbers = require('./sum_two_lowest');


describe('basic test', () => {
    it('positive test-cases', () => {
       expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).toEqual(13); 
       expect(sumTwoSmallestNumbers([5, -5])).toEqual(0); 
    })
})