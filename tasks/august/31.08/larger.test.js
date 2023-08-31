const sumOrProduct = require('./larger');

describe('basic tests', () => {
    test('positive test case', () => expect(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)).toEqual("sum"));
    test('positive test case', () => expect(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3)).toEqual("product"));
    test('positive test case', () => expect(sumOrProduct([10, 20, 3, 30, 5, 4], 3)).toEqual("same"));
})