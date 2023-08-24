const primeFactors = require('./primeList')

describe('example tests', () => {
    test('positive test-case', () => {
        expect(primeFactors(1)).toEqual([]);
    })

    test('positempty value test-case', () => {
        expect(primeFactors()).toEqual([]);
    })

    test('positempty value test-case', () => {
        expect(primeFactors(8)).toEqual([2, 2, 2]);
    })
});