const outed = require('./office1.js');
const meet1 = {'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}
test('positive-test', () => {
    expect(outed(meet1, 'laura')).toBe('Get Out Now!');
})
test('negative-test', () => {
    expect(outed('', '')).toBeFalsy();
})