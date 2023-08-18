const countLanguages = require('./countLang');
const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
]
module.exports = list1;
describe('test cases', () => {
    test('positive test-case', () => {
        expect(countLanguages(list1)).toEqual({ C: 2, JavaScript: 1, Ruby: 1 });
    })
    test('empty test-case', () => {
        expect(countLanguages([])).toEqual({});
    })
})