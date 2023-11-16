const removeDuplicateWords = require('./duplicate')
const output = 'alpha beta gamma delta';
const input = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';

describe('basic test-cases', () => {
    it('positive test-cases', () => {
        expect(removeDuplicateWords(input)).toEqual(output);
    })
})