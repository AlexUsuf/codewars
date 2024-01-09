const findUnique = require('./findUnique');
const inp1 = [1, 2, 1, 2, 3]
const inp2 = [1, 2, 1, 2, 4]
const inp3 = [1, 2, 1, 2, 5]
const inp4 = [1, 2, 1, 2, 6]
const inp5 = [1, 2, 1, 2, 7]



describe('basic test-cases', () => {
    it('positive test-cases', () => {
        expect(findUnique(inp1)).toEqual(3);
        expect(findUnique(inp2)).toEqual(4);
        expect(findUnique(inp3)).toEqual(5);
        expect(findUnique(inp4)).toEqual(6);
        expect(findUnique(inp5)).toEqual(7);
    })
})