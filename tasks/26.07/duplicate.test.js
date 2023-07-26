const deleteDuplication = require('./duplicate');

test('[1,2,3,3] => [1,2,3]', () => expect(deleteDuplication([1,2,2])).toEqual([1,2]));