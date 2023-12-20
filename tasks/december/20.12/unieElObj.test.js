const uniq = require('./unieElObj')

it('positive test cases', () => {
    expect(uniq([1,1,2])).toEqual('2');
    expect(uniq([1,1,-22])).toBe('-22');
})