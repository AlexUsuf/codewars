const mapArrToString = require("./mapArrToString")

describe('тест-кейсы для проверки функции', () => {
    test('позитивная проверка', () => expect(mapArrToString(['1', 2, 3])).toEqual(['2', '3']));
    test('пустой массив', () => expect(mapArrToString([])).toEqual([]));
    test('другие типы данных', () => expect(mapArrToString(['1', true, undefined])).toEqual([]));
})