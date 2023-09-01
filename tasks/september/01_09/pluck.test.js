const pluck = require('./pluck');


describe('basic test-cases', () => {
    test('positive test-cases', () => {
        expect(pluck([{a:1}, {a:2}], 'a')).toEqual([1, 2]);
        expect(pluck([{a:1}, {a:2}], 'b')).toEqual([undefined, undefined]);
    })
})