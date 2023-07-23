const getMiddle = require('./middleCharacter');

test('test => es', () => expect(getMiddle('test')).toBe('es'));
test('test => es', () => expect(getMiddle('A')).toBe('A'));
test('test => es', () => expect(getMiddle('testing')).toBe('t'));