const duplicateEncode = require('./duplicate');

describe('duplicate encoder', () => {
    test('positive test-cases', () => {
        expect(duplicateEncode('din')).toEqual('(((');
        expect(duplicateEncode('recede')).toEqual('()()()');
        expect(duplicateEncode('Success')).toEqual(')())())');
    })
})