const swapTwo = require('./swapTwoElements');


test('', () => expect(swapTwo([1, 2, 3, 4], 2, 4)).toEqual([1,4,3,2]));