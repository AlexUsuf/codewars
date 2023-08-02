const missNumsFinder = require('./unknownAmount');



test('random test', () => expect(missNumsFinder([7, 1, 12, 9, 11, 14, 13, 6, 10, 5])).toEqual([2, 3, 4, 8]));