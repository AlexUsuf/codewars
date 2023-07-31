const removeUrlAnchor = require('./removeAnchor');

test('', () => expect(removeUrlAnchor('www.codewars.com#about')).toBe('www.codewars.com'));
test('', () => expect(removeUrlAnchor('www.codewars.com')).toBe('www.codewars.com'));