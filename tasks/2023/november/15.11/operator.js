function arithmetic(a, b, operator) {
    const obj = {
        'add': a + b,
        'multiply': a * b,
        'divide': a / b,
        'subtract': a - b
    }
    return obj[operator];
}

module.exports = arithmetic;