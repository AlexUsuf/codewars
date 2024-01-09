const zipWith = require('./zipWith');
const plus = (a, b) => a + b;
describe('basic test-cases', () => {
    test('positive test-case', () => {
        expect(zipWith(plus, [0,1,2,3,4,5], [6,5,4,3,2,1])).toEqual([6,6,6,6,6,6]);
    })
})