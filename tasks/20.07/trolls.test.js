const trolls_function = require('./trolls');

test('delete vowels letters', () => {
    expect(trolls_function('hello, world')).toBe('hll, wrld');
    expect(trolls_function('introduction')).toBe('ntrdctn');
});