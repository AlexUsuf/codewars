function removeSmallest(numbers) {
    let minimum = numbers.slice().sort((a, b) => a - b)[0];
    let count = 0;
    const result = [];
    for (const x of numbers) {
        if (count === 0 && minimum === x) {
            count += 1;
            continue;
        }
        result.push(x)
    }
    return result;
}

module.exports = removeSmallest;