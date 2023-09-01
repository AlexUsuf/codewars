const isAnagram = require('./anagram');

describe('basic test-cases', () => {
    test('positive test-case', () => {
        expect(isAnagram("foefet", "toffee")).toBeTruthy();
        expect(isAnagram("Buckethead", "DeathCubeK")).toBeTruthy();
    })
})