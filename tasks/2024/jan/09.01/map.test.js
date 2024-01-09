const maps = require('./map.js')

describe('basic test cases', () => {
    it('positive test cases', () => {
        expect(maps([1,2,3])).toEqual([2, 4, 6]);
    })
})