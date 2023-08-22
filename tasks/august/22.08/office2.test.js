const boredom = require('./office2');
const list1 = {
    tim: 'change',
    jim: 'accounts',
    randy: 'canteen',
    sandy: 'change',
    andy: 'change',
    katie: 'IS',
    laura: 'change',
    saajid: 'IS',
    alex: 'trading',
    john: 'accounts',
    mr: 'finance'
}
describe('example test cases', () => {
    test('positive test-case', () => {
        expect(boredom(list1)).toBe('kill me now')
    })
    test('negative test-case', () => {
        expect(boredom()).toBeFalsy();
    })
})