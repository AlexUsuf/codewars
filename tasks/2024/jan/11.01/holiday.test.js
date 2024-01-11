const seaSick = require('./holiday.js');

describe('basic test cases', () => {
    it('positive test cases', () => {
        expect(seaSick('~')).toEqual("No Problem");
    })
})