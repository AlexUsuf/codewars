const halvingSum = require("./halvingSum")

test('positive test case', () => {
    expect(halvingSum(25)).toBe(47);
    expect(halvingSum(25)).not.toBe(437);
})