const isValidWalk = require('./walk.js');

describe('basic test cases', () => {
    it('positive test cases', () => {
        expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])).toEqual(true);
        expect(isValidWalk(['n','s','n','s','n','s','n','s','n'])).toEqual(false);
    })
})