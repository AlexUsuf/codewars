const isSameLanguage = require('./sameLang');
const list1 = require('./countLang.test')
const list2 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

describe('test-cases', () => {
    test('posiitive test-case', () => {
        expect(isSameLanguage(list1)).toEqual(false)
    })
    test('negative test-case', () => {
        expect(isSameLanguage(list1)).toEqual(false)
    })
})