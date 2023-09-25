const combine = require('./combine.js');
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }

describe('basic test-cases', () => {
    test('positive test-case', () => {
        expect(combine(objA, objB)).toEqual({ a: 13, b: 20, c: 36, d: 3 });
    })
})