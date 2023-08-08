const numberOfPairs = require('./pair')

test('', () => expect(numberOfPairs(['gray','black','purple','purple','gray','black'])).toBe(3))