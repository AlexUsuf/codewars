const sortByLength = require('./sortByLength')
test('basic positive test-case', () => {
    expect(sortByLength(["Beg", "Life", "I", "To"])).toEqual(["I", "To", "Beg", "Life"]);
})