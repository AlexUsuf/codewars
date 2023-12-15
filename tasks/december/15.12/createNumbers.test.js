const createPhoneNumber = require('./createNumbers')

describe('basic test', () => {
    it('positive test cases', () => {
        expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890");
        expect(createPhoneNumber()).toBeDefined();                                       //проверяем, что переменная не является неопределенной, проверяем, что функция возвращает что-то
        expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe("(111) 111-1111");
    })
})