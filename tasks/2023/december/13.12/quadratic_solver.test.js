const quadratic = require('./quadratic_solver');

describe('basic test cases', () => {
    it('positive tests', () => {
        expect(quadratic(0, 1)).toEqual([1, -1, 0])
    })
})