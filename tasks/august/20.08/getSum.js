function getSum(a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let result = 0;
    if (a === b) {
        return a;
    }
    else {
        for (let i = min; i <= max; i++) {
            result += i;
        }
    }
    return result;
}

module.exports = getSum;