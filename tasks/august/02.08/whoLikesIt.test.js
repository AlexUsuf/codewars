const likes = require('./whoLikesIt');

describe('example tests', () => {
    test('should return correct text', () => expect(likes([])).toBe('no one likes this'));
    test('should return correct text', () => expect(likes(['Peter'])).toBe('Peter likes this'));
    test('should return correct text', () => expect(likes(['Jacob', 'Alex'])).toBe('Jacob and Alex like this'));
    test('should return correct text', () => expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toBe('Alex, Jacob and 2 others like this'));
})