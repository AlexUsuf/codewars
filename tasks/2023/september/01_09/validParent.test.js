const validParentheses = require('./validParent');


describe('basic test-cases', () => {
    test('positive test-case', () => {
        expect(validParentheses('')).toEqual(true);
    })
})