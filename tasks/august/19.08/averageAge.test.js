const getAverageAge = require('./averageAge');
const list = [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];
test('positive test-case', () => {
    expect(getAverageAge(list)).toEqual(50);
});