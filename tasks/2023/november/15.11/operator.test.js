const arithmetic = require('./operator');

describe('basic test', () => {
    test('positive test-cases', () => {
        expect(arithmetic(1, 2, "add")).toEqual(3);
        expect(arithmetic(1, 2, "multiply")).toEqual(2);
        expect(arithmetic(1, 2, "divide")).toEqual(0.5);
        expect(arithmetic(1, 2, "subtract")).toEqual(-1);
    })
})