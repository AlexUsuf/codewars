const defineSuit = require('./defineSuit')


describe('basic test', () => {
    it('positive test cases', () => {
        expect(defineSuit('Q♠')).toEqual('spades');
        expect(defineSuit('9♦')).toEqual('diamonds');
        expect(defineSuit('J10♥')).toEqual('hearts');
    })
})