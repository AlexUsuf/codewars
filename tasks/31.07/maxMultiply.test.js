const maxMultiple = require('./maxMultiply');

describe('tests', () => {
    test('empty test', () => expect(maxMultiple()).toBe(0));
    test('positive test', () => expect(maxMultiple(2,7)).toBe(6));
    test('different type', () => expect(maxMultiple('0')).toEqual(NaN));
})