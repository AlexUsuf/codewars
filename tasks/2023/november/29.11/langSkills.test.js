const myLanguages = require('./langSkills');
module.ecpor

describe('basic test-cases', () => {
    test('positive test-case', () => {
        expect(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65})).toEqual(["Ruby", "Python"]);
    })
})