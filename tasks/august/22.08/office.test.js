const broken = require('./office3');


describe('', () => {
    test('positive test-case', () => {
        expect(broken("10000000101101111110011001000")).toBe("01111111010010000001100110111");
    })
    test('negative test-case', () => {
        expect(broken()).toBeFalsy();
    })
})