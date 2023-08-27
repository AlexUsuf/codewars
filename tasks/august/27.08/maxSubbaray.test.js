const maxSequence = require('./maxSubbaray');

describe('', () => {
    test('positive test-case', () =>{
        expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
    })
    test('empty call', () => {
        expect(maxSequence()).toBeFalsy();
    })
})