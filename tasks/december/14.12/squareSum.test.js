const squareSum = require('./squareSum');


describe('basic test', () =>{
    it('positive test cases', () => {
        expect(squareSum([1, 2])).toEqual(5)
        expect(squareSum([0, 3, 4, 5])).toEqual(50)
        expect(squareSum([])).toEqual(0)
    })
})