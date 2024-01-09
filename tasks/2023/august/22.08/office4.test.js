const meeting = require('./office4');

describe('example test case', () => {
    test('positive test case', () => {
        expect(meeting(['X', 'O', 'X'])).toBe(1);
    })
    test('negative test case', () => {
        expect(meeting()).toBeFalsy();
    })    
})