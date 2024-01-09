const getSum = require('./getSum');

describe('example test-cases', () => {
    test('positive test case', () => {
        expect(getSum(0,-1)).toBe(-1);
    })
    test('empty input', () => {
        expect(getSum(undefined)).toBe(undefined);
    })
    test('negative test case', () => {
        expect(getSum('1, 1')).not.toBe(10);
    })
})