const alphabetPosition = require('./replaceWord');


describe('test cases for function', () => {
    test('positive test-case', () => {
        expect(alphabetPosition("The sunset sets at twelve o' clock.")).toBe("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
    })
    test('empty test-case', () => {
        expect(alphabetPosition('')).toBe('');
    })
    test('undefined test-case', () => {
        expect(alphabetPosition()).toBeFalsy();
    })
})