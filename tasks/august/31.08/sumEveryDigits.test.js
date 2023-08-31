const digits = require('./sumEveryDigist');


describe('basic tests', () => {
    test('positive test-case', () => {
        expect(digits(156)).toEqual([ 6, 7, 11 ]);
        expect(digits(81596)).toEqual([ 9, 13, 17, 14, 6, 10, 7, 14, 11, 15 ]);
    })
})