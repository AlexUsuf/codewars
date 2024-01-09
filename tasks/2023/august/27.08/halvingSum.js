function halvingSum(n) {
    if (n === undefined) {
        return false;
    }
    let res = 1;
    while (n !== 1) {
        res += n;
        n = Math.trunc(n / 2);
    }
    return res;
}

module.exports = halvingSum;