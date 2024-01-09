const countSheeps = require('./coutingSheep');

describe('', () => {
    test('positive test-case', () => expect(countSheeps([true])).toBe(1))
    test('negative test-case', () => expect(countSheeps([false, false, false])).not.toBe(1))
    test('empty test-case', () => expect(countSheeps([])).toBe(0))
})