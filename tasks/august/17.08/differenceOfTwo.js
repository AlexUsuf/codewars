function twosDifference(input) {
    const doubleArr = new Array(...input).sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < input.length; i++) {
        if (doubleArr.indexOf(doubleArr[i] + 2) != -1) {
            result.push([doubleArr[i], doubleArr[i] + 2]);
        }
    }
    return result;
}

module.exports = twosDifference;