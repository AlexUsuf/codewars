const maxMultiple = require('./maxMultiply');

describe('tests', () => {
    test('positive test', () => expect(maxMultiple(2,7)).toBe(6));
    test('different type', () => expect(maxMultiple(true)).toEqual(undefined));
})