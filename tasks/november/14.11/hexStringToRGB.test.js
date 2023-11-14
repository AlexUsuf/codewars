const hexStringToRGB = require('./hexStringToRGB.js')
describe('basic test-cases', () => {
    test('positive test-cases', () => {
        expect(hexStringToRGB('#FF9933')).toEqual({r:255, g:153, b:51})
    })
})