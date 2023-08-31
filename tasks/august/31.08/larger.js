function sumOrProduct(array, n) {
    const doubleArrayMaxValue = array.slice().sort((a, b) => b - a).slice(0, n);
    const doubleArrayMinValue = array.slice().sort((a, b) => a - b).slice(0, n);
    const sumOfArray = doubleArrayMaxValue.reduce((a, b) => a + b, 0);
    const multiplyOfArray = doubleArrayMinValue.reduce((a, b) => a * b, 1);
    return sumOfArray > multiplyOfArray ? 'sum' :
        multiplyOfArray > sumOfArray ? 'product' : 'same'
}

module.exports = sumOrProduct;