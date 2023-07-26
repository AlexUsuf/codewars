const isSquare = require('./square');

test('1-true', () => expect(isSquare(1)).toBe(true));
test('1-true', () => expect(isSquare(-1)).toBe(false));
test('1-true', () => expect(isSquare(16)).toBe(true));