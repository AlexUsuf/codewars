const detectInt = require('./detectInt');


describe('basic test-cases', () => {
    test('positive test-case', () => {
        expect(detectInt( (x) => x > 9)).toEqual(10);
    })
    test('empty test-case', () => {
        expect(detectInt()).toEqual(1);
    })
})