const isPrime = require('./primeNumber');

describe('Basic test-cases', () => {
    test('positive test-case', () => {
        expect(isPrime(0)).toBeFalsy();
        expect(isPrime(2)).toBeTruthy();
        expect(isPrime(-1)).toBeFalsy();
    })
    test('negative test-case', () => {
        expect(isPrime()).toBeFalsy();
    })
})