function digits(num) {
    const result = [];
    const array = String(num).split('').map(element => +element);
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            result.push(array[i] + array[j]);
        }
    }
    return result;
}

module.exports = digits;