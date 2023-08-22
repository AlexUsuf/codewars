const DNAStrand = require('./dna.js');

describe('example test', () => {
    test('positive test-case', () => {
        expect(DNAStrand('AAA')).toBe('TTT');
    });
    test('negative test-case', () => {
        expect(DNAStrand(undefined)).toBeFalsy();
        expect(DNAStrand()).toBeFalsy();
    });
});
