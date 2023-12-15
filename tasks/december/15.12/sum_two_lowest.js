function sumTwoSmallestNumbers(numbers) {
    const sortedArray = numbers.slice().sort((a, b) => a - b);
    const result = sortedArray[0] + sortedArray[1];
    return result;
}


module.exports = sumTwoSmallestNumbers;