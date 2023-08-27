const findMissing = require('./findMissingElement');

describe('example test', () => {
    test('positive test-case', () => {
        expect(findMissing([7], [])).toBe(7);
    })
    test('empty test', () => {
        expect(findMissing()).toBeFalsy();
    })
});