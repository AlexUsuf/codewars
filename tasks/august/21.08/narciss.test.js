const narcissistic = require('./narciss');

describe('test cases for function narciss', () => {
    test('positive test-case', () =>{
        expect(narcissistic(153)).toEqual(true);
    })
    test('negative test-case', () =>{
        expect(narcissistic()).toBeFalsy();
    })
    test('zero is value', () =>{
        expect(narcissistic(0)).toBe(true);
    })
    test('minus digit is value', () =>{
        expect(narcissistic(-153)).toBe(false);
    })
    test('positive test case', () =>{
        expect(narcissistic(2)).toBeTruthy();
    })
})