const countArara = require('./countingAmazon');

describe('basic test', () => {
    it('positive test cases', () => {
        expect(countArara(1)).toEqual('anane')
        expect(countArara(3)).toEqual("adak anane")
    })
})