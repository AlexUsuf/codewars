const all = require('./every.js');

describe('basic test cases', () => {
    it('positive test cases', () => {
        expect(all([1,2,3,4,5], function(el){return el < 9})).toBeTruthy;
        expect(all([1,2,3,4,5], function(el){return el > 9})).toBeFalsy;
    })
})