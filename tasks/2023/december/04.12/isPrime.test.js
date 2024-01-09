const isPrime = require('./isPrime');
test('positive test-case', () => {
    expect(isPrime(2)).toEqual(true);
})