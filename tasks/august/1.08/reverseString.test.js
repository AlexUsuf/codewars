const reverseString = require('./reverseString');

describe('tests', () => {
    test('', () => expect(reverseString('lalo')).toBe('olal'));
    test('', () => expect(reverseString('lana')).toBe('anal'));
    test('', () => expect(reverseString('123')).toBe('321'));
})