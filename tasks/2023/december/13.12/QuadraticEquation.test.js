const isPythagoreanTriple = require('./QuadraticEquation');

describe('basic test cases', () => {
    test('positive test-case', () => {
        expect(isPythagoreanTriple([4, 3, 5])).toBe(true);
        expect(isPythagoreanTriple([0, 1, 1])).toBeTruthy();
        expect(isPythagoreanTriple([13,12,5])).toBeTruthy();
        expect(isPythagoreanTriple([3, 3, 5])).toBeFalsy();
    })
})