const solution = require('./sortNumbs');

describe('test-cases', () => {
    test('empty', () => expect(solution()).toEqual([]));
    test('positive', () => expect(solution([1, 2, 0])).toEqual([0, 1, 2]));
    test('undefined', () => expect(solution(undefined)).toEqual([]));
});
