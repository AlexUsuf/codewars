const solution = require('./sortNumbs');

describe('test-cases', () => {
    test('empty', => expect(solution()).toEqual([]));
    test('positive', => expect(solution(7,4,9)).toEqual([4,7,9]));
    test('undefined', => expect(solution(undefined)).toEqual([]));
});
