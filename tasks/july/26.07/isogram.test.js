const isIsogram = require('./isogram');

test('aba => false', () => expect(isIsogram('aba')).toBe(false));