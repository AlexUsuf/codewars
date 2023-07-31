const converter = require('./convert')

test('', () => expect(converter(10)).toBeCloseTo(3.54));