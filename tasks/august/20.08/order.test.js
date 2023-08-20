const order = require('./order');

test('positive test-case', () => expect(order("is2 Thi1s T4est 3a")).toEqual("Thi1s is2 3a T4est"));
