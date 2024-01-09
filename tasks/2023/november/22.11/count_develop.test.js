const countDevelopers = require('./count_develop')
const list2 = [
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML' },
    { firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML' }
  ];
describe('basic test-cases', () => {
    it('positive test-case', () => {
        expect(countDevelopers(list2)).toEqual(0);
    })
})