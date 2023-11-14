const scoreBoard = require('./scoreBoard.js')
describe('basic test-cases', () => {
    test('positive test-cases', () => {
        expect(scoreBoard("The score is four nil")).toEqual([4, 0])
        expect(scoreBoard("two two")).toEqual([2, 2])
        expect(scoreBoard("Arsenal just conceded another goal, two nil")).toEqual([2, 0])
    })
    test('negative test-cases', () => {
        expect(scoreBoard(1)).toEqual('Error type')
    })
})