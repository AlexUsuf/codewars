const repeats = require('./sumOfArray.js');


describe('basic test', () => {
    it('positive test cases', () => {
        expect(repeats([1,1,2,2,3,4])).toEqual(7);
        expect(repeats([1,1,2,2,0,4])).toEqual(4);
        expect(repeats([1,1,2,2,0,-4])).toEqual(-4);
    })
})