const duplicateCount = require('./double');

test('', () => expect(duplicateCount('aabbcde')).toBe(2));