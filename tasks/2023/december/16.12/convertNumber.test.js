const digitize = require('./convertNumber')


describe('basic test', () => {
    it('positive test cases', () => {
        expect(digitize(35231)).toEqual([1, 3, 2, 5, 3])
    })
})