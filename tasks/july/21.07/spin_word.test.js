const spinWords = require('./spin_word.js');

test('lorem', () => {
    expect(spinWords('my dear friend')).toEqual('my dear dneirf');
})