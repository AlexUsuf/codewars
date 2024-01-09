const toCamelCase = require('./convertCamelCase');

describe('example test-cases', () => {
    test('positive test-case', () => expect(toCamelCase('the_stealth_warrior')).toBe('theStealthWarrior'));
    test('empty test-case', () => expect(toCamelCase('')).toBeDefined());
    test('negative test-case', () => expect(toCamelCase('123')).toBe('123'));
})