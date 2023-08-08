const getLengthOfMissingArray = require('./missingLength')

test('', () => expect(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ), 2)).toEqual());